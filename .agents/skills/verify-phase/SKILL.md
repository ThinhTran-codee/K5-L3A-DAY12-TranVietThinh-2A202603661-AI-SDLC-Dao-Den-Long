---
name: verify-phase
description: Automated verification workflow for Đảo Đèn Lồng phases (updated for Phase 4 / Release v1.0.0 / Test Contract v1.3). Runs unit & regression tests, benchmark (bench.json), 10-Night soak test (soak.json), leaderboard export, determinism checks, and captures proof artifacts into docs/proof/phase-4/.
---

# Skill: Verify Phase & Generate Proof (Contract v1.3)

Use this skill before tagging `phase-4` and creating Release `v1.0.0`.

## Verification Checklist (Phase 4 — Contract v1.3)
1. **Contract v1.3 Check:** `game.contract.json` has `"contract_version": "1.3"`, `build_cmd`, `run_cmd`, `headless_cmd`, `bench_cmd`, `soak_cmd`.
2. **Unit & Regression Tests (`npm test`):** All 13 test suites covering Phases 1–4 pass.
3. **Benchmark (`bench.json`):** `avg_fps >= 60`, `p1_low_fps >= 30`, `load_ms <= 10000`.
4. **Soak Test (`soak.json`):** 10 consecutive Nights in a single process, `crashes = 0`, `mem_end_mb <= 1.2 * mem_start_mb`.
5. **Leaderboard Export:** `node src/run.js --export-leaderboard` outputs valid sorted Top-10 `{"entries": [...]}`.
6. **Documentation & Release Check:** `README.md` (<= 3 commands to run), `CHANGELOG.md` (all 4 phases), `docs/notes/RETROSPECTIVE.md`, `CREDITS.md`, `LICENSE`, `dist/` built.
