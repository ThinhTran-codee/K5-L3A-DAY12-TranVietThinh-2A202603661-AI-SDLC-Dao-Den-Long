import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { CONTRACT } from '../src/core/config.js';
import { GameSimulation, round3, distXZ } from '../src/core/simulation.js';
import { runHeadless } from '../src/headless.js';

const rootDir = process.cwd();
const headlessScript = path.join(rootDir, 'src', 'headless.js');

test('AC-1.0: game.contract.json matches src/core/config.js and Test Contract v1.0 schema', () => {
  const raw = fs.readFileSync(path.join(rootDir, 'game.contract.json'), 'utf8');
  const parsed = JSON.parse(raw);
  assert.equal(parsed.contract_version, '1.0');
  assert.deepEqual(parsed.tuning, CONTRACT.tuning);
});

test('AC-1.1: Player movement & cam_yaw_deg rotation formula (60 ticks = 1s)', () => {
  const sim = new GameSimulation({
    seed: 1,
    scenario: {
      player: { pos: [0, 0, 0], carried: 0, flames: 3 },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: []
    }
  });

  // Move [0, 1] with cam_yaw_deg = 0 -> +Z at player_speed (8 m/s)
  for (let k = 0; k < 60; k++) {
    sim.step(k === 0 ? { tick: 0, move: [0, 1], cam_yaw_deg: 0 } : null);
  }
  assert.equal(round3(sim.player.pos[0]), 0);
  assert.equal(round3(sim.player.pos[2]), CONTRACT.tuning.player_speed);

  // Move [0, 1] with cam_yaw_deg = 90 -> x' = 0*cos(90)+1*sin(90) = 1 (+X), z' = 0
  for (let k = 60; k < 120; k++) {
    sim.step(k === 60 ? { tick: 60, move: [0, 1], cam_yaw_deg: 90 } : null);
  }
  assert.equal(round3(sim.player.pos[0]), CONTRACT.tuning.player_speed);
  assert.equal(round3(sim.player.pos[2]), CONTRACT.tuning.player_speed);

  // Diagonal move [1, 1] normalized to length 1
  const simDiag = new GameSimulation({
    seed: 1,
    scenario: { random_motes: false, random_shades: false, motes: [], shades: [] }
  });
  for (let k = 0; k < 60; k++) {
    simDiag.step(k === 0 ? { tick: 0, move: [1, 1], cam_yaw_deg: 0 } : null);
  }
  assert.equal(round3(Math.hypot(simDiag.player.pos[0], simDiag.player.pos[2])), CONTRACT.tuning.player_speed);
});

test('AC-1.2 & AC-1.3: Mote pickup, carry_capacity, lantern deposit, lantern_lit, and win (all_lit)', () => {
  const scenario = {
    player: { pos: [0, 0, 0], carried: 0, flames: 3 },
    random_motes: false,
    random_shades: false,
    motes: [
      [0, 0, 1.5],
      [0, 0, 1.8],
      [0, 0, 1.9]
    ],
    shades: [],
    lanterns: [
      { id: 'L1', pos: [0, 0, 2.5], deposited: 0, lit: false },
      { id: 'L2', pos: [20, 0, 0], deposited: 3, lit: true },
      { id: 'L3', pos: [-20, 0, 0], deposited: 3, lit: true },
      { id: 'L4', pos: [0, 0, -20], deposited: 3, lit: true },
      { id: 'L5', pos: [20, 0, 20], deposited: 3, lit: true }
    ],
    time_left_s: 300
  };

  const inputs = {
    frames: [
      { tick: 0, move: [0, 0], interact: false },
      { tick: 1, interact: true },
      { tick: 2, interact: false }
    ]
  };

  const lines = runHeadless({
    seed: 10,
    night: 1,
    scenario,
    inputs,
    ticks: 100,
    snapshotEvery: 10
  }).map((l) => JSON.parse(l));

  // Tick 0 snapshot has 0 score (pre-lit lanterns in scenario do not add score)
  assert.equal(lines[0].type, 'snapshot');
  assert.equal(lines[0].tick, 0);
  assert.equal(lines[0].score, 0);

  // At tick 1, all 3 motes are within pickup_radius (2.0m), so 3 mote_picked events happen
  const pickedEvents = lines.filter((x) => x.type === 'event' && x.name === 'mote_picked');
  assert.equal(pickedEvents.length, 3);
  assert.equal(pickedEvents[2].data.carried, 3);

  // At tick 2, interact rising edge deposits 3 motes into L1, lights L1, and triggers game_over won (all_lit)
  const depositEv = lines.find((x) => x.type === 'event' && x.name === 'deposit');
  assert.ok(depositEv);
  assert.deepEqual(depositEv.data, { lantern_id: 'L1', amount: 3, deposited: 3 });

  const litEv = lines.find((x) => x.type === 'event' && x.name === 'lantern_lit');
  assert.ok(litEv);
  assert.deepEqual(litEv.data, { lantern_id: 'L1' });

  const winEv = lines.find((x) => x.type === 'event' && x.name === 'game_over');
  assert.ok(winEv);
  assert.deepEqual(winEv.data, { result: 'won', reason: 'all_lit' });

  const endRec = lines[lines.length - 1];
  assert.equal(endRec.type, 'end');
  assert.equal(endRec.state, 'won');
  assert.equal(endRec.ticks, 2);
});

