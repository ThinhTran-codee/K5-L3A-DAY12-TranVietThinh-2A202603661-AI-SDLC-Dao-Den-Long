# AGENTS.md — Đảo Đèn Lồng (AI SDLC Harness — Phase 4 / Contract v1.3)

## 1. Project Overview
- **Game:** Đảo Đèn Lồng v1.0.0 (3D Third-Person Game across 3 Nights + Deterministic 60Hz Headless Simulation)
- **Stack:** Node.js (ESM) + Three.js (Vite)
- **Core Rule:** Strict separation between `src/core/` (pure deterministic 60Hz game simulation & leaderboard logic, zero DOM/WebGL imports) and `src/client/` (Three.js 3D renderer, Web Audio, HUD, Menus, Colorblind & Accessibility Mode).

## 2. Standard Commands (Test Contract v1.3)
- **Install / Build (`build_cmd`):** `npm install && npm run build`
- **Run 3D Game (`run_cmd`):** `node src/run.js` (or `npm start`)
- **Export Local Leaderboard:** `node src/run.js --export-leaderboard out.json`
- **Run Headless CLI (`headless_cmd`):** `node src/headless.js --seed 42 --night 1 --ticks 600 --out out.jsonl`
- **Run Benchmark (`bench_cmd`):** `node src/bench.js --seed 42 --duration 30 --out bench.json`
- **Run Soak Test (`soak_cmd`):** `node src/soak.js --seed 7 --nights 10 --out soak.json`
- **Run All Tests & Verification:** `npm test && npm run verify`

## 3. Non-Negotiable Rules (Guardrails — Contract v1.3)
1. **Test Contract v1.3 First:** `game.contract.json` (`contract_version: "1.3"`) is the single source of truth for all `tuning` numbers and CLI commands.
2. **Integer Fuel Precision (`1/60` units):** Always store and update lantern fuel in integer `fuelUnits` (`1 fuel = 60 fuelUnits`, max `6000`, threshold `1800`).
3. **Zero-Allocation Hot Loop:** Do not allocate temporary sorted arrays inside `GameSimulation.prototype.step()`; keep `soak.json` memory growth `mem_end_mb <= 1.2 * mem_start_mb`.
4. **Benchmark & Soak Isolation:** Creative extensions must be disabled during `bench_cmd`, `soak_cmd`, and `headless_cmd`.
5. **Security:** Never commit `.env`, API keys, or secrets.
