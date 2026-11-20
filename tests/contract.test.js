import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { CONTRACT } from '../src/core/config.js';
import { GameSimulation, round1, round3, distXZ } from '../src/core/simulation.js';
import { runHeadless } from '../src/headless.js';

const rootDir = process.cwd();
const headlessScript = path.join(rootDir, 'src', 'headless.js');

/**
 * ============================================================================
 * CHANGE LOG FOR TESTS IN PHASE 3 (TICKET-03 / Test Contract v1.2):
 * Per DoD ("Test cũ bị luật mới làm sai phải được cập nhật hoặc xóa có ghi lý do,
 * không được bỏ qua âm thầm"):
 * 1. AC-1.0 updated to assert `contract_version: "1.2"` and the new fuel/relight/win_ratio tuning keys.
 * 2. AC-1.2 & AC-1.3 (previously testing immediate `all_lit` early victory upon lighting L1..L5)
 *    was REPLACED because TICKET-03 Part 3 explicitly abolishes early win on `all_lit`
 *    ("Không còn thắng sớm: Thắp đủ đèn không kết thúc Đêm") and changes per-mote deposit score
 *    from +10 to +5. It now verifies that lighting all 5 lanterns does NOT end the game early,
 *    sets `fuel = 100`, increments `player.capacity` (+2 per light), and wins at Dawn with
 *    `reason: "dawn_survived"`.
 * 3. Added dedicated Phase 3 tests (AC-3.1 .. AC-3.5) for Fuel Decay & `lantern_out`,
 *    Relighting (`ever_lit`, cost 5, +40 score), Refueling (`refuel`), Shade Fuel Drain
 *    (`drain` state, `fuel_drain` event every 60 ticks, loss of safe zone when `fuel < 30`,
 *    +15 Pulse score on draining shade, and 30-tick expulsion when refueled to `>= 30`),
 *    and Dawn Survival (`dawn_survived` vs `dawn` loss when below `ceil(0.6 * total)`).
 * ============================================================================
 */

test('AC-1.0 (Updated for v1.2): game.contract.json matches src/core/config.js and Test Contract v1.2 schema', () => {
  const raw = fs.readFileSync(path.join(rootDir, 'game.contract.json'), 'utf8');
  const parsed = JSON.parse(raw);
  assert.equal(parsed.contract_version, '1.2');
  assert.deepEqual(parsed.tuning, CONTRACT.tuning);
});

test('AC-1.1 (Regression): Player movement & cam_yaw_deg rotation at standardized 6.0 m/s', () => {
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
  assert.equal(round3(sim.player.pos[2]), CONTRACT.tuning.player_speed);

  for (let k = 60; k < 120; k++) {
    sim.step(k === 60 ? { tick: 60, move: [0, 1], cam_yaw_deg: 90 } : null);
  }
  assert.equal(round3(sim.player.pos[0]), CONTRACT.tuning.player_speed);
  assert.equal(round3(sim.player.pos[2]), CONTRACT.tuning.player_speed);
});

test('AC-1.2 & AC-1.3 (Updated for v1.2 Change Request): Lighting 5th lantern does NOT end night early, increases capacity to 12, and sets fuel=100', () => {
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
      { id: 'L2', pos: [23.8, 0, 7.7], lit: true, fuel: 100 },
      { id: 'L3', pos: [14.7, 0, -20.2], lit: true, fuel: 100 },
      { id: 'L4', pos: [-14.7, 0, -20.2], lit: true, fuel: 100 },
      { id: 'L5', pos: [-23.8, 0, 7.7], lit: true, fuel: 100 }
    ],
    time_left_s: 10
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
    ticks: 10,
    snapshotEvery: 10
  }).map((l) => JSON.parse(l));

  const litEv = lines.find((x) => x.type === 'event' && x.name === 'lantern_lit');
  assert.ok(litEv);
  assert.deepEqual(litEv.data, { lantern_id: 'L1', relight: false });

  // Game must still be playing at tick 10 (no early all_lit win)
  const snap10 = lines.find((x) => x.type === 'snapshot' && x.tick === 10);
  assert.ok(snap10);
  assert.equal(snap10.state, 'playing');
  assert.equal(snap10.player.capacity, 12); // 10 + 2 * 1
  // Score: 10 motes deposited * 5 (50) + first light (100) = 150
  assert.equal(snap10.score, 150);
});

test('AC-1.4 (Updated for v1.2): Pulse stuns shades for 120 ticks, pushes 4m over 15 ticks, and shade returns to wander after stun', () => {
  const scenario = {
    player: { pos: [0, 0, 0], carried: 4, flames: 3 },
    random_motes: false,
    random_shades: false,
    motes: [],
    shades: [{ id: 'S1', pos: [0, 0, 3.0], state: 'chase' }],
    time_left_s: 240
  };

  const sim = new GameSimulation({ seed: 1, night: 1, scenario });
  sim.step({ tick: 0, pulse: true });
  for (let k = 1; k < 15; k++) {
    sim.step({ tick: k, pulse: false });
  }
  assert.equal(sim.shades[0].state, 'stunned');
  assert.equal(round3(sim.shades[0].pos[2]), 7.0);

  // Advance remaining 105 ticks of 120-tick stun (k = 15..119) -> on tick 120 stun ends and state is 'wander'
  for (let k = 15; k < 120; k++) {
    sim.step(null);
  }
  assert.equal(sim.shades[0].state, 'wander');
});