test('AC-1.4: Pulse stuns shades within pulse_radius, pushes them by pulse_push_m, and respects cooldown', () => {
  const scenario = {
    player: { pos: [0, 0, 0], carried: 2, flames: 3 },
    random_motes: false,
    random_shades: false,
    motes: [],
    shades: [
      { id: 'S1', pos: [0, 0, 4.0] }, // inside pulse_radius (6.0m)
      { id: 'S2', pos: [0, 0, 10.0] } // outside pulse_radius
    ],
    time_left_s: 300
  };

  const sim = new GameSimulation({ seed: 1, scenario });
  // Step 0 -> tick 1: trigger pulse
  const evs1 = sim.step({ tick: 0, pulse: true });
  const pulseEv = evs1.find((e) => e.name === 'pulse');
  assert.ok(pulseEv);
  assert.deepEqual(pulseEv.data.stunned_ids, ['S1']);
  assert.equal(sim.player.carried, 1);

  const s1 = sim.shades.find((s) => s.id === 'S1');
  assert.equal(s1.state, 'stunned');
  // Pushed from Z=4.0 by pulse_push_m (4.0m) -> Z=8.0
  assert.equal(round3(s1.pos[2]), 8.0);
});

test('AC-1.5: Safe radius around lit lantern prevents shade entry, and shade hit reduces flames -> no_flames loss', () => {
  // 1) Test safe_radius around a lit lantern
  const safeSim = new GameSimulation({
    seed: 1,
    scenario: {
      player: { pos: [0, 0, 0], carried: 0, flames: 3 },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: [{ id: 'S1', pos: [8, 0, 0] }],
      lanterns: [{ id: 'L1', pos: [0, 0, 0], lit: true, deposited: 3 }]
    }
  });
  for (let k = 0; k < 180; k++) {
    safeSim.step(null);
  }
  // Shade must not enter closer than safe_radius (5.0m) to L1 at [0,0,0], and player is unharmed
  assert.ok(distXZ(safeSim.shades[0].pos, [0, 0, 0]) >= CONTRACT.tuning.safe_radius - 1e-6);
  assert.equal(safeSim.player.flames, 3);

  // 2) Test shade hit & loss when flames reach 0
  const hitLines = runHeadless({
    seed: 1,
    night: 1,
    scenario: {
      player: { pos: [0, 0, 0], carried: 0, flames: 1 },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: [{ id: 'S1', pos: [1.0, 0, 0] }]
    },
    inputs: { frames: [] },
    ticks: 60,
    snapshotEvery: 10
  }).map((l) => JSON.parse(l));

  const hitEv = hitLines.find((x) => x.type === 'event' && x.name === 'player_hit');
  assert.ok(hitEv);
  assert.deepEqual(hitEv.data, { by: 'shade', flames: 0, dropped: 0 });

  const overEv = hitLines.find((x) => x.type === 'event' && x.name === 'game_over');
  assert.ok(overEv);
  assert.deepEqual(overEv.data, { result: 'lost', reason: 'no_flames' });
});

test('AC-1.6: Dawn timeout triggers game_over lost with reason "dawn"', () => {
  const lines = runHeadless({
    seed: 1,
    night: 1,
    scenario: {
      player: { pos: [0, 0, 0], carried: 0, flames: 3 },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: [],
      time_left_s: 1
    },
    inputs: { frames: [] },
    ticks: 120,
    snapshotEvery: 30
  }).map((l) => JSON.parse(l));

  const overEv = lines.find((x) => x.type === 'event' && x.name === 'game_over');
  assert.ok(overEv);
  assert.equal(overEv.tick, 60);
  assert.deepEqual(overEv.data, { result: 'lost', reason: 'dawn' });
});

test('AC-1.7: CLI determinism (identical seed/inputs/scenario produces byte-identical JSONL) and exit code 2 on malformed inputs', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'dao-den-long-test-'));
  const out1 = path.join(tmpDir, 'run1.jsonl');
  const out2 = path.join(tmpDir, 'run2.jsonl');

  const r1 = spawnSync('node', [headlessScript, '--seed', '2026', '--night', '1', '--ticks', '300', '--out', out1], {
    encoding: 'utf8'
  });
  assert.equal(r1.status, 0);

  const r2 = spawnSync('node', [headlessScript, '--seed', '2026', '--night', '1', '--ticks', '300', '--out', out2], {
    encoding: 'utf8'
  });
  assert.equal(r2.status, 0);

  const content1 = fs.readFileSync(out1, 'utf8');
  const content2 = fs.readFileSync(out2, 'utf8');
  assert.equal(content1, content2);
  assert.ok(content1.length > 100);

  // Test exit code 2 when inputs has non-increasing frame ticks
  const badInputsPath = path.join(tmpDir, 'bad-inputs.json');
  fs.writeFileSync(
    badInputsPath,
    JSON.stringify({
      frames: [
        { tick: 10, move: [0, 1] },
        { tick: 10, move: [0, 0] }
      ]
    }),
    'utf8'
  );

  const rBad = spawnSync(
    'node',
    [headlessScript, '--seed', '1', '--night', '1', '--inputs', badInputsPath, '--ticks', '20', '--out', out1],
    { encoding: 'utf8' }
  );
  assert.equal(rBad.status, 2);
  assert.ok(rBad.stderr.includes('strictly increasing'));
});
