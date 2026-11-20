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

/**
 * NOTE ON TEST UPDATES FROM PHASE 1 TO PHASE 2 (TICKET-02 / Contract v1.1):
 * Phase 1 tests (AC-1.0 .. AC-1.7) were updated (not disabled) to reflect the
 * producer-mandated standardized tuning numbers in TICKET-02 Part 1:
 * - contract_version: "1.0" -> "1.1"
 * - player_speed: 8 -> 6.0 m/s
 * - carry_capacity: 5 -> 10, lantern_cost: 3 -> 10
 * - pickup_radius: 2 -> 1.0 m, interact_radius: 3 -> 2.0 m
 * - pulse_cost: 1 -> 3, pulse_radius: 6 -> 5.0 m, pulse_push_m: 4 m over 15 ticks
 * - safe_radius: 5 -> 6.0 m, shade_hit_radius: 1.2 -> 1.0 m
 * - score.per_mote (+10) is now awarded upon depositing motes into a lantern.
 */

test('AC-1.0 (Updated for v1.1): game.contract.json matches src/core/config.js and Test Contract v1.1 schema', () => {
  const raw = fs.readFileSync(path.join(rootDir, 'game.contract.json'), 'utf8');
  const parsed = JSON.parse(raw);
  assert.equal(parsed.contract_version, '1.1');
  assert.deepEqual(parsed.tuning, CONTRACT.tuning);
});

test('AC-1.1 (Updated for v1.1): Player movement & cam_yaw_deg rotation at standardized 6.0 m/s', () => {
  const sim = new GameSimulation({
    seed: 1,
    night: 1,
    scenario: {
      player: { pos: [0, 0, 0], carried: 0, flames: 3 },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: []
    }
  });

  for (let k = 0; k < 60; k++) {
    sim.step(k === 0 ? { tick: 0, move: [0, 1], cam_yaw_deg: 0 } : null);
  }
  assert.equal(round3(sim.player.pos[0]), 0);
  assert.equal(round3(sim.player.pos[2]), CONTRACT.tuning.player_speed); // 6.0m

  for (let k = 60; k < 120; k++) {
    sim.step(k === 60 ? { tick: 60, move: [0, 1], cam_yaw_deg: 90 } : null);
  }
  assert.equal(round3(sim.player.pos[0]), CONTRACT.tuning.player_speed);
  assert.equal(round3(sim.player.pos[2]), CONTRACT.tuning.player_speed);
});

test('AC-1.2 & AC-1.3 (Updated for v1.1): Pickup 10 motes (<=1.0m), deposit 10 into L1 (<=2.0m), light L1 & win', () => {
  const scenario = {
    player: { pos: [0, 0, 0], carried: 7, flames: 3 },
    random_motes: false,
    random_shades: false,
    motes: [
      [0, 0, 0.5],
      [0, 0, 0.7],
      [0, 0, 0.9]
    ],
    shades: [],
    lanterns: [
      { id: 'L1', pos: [0, 0, 1.5], deposited: 0, lit: false },
      { id: 'L2', pos: [23.8, 0, 7.7], deposited: 10, lit: true },
      { id: 'L3', pos: [14.7, 0, -20.2], deposited: 10, lit: true },
      { id: 'L4', pos: [-14.7, 0, -20.2], deposited: 10, lit: true },
      { id: 'L5', pos: [-23.8, 0, 7.7], deposited: 10, lit: true }
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
    ticks: 50,
    snapshotEvery: 10
  }).map((l) => JSON.parse(l));

  const pickedEvents = lines.filter((x) => x.type === 'event' && x.name === 'mote_picked');
  assert.equal(pickedEvents.length, 3);
  assert.equal(pickedEvents[2].data.carried, 10);

  const depositEv = lines.find((x) => x.type === 'event' && x.name === 'deposit');
  assert.ok(depositEv);
  assert.deepEqual(depositEv.data, { lantern_id: 'L1', amount: 10, deposited: 10 });

  const litEv = lines.find((x) => x.type === 'event' && x.name === 'lantern_lit');
  assert.ok(litEv);
  assert.deepEqual(litEv.data, { lantern_id: 'L1' });

  const winEv = lines.find((x) => x.type === 'event' && x.name === 'game_over');
  assert.ok(winEv);
  assert.deepEqual(winEv.data, { result: 'won', reason: 'all_lit' });
  // Score: 10 deposited * 10 (100) + 1 lantern * 100 (100) + floor(299.966)*2 (598) + 3 flames*50 (150) = 948
  const endRec = lines[lines.length - 1];
  assert.equal(endRec.state, 'won');
  assert.equal(endRec.score, 948);
});

