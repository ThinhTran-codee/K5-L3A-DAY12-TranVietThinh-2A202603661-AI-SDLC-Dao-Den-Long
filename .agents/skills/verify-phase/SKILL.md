---
name: verify-phase
description: Automated verification workflow for Đảo Đèn Lồng phases (updated for Phase 3 / Test Contract v1.2). Runs unit tests, Phase 1-2 regression checks, Phase 3 fuel/drain/dawn scenarios, performance benchmark, determinism checks, and captures verifiable proof artifacts into docs/proof/phase-3/.
---

# Skill: Verify Phase & Generate Proof (Contract v1.2)

Use this skill before tagging any phase (`phase-1` .. `phase-4`). Do NOT declare a phase complete without running this skill and inspecting the generated output files.

## Verification Checklist (Phase 3 — Contract v1.2)
1. **Contract v1.2 Consistency Check**
   - Verify `game.contract.json` has `"contract_version": "1.2"` and all `tuning` parameters from `TICKET-03` Part 7.
2. **ADR & Breaking Changes Changelog Check**
   - Verify `docs/notes/ADR-001-phase3-fuel-and-dawn-survival.md` and `CHANGELOG.md` document the state model and rule replacements.
3. **Unit, Regression & Phase 3 Change-Request Tests (`npm test`)**
   - Phase 1–2 regressions that were not replaced (movement, dash, jump pads, 3 tiers, drifters, charms, island fall, pause/resume).
   - Replaced early-win test (`all_lit` -> no early termination; progressive capacity `10 + 2 * successful_lights`, max `20`).
   - Lantern fuel decay (`1.0/s`), `lantern_out` at `fuel <= 0`, `ever_lit = true`, relighting (`cost = 5`, `relight: true`, `+40` score, `relit_count++`).
   - Refueling (`refuel` event, `used = min(carried, ceil((100 - fuel)/10))`, expelling shades inside `6m` when refueled from `<30` to `>=30`).
   - Shade `drain` state on weak lanterns (`fuel < 30`), `fuel_drain` event every 60 ticks, `+15` Pulse score on draining shade, and returning to `wander` after stun.
   - Dawn survival win (`dawn_survived` when `lit >= ceil(0.6 * total)` at `time_left_s == 0`) vs `dawn` loss.
4. **Proof Generation (`npm run proof`)**
   - Writes headless scenarios, inputs, JSONL outputs, and verification report into `docs/proof/phase-3/`.
