---
name: verify-phase
description: Automated verification workflow for Đảo Đèn Lồng phases. Runs unit tests, Test Contract v1.0 headless scenarios, determinism checks, and captures verifiable proof artifacts into docs/proof/.
---

# Skill: Verify Phase & Generate Proof

Use this skill before tagging any phase (`phase-1` .. `phase-4`). Do NOT declare a phase complete without running this skill and inspecting the generated output files.

## Verification Checklist
1. **Contract Consistency Check**
   - Verify `game.contract.json` exists, is valid JSON, and all `tuning` parameters match the active simulation defaults.
2. **Unit & Scenario Tests (`npm test`)**
   - Movement & camera yaw rotation (`cam_yaw_deg`).
   - Mote pickup (`mote_picked`) & `carry_capacity` limit.
   - Lantern deposit (`deposit`) & lighting (`lantern_lit`).
   - Pulse (`pulse`) cost, cooldown, shade stun duration, and pushback (`pulse_push_m`).
   - Shade chase, lit lantern `safe_radius` repulsion, and player damage (`player_hit`) with `invuln_s`.
   - Win (`all_lit`) and Lose (`no_flames`, `dawn`) conditions & scoring.
   - Error exit code `2` on invalid scenario/inputs (e.g. non-increasing `tick`).
3. **Determinism Check**
   - Run identical `--seed`, `--scenario`, and `--inputs` twice to two different `.jsonl` files and assert byte-for-byte equality.
4. **Proof Generation (`npm run proof`)**
   - Writes headless inputs, scenarios, JSONL outputs, and test report summaries into `docs/proof/phase-N/`.