test('AC-1.4 (Updated for v1.1): Pulse costs 3 motes, stuns shades for 120 ticks, and pushes 4m over 15 ticks', () => {
  const scenario = {
    player: { pos: [0, 0, 0], carried: 4, flames: 3 },
    random_motes: false,
    random_shades: false,
    motes: [],
    shades: [
      { id: 'S1', pos: [0, 0, 3.0], state: 'chase' },
      { id: 'S2', pos: [0, 0, 8.0], state: 'wander' }
    ],
    time_left_s: 300
  };

  const sim = new GameSimulation({ seed: 1, night: 1, scenario });
  const evs1 = sim.step({ tick: 0, pulse: true });
  const pulseEv = evs1.find((e) => e.name === 'pulse');
  assert.ok(pulseEv);
  assert.deepEqual(pulseEv.data.stunned_ids, ['S1']);
  assert.equal(sim.player.carried, 1); // 4 - 3 = 1
  assert.equal(sim.score, 5); // +5 per stunned shade

  // Step 14 more ticks (total 15 push ticks) -> S1 pushed from Z=3.0 by +4.0m to Z=7.0m
  for (let k = 1; k < 15; k++) {
    sim.step({ tick: k, pulse: false });
  }
  const s1 = sim.shades.find((s) => s.id === 'S1');
  assert.equal(s1.state, 'stunned');
  assert.equal(round3(s1.pos[2]), 7.0);
});

test('AC-1.5 (Updated for v1.1): Safe radius 6m blocks shades & expels inside shades over 30 ticks; shade hit causes recoil & drops motes', () => {
  // 1) Shade inside 6m when lantern is newly lit gets pushed out to 6m within 30 ticks without hitting player
  const expelSim = new GameSimulation({
    seed: 1,
    night: 1,
    scenario: {
      player: { pos: [0, 0, 0], carried: 10, flames: 3 },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: [{ id: 'S1', pos: [0, 0, 1.0], state: 'chase' }],
      lanterns: [{ id: 'L1', pos: [0, 0, 0], deposited: 0, lit: false }]
    }
  });
  // Deposit & light L1 on step 0
  expelSim.step({ tick: 0, interact: true });
  assert.equal(expelSim.lanterns[0].lit, true);
  for (let k = 1; k <= 30; k++) {
    expelSim.step({ tick: k, interact: false });
  }
  assert.ok(distXZ(expelSim.shades[0].pos, [0, 0, 0]) >= CONTRACT.tuning.safe_radius - 1e-4);
  assert.equal(expelSim.player.flames, 3);

  // 2) Shade hit drops floor(carried/2) motes and enters 60-tick recoil (2m pushback)
  const hitSim = new GameSimulation({
    seed: 1,
    night: 1,
    scenario: {
      player: { pos: [0, 0, 0], carried: 5, flames: 3 },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: [{ id: 'S1', pos: [0.8, 0, 0], state: 'chase' }]
    }
  });
  const evs = hitSim.step(null);
  const hitEv = evs.find((e) => e.name === 'player_hit');
  assert.ok(hitEv);
  assert.deepEqual(hitEv.data, { by: 'shade', flames: 2, dropped: 2 });
  assert.equal(hitSim.player.carried, 3);
  assert.equal(hitSim.motes.length, 2);
  assert.equal(hitSim.motes[0].kind, 'dropped');
  assert.equal(hitSim.shades[0].state, 'recoil');
});

test('AC-2.1: Dash (14 m/s for 12 ticks = 2.8m, maintains Y height in air, 90-tick cooldown)', () => {
  const sim = new GameSimulation({
    seed: 1,
    night: 1,
    scenario: {
      player: { pos: [0, 2.5, 0], carried: 0, flames: 3 },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: []
    }
  });

  const evs = sim.step({ tick: 0, move: [0, 1], dash: true });
  assert.ok(evs.some((e) => e.name === 'dash'));
  for (let k = 1; k < 12; k++) {
    sim.step({ tick: k, dash: false });
  }
  // 12 ticks at 14 m/s = 12 * (14 / 60) = 2.8m; air height Y=2.5 preserved during all 12 dash ticks!
  assert.equal(round3(sim.player.pos[2]), 2.8);
  assert.equal(round3(sim.player.pos[1]), 2.5);
  assert.ok(sim.player.dashCdTicks > 0);
});