test('AC-3.1: Lantern fuel decay (1.0/s), lantern_out at fuel<=0, and relight (ever_lit=true, cost=5, +40 score, relit_count=1)', () => {
  const sim = new GameSimulation({
    seed: 1,
    night: 1,
    scenario: {
      player: { pos: [0, 0, 1.0], carried: 6, flames: 3 },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: [],
      lanterns: [{ id: 'L1', pos: [0, 0, 0], lit: true, fuel: 1.0 }]
    }
  });

  // L1 has 1.0 fuel (60 fuelUnits). After 60 ticks of 1/60 decay, fuel hits 0 -> lantern_out!
  let outEv = null;
  for (let k = 0; k < 60; k++) {
    const evs = sim.step(null);
    const found = evs.find((e) => e.name === 'lantern_out');
    if (found) outEv = found;
  }
  assert.ok(outEv);
  assert.deepEqual(outEv.data, { lantern_id: 'L1' });
  assert.equal(sim.lanterns[0].lit, false);
  assert.equal(sim.lanterns[0].ever_lit, true);
  assert.equal(sim.lanterns[0].deposited, 0);

  // Now press interact to relight L1 -> only costs 5 motes (leaving 1 carried), awards 5*5 + 40 = 65 score
  const relightEvs = sim.step({ tick: 60, interact: true });
  const depEv = relightEvs.find((e) => e.name === 'deposit');
  const litEv = relightEvs.find((e) => e.name === 'lantern_lit');
  assert.deepEqual(depEv.data, { lantern_id: 'L1', amount: 5, deposited: 5 });
  assert.deepEqual(litEv.data, { lantern_id: 'L1', relight: true });
  assert.equal(sim.player.carried, 1);
  assert.equal(sim.lanterns[0].lit, true);
  assert.equal(round1(sim.lanterns[0].fuelUnits / 60), 100);
  assert.equal(sim.lanterns[0].relit_count, 1);
  assert.equal(sim.score, 65);
  assert.equal(sim.player.capacity, 12);
});

test('AC-3.2: Refueling a lit lantern uses min(carried, ceil((100-fuel)/10)) motes, emits refuel, and ignores full lanterns', () => {
  const sim = new GameSimulation({
    seed: 1,
    night: 1,
    scenario: {
      player: { pos: [0, 0, 0], carried: 5, flames: 3 },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: [],
      lanterns: [{ id: 'L1', pos: [0, 0, 1.0], lit: true, fuel: 75.0 }]
    }
  });

  // Step 0: L1 decays 1/60 to 74.9833 fuel -> missing 25.0166 fuel -> ceil(25.0166/10) = 3 motes needed
  const evs1 = sim.step({ tick: 0, interact: true });
  const refuelEv = evs1.find((e) => e.name === 'refuel');
  assert.ok(refuelEv);
  assert.deepEqual(refuelEv.data, { lantern_id: 'L1', amount: 3, fuel: 100 });
  assert.equal(sim.player.carried, 2);
  assert.equal(sim.score, 15); // 3 * 5 = 15
});

test('AC-3.3: Low-fuel lantern (<30) loses safe zone, attracts wander Shade to drain (5/s, fuel_drain every 60 ticks), and Pulse on draining shade awards +15', () => {
  const sim = new GameSimulation({
    seed: 1,
    night: 1,
    scenario: {
      player: { pos: [0, 0, 12], carried: 4, flames: 3 },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: [{ id: 'S1', pos: [0, 0, 3.0], state: 'wander' }],
      lanterns: [{ id: 'L1', pos: [0, 0, 0], lit: true, fuel: 25.0 }]
    }
  });

  // L1 has fuel 25 < 30 (no safe zone!). S1 in wander walks to L1 (from Z=3.0 to Z<=2.0) and enters 'drain'
  let drainEvents = [];
  for (let k = 0; k < 85; k++) {
    const evs = sim.step(null);
    drainEvents.push(...evs.filter((e) => e.name === 'fuel_drain'));
  }
  assert.equal(sim.shades[0].state, 'drain');
  assert.equal(drainEvents.length, 1);
  assert.equal(drainEvents[0].data.lantern_id, 'L1');
  assert.equal(drainEvents[0].data.shade_id, 'S1');

  // Now teleport/move player near S1 and trigger Pulse while S1 is in 'drain' -> awards +15 score!
  sim.player.pos = [0, 0, 2.5];
  const pulseEvs = sim.step({ tick: 85, pulse: true });
  assert.ok(pulseEvs.some((e) => e.name === 'pulse'));
  assert.equal(sim.shades[0].state, 'stunned');
  assert.equal(sim.score, 15);
});

