---
name: verify-phase
description: Automated verification workflow for Đảo Đèn Lồng phases (updated for Phase 2 / Test Contract v1.1). Runs unit tests, 3-Night headless scenarios, 21600-tick performance benchmark, determinism checks, and captures verifiable proof artifacts into docs/proof/.
---

# Skill: Verify Phase & Generate Proof (Contract v1.1)

Use this skill before tagging any phase (`phase-1` .. `phase-4`). Do NOT declare a phase complete without running this skill and inspecting the generated output files.

## Verification Checklist (Phase 2 — Contract v1.1)
1. **Contract v1.1 Consistency Check**
   - Verify `game.contract.json` has `"contract_version": "1.1"` and all standardized `tuning` parameters from `TICKET-02` Part 1.
2. **Unit, Regression & New Feature Scenario Tests (`npm test`)**
   - Phase 1 regression with standardized tuning numbers (movement, pickup, deposit, pulse, safe zone, win/lose).
   - Dash (`14 m/s`, `0.2 s` = 12 ticks, `1.5 s` = 90 ticks cooldown from start, maintains Y height in air).
   - Night 2 (Đảo Cau) dual islands, bamboo bridge, and jump pads (`vy = 14`, `vh = 24`).
   - Night 3 (Đảo Chuông) 3 tiers (`Y=0, 3, 6`), vertical cliffs, 2 ramps (`30°`, `150°`), jump pad `(0,3,13)`, bell tower collision, and periodic strong wind (`2 m/s`).
   - Drifters (`Gió Lạc`): `idle -> chase -> flee -> removed`, stealing motes (`drifter_steal`), and dropping stolen motes when hit by Pulse while fleeing (`drifter_drop`).
   - Wind Charms (`Bùa Gió`): `charm_picked`, `7.2 m/s` speed & zero dash cooldown for `600` ticks, respawn after `2700` ticks.
   - Island fall (`Y < -10`): `player_hit` with `by: "fall"` and `lost`, 60-tick wait, respawn at `(0,0,0)` with 90-tick invuln.
   - Shade states (`spawning`, `wander`, `chase`, `recoil`, `stunned`) and dropped motes on hit (`floor(carried/2)`, TTL 480 ticks).
   - Pause / Resume (`paused`, `resumed`, frozen `sim_tick` while `tick` advances).
3. **Performance Benchmark**
   - Run `21,600` ticks (full 360s Night 3) in headless mode and assert execution time `<= 30 seconds`.
4. **Determinism Check**
   - Run identical `--seed`, `--night`, `--scenario`, and `--inputs` twice and assert byte-for-byte equality.
5. **Proof Generation (`npm run proof`)**
   - Writes headless scenarios, inputs, JSONL outputs, and verification report into `docs/proof/phase-2/`.