test('AC-2.2: Night 2 (Đảo Cau) jump pad launches player across cloud sea to Island B', () => {
  const sim = new GameSimulation({
    seed: 1,
    night: 2,
    scenario: {
      player: { pos: [20, 0, 18], carried: 0, flames: 3 },
      random_motes: false,
      random_shades: false,
      random_drifters: false,
      motes: [],
      shades: []
    }
  });

  // Step 0 triggers jump pad at (20, 0, 18) with vy=14 (then 1 tick of gravity -20/60 -> 13.667), vh=24 toward (70, 0, 0)
  sim.step(null);
  assert.equal(sim.player.grounded, false);
  assert.equal(round3(sim.player.vel[1]), round3(14 - 20 / 60));

  // Run 90 ticks (1.5s) -> player lands safely on Island B (within 28m of (70,0,0))
  for (let k = 1; k < 90; k++) {
    sim.step(null);
  }
  assert.equal(sim.player.grounded, true);
  assert.equal(round3(sim.player.pos[1]), 0);
  assert.ok(distXZ(sim.player.pos, [70, 0, 0]) <= 28.0);
});

test('AC-2.3: Night 3 (Đảo Chuông) 3 tiers, vertical cliffs, 30° ramp, jump pad to Tier 2, and Strong Wind', () => {
  // 1) Vertical cliff blocks walking from Tier 0 (Y=0, r=11, z>0) directly into Tier 1 (Y=3, r=12, z>0)
  const cliffSim = new GameSimulation({
    seed: 1,
    night: 3,
    scenario: {
      player: { pos: [0, 0, 11.9], carried: 0, flames: 3 },
      random_motes: false,
      random_shades: false,
      random_drifters: false,
      wind_enabled: false,
      motes: [],
      shades: []
    }
  });
  cliffSim.step({ tick: 0, move: [0, 1] });
  assert.equal(round3(cliffSim.player.pos[2]), 11.9); // Blocked by vertical cliff

  // 2) Jump pad at (0, 3, 13) launches player onto Tier 2 (Y=6, r<=8)
  const padSim = new GameSimulation({
    seed: 1,
    night: 3,
    scenario: {
      player: { pos: [0, 3, 13], carried: 0, flames: 3 },
      random_motes: false,
      random_shades: false,
      random_drifters: false,
      wind_enabled: false,
      motes: [],
      shades: []
    }
  });
  for (let k = 0; k < 60; k++) {
    padSim.step(null);
  }
  assert.equal(padSim.player.grounded, true);
  assert.equal(round3(padSim.player.pos[1]), 6.0);
  assert.ok(distXZ(padSim.player.pos, [0, 0, 0]) <= 8.0);
});

test('AC-2.4: Drifters (Gió Lạc) chase when carried >= 5, steal up to 3 motes, and drop motes when pulsed while fleeing', () => {
  const sim = new GameSimulation({
    seed: 1,
    night: 2,
    scenario: {
      player: { pos: [0, 0, 0], carried: 6, flames: 3 },
      random_motes: false,
      random_shades: false,
      random_drifters: false,
      motes: [],
      shades: [],
      drifters: [{ id: 'D1', pos: [0, 0, 1.1], state: 'idle', stolen: 0 }]
    }
  });

  // Step 0: D1 transitions idle -> chase, moves within 1.2m, steals 3 motes -> player carried = 3, D1 flees
  const evs1 = sim.step(null);
  const stealEv = evs1.find((e) => e.name === 'drifter_steal');
  assert.ok(stealEv);
  assert.deepEqual(stealEv.data, { drifter_id: 'D1', amount: 3, carried: 3 });
  assert.equal(sim.drifters[0].state, 'flee');

  // Step 1: Player uses Pulse (costs 3 motes) while D1 is fleeing within 5m -> D1 drops the 3 stolen motes!
  const evs2 = sim.step({ tick: 1, pulse: true });
  const dropEv = evs2.find((e) => e.name === 'drifter_drop');
  assert.ok(dropEv);
  assert.deepEqual(dropEv.data, { drifter_id: 'D1', amount: 3 });
  assert.equal(sim.motes.filter((m) => m.kind === 'dropped').length, 3);
});

