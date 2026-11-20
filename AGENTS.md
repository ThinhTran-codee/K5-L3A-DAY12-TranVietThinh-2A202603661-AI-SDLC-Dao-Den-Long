# AGENTS.md — Đảo Đèn Lồng (AI SDLC Harness)

## 1. Project Overview
- **Game:** Đảo Đèn Lồng (3D Third-Person Game + Deterministic Headless Simulation)
- **Stack:** Node.js (ESM) + Three.js (Vite)
- **Core Rule:** Strict separation between `src/core/` (pure deterministic 60Hz game simulation, zero DOM/WebGL imports) and `src/client/` (Three.js 3D renderer, audio, HUD).

## 2. Standard Commands
- **Install / Build:** `npm install && npm run build`
- **Run 3D Game (Dev):** `npm start`
- **Run Headless CLI:** `node src/headless.js --seed 42 --night 1 --ticks 600 --out out.jsonl`
- **Run All Tests & Verification:** `npm test`
- **Generate Phase Proof:** `npm run proof`

## 3. Non-Negotiable Rules (Guardrails)
1. **Test Contract First:** `game.contract.json` is the single source of truth for all `tuning` numbers. Never hardcode magic gameplay constants in `src/core/` or `src/client/`; always read from `game.contract.json`.
2. **Determinism:** `src/core/` must NEVER call `Math.random()` or `Date.now()`. Always use the seeded PRNG instance passed to the simulation.
3. **Coordinate & Distance Convention:**
   - Ground is `Y = 0`, `+Y` is up, player spawns at `[0, 0, 0]`.
   - All distance checks (`pickup_radius`, `interact_radius`, `pulse_radius`, `safe_radius`, `shade_hit_radius`) MUST be computed in the horizontal `XZ` plane (`Math.hypot(dx, dz) <= r`).
   - Output coordinates in JSONL must be rounded to 3 decimal places.
4. **Exit Codes in Headless Mode:**
   - `0`: Completed `--ticks` or reached `game_over`.
   - `2`: Invalid/malformed `--scenario` or `--inputs` JSON (e.g., non-increasing frame ticks, non-numeric move vector). *Guardrail updated in Phase 1:* Do NOT reject `move: [x, z]` when `|x| > 1` or `|z| > 1`; normalize any finite vector with `Math.hypot(x, z) > 1` to unit length per Test Contract v1.0 Section C.
   - `1`: Other CLI/runtime errors.
5. **Creative Features Isolation:** Any creative extensions ("Sáng tạo của tôi") must not alter headless output under Test Contract v1.0.
6. **Security:** Never commit `.env`, API keys, or secrets.