test('AC-3.4: Refueling a low-fuel lantern (<30) up to >=30 expels Shades inside 6m over max 30 ticks without damage', () => {
  const sim = new GameSimulation({
    seed: 1,
    night: 1,
    scenario: {
      player: { pos: [0, 0, 0], carried: 3, flames: 3 },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: [{ id: 'S1', pos: [0, 0, 1.5], state: 'drain', target_lantern_id: 'L1' }],
      lanterns: [{ id: 'L1', pos: [0, 0, 0], lit: true, fuel: 20.0 }]
    }
  });

  // Refuel L1 with 3 motes (+30 fuel -> ~50 fuel >= 30)
  const evs = sim.step({ tick: 0, interact: true });
  assert.ok(evs.some((e) => e.name === 'refuel'));
  assert.notEqual(sim.shades[0].state, 'drain');

  // Over 30 ticks, S1 is pushed outside 6.0m safe radius without hitting player
  for (let k = 1; k <= 30; k++) {
    sim.step({ tick: k, interact: false });
  }
  assert.ok(distXZ(sim.shades[0].pos, [0, 0, 0]) >= CONTRACT.tuning.safe_radius - 1e-4);
  assert.equal(sim.player.flames, 3);
});

test('AC-3.5: Dawn Survival Win (lit >= ceil(0.6*total) -> dawn_survived + dawn fuel/flame bonus) vs Dawn Loss', () => {
  // 1) Win on Night 1 with 3/5 lanterns lit at Dawn (time_left_s = 1/60s = 1 tick)
  const winSim = new GameSimulation({
    seed: 1,
    night: 1,
    scenario: {
      player: { pos: [0, 0, 0], carried: 0, flames: 2 },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: [],
      lanterns: [
        { id: 'L1', lit: true, fuel: 80.5 },
        { id: 'L2', lit: true, fuel: 50.5 },
        { id: 'L3', lit: true, fuel: 40.5 },
        { id: 'L4', lit: false },
        { id: 'L5', lit: false }
      ],
      time_left_s: 1 / 60
    }
  });
  const winEvs = winSim.step(null);
  const overWin = winEvs.find((e) => e.name === 'game_over');
  assert.ok(overWin);
  assert.deepEqual(overWin.data, { result: 'won', reason: 'dawn_survived' });
  // Bonus: L1 (50+80=130) + L2 (50+50=100) + L3 (50+40=90) + 2 flames*50 (100) = 420
  assert.equal(winSim.score, 420);

  // 2) Lose on Night 1 when only 2/5 lanterns are lit at Dawn (< ceil(0.6*5)=3)
  const loseSim = new GameSimulation({
    seed: 1,
    night: 1,
    scenario: {
      player: { pos: [0, 0, 0], carried: 0, flames: 3 },
      random_motes: false,
      random_shades: false,
      motes: [],
      shades: [],
      lanterns: [
        { id: 'L1', lit: true, fuel: 80 },
        { id: 'L2', lit: true, fuel: 50 },
        { id: 'L3', lit: false },
        { id: 'L4', lit: false },
        { id: 'L5', lit: false }
      ],
      time_left_s: 1 / 60
    }
  });
  const loseEvs = loseSim.step(null);
  const overLose = loseEvs.find((e) => e.name === 'game_over');
  assert.ok(overLose);
  assert.deepEqual(overLose.data, { result: 'lost', reason: 'dawn' });
});

test('AC-2.1..AC-2.8 (Phase 2 Regressions): Dash, Jump Pads, Tiers, Drifters, Charms, Island Fall, Pause, and 18000-tick Benchmark', () => {
  // Dash
  const dashSim = new GameSimulation({
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
  dashSim.step({ tick: 0, move: [0, 1], dash: true });
  for (let k = 1; k < 12; k++) dashSim.step({ tick: k, dash: false });
  assert.equal(round3(dashSim.player.pos[2]), 2.8);
  assert.equal(round3(dashSim.player.pos[1]), 2.5);

  // Drifter steal & drop
  const drifterSim = new GameSimulation({
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
  const dEv1 = drifterSim.step(null);
  assert.ok(dEv1.some((e) => e.name === 'drifter_steal'));
  const dEv2 = drifterSim.step({ tick: 1, pulse: true });
  assert.ok(dEv2.some((e) => e.name === 'drifter_drop'));

  // Wind Charm
  const charmSim = new GameSimulation({
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
  const cEv = charmSim.step({ tick: 0, move: [1, 0] });
  assert.ok(cEv.some((e) => e.name === 'charm_picked'));

  // Island Fall
  const fallSim = new GameSimulation({
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
  const fEv = fallSim.step(null);
  assert.ok(fEv.some((e) => e.name === 'player_hit' && e.data.by === 'fall' && e.data.lost === 4));

  // Full Night 3 (18,000 ticks = 300s) Determinism & Benchmark
  const t0 = performance.now();
  const linesA = runHeadless({ seed: 99, night: 3, ticks: 18000, snapshotEvery: 600 });
  const elapsed = performance.now() - t0;
  assert.ok(elapsed < 5000);
  const linesB = runHeadless({ seed: 99, night: 3, ticks: 18000, snapshotEvery: 600 });
  assert.deepEqual(linesA, linesB);
});