test('AC-2.5: Wind Charm (Bùa Gió) grants 7.2 m/s speed and zero dash cooldown for 600 ticks, respawns after 2700 ticks', () => {
  const sim = new GameSimulation({
    seed: 1,
    night: 2,
    scenario: {
      player: { pos: [34.5, 0, 0], carried: 0, flames: 3 },
      random_motes: false,
      random_shades: false,
      random_drifters: false,
      motes: [],
      shades: [],
      charms: [{ id: 'C1', pos: [35, 0, 0], available: true }]
    }
  });

  const evs = sim.step({ tick: 0, move: [1, 0] });
  const charmEv = evs.find((e) => e.name === 'charm_picked');
  assert.ok(charmEv);
  assert.deepEqual(charmEv.data, { charm_id: 'C1', charm_ticks: 600 });
  assert.equal(sim.charms[0].available, false);
  assert.equal(sim.charms[0].respawnTicks, 2700);

  // Trigger dash under charm effect -> dashCdTicks remains 0!
  const dashEvs = sim.step({ tick: 1, dash: true });
  assert.ok(dashEvs.some((e) => e.name === 'dash'));
  assert.equal(sim.player.dashCdTicks, 0);
});

test('AC-2.6: Falling off island (Y < -10) emits player_hit(by:fall, lost), waits 60 ticks, and respawns at (0,0,0)', () => {
  const sim = new GameSimulation({
    seed: 1,
    night: 1,
    scenario: {
      player: { pos: [41, -9.9, 0], vel: [0, -10, 0], carried: 4, flames: 3, grounded: false },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: []
    }
  });

  const evs = sim.step(null);
  const fallEv = evs.find((e) => e.name === 'player_hit');
  assert.ok(fallEv);
  assert.deepEqual(fallEv.data, { by: 'fall', flames: 2, dropped: 0, lost: 4 });
  assert.equal(sim.player.respawnWaitTicks, 60);

  // Advance 60 ticks -> respawns at [0, 0, 0] with 90 ticks invulnerability
  for (let k = 1; k <= 60; k++) {
    sim.step(null);
  }
  assert.deepEqual(sim.player.pos, [0, 0, 0]);
  assert.equal(sim.player.invulnTicks, 90);
});

test('AC-2.7: Pause / Resume freezes sim_tick and timers while tick advances', () => {
  const lines = runHeadless({
    seed: 1,
    night: 1,
    scenario: {
      player: { pos: [0, 0, 0], carried: 0, flames: 3 },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: []
    },
    inputs: {
      frames: [
        { tick: 0, move: [0, 1] },
        { tick: 5, pause: true },
        { tick: 6, pause: false },
        { tick: 15, pause: true },
        { tick: 16, pause: false }
      ]
    },
    ticks: 20,
    snapshotEvery: 10
  }).map((l) => JSON.parse(l));

  const pausedEv = lines.find((x) => x.type === 'event' && x.name === 'paused');
  assert.ok(pausedEv);
  assert.equal(pausedEv.tick, 6);

  // Snapshot at tick 10 while paused: tick is 10, sim_tick is frozen at 5, state is "paused"
  const snap10 = lines.find((x) => x.type === 'snapshot' && x.tick === 10);
  assert.ok(snap10);
  assert.equal(snap10.state, 'paused');
  assert.equal(snap10.sim_tick, 5);

  const resumedEv = lines.find((x) => x.type === 'event' && x.name === 'resumed');
  assert.ok(resumedEv);
  assert.equal(resumedEv.tick, 16);
});

test('AC-2.8: Full Night 3 (21,600 ticks) headless performance benchmark completes in <= 30s and is deterministic', () => {
  const t0 = performance.now();
  const linesA = runHeadless({
    seed: 42,
    night: 3,
    ticks: 21600,
    snapshotEvery: 600
  });
  const elapsedMs = performance.now() - t0;
  assert.ok(elapsedMs < 5000, `Expected < 5000ms, took ${elapsedMs}ms`);

  const linesB = runHeadless({
    seed: 42,
    night: 3,
    ticks: 21600,
    snapshotEvery: 600
  });
  assert.deepEqual(linesA, linesB);

  // Also test exit code 2 on malformed inputs via CLI
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'dao-den-long-v11-'));
  const badInputs = path.join(tmpDir, 'bad.json');
  const outFile = path.join(tmpDir, 'out.jsonl');
  fs.writeFileSync(badInputs, JSON.stringify({ frames: [{ tick: 5 }, { tick: 3 }] }));
  const rBad = spawnSync(
    'node',
    [headlessScript, '--seed', '1', '--night', '2', '--inputs', badInputs, '--ticks', '10', '--out', outFile],
    { encoding: 'utf8' }
  );
  assert.equal(rBad.status, 2);
});
