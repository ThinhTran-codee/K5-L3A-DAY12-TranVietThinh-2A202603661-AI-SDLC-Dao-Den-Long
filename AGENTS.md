# AGENTS.md — Đảo Đèn Lồng (AI SDLC Harness — Phase 3 / Contract v1.2)

## 1. Project Overview
- **Game:** Đảo Đèn Lồng (3D Third-Person Game across 3 Nights + Deterministic 60Hz Headless Simulation)
- **Stack:** Node.js (ESM) + Three.js (Vite)
- **Core Rule:** Strict separation between `src/core/` (pure deterministic 60Hz game simulation, zero DOM/WebGL imports) and `src/client/` (Three.js 3D renderer, Web Audio, HUD, Menus, Colorblind Mode).

## 2. Standard Commands
- **Install / Build:** `npm install && npm run build`
- **Run 3D Game (Dev):** `npm start`
- **Run Headless CLI:** `node src/headless.js --seed 42 --night 1 --ticks 600 --out out.jsonl` (supports `--night 1|2|3`)
- **Run All Tests & Verification:** `npm test`
- **Generate Phase Proof:** `npm run proof`

## 3. Non-Negotiable Rules (Guardrails — Updated for Phase 3 / Contract v1.2)
1. **Test Contract v1.2 First:** `game.contract.json` (`contract_version: "1.2"`) is the single source of truth for all `tuning` numbers.
2. **Integer Fuel Precision (`1/60` units):** Always store and update lantern fuel in integer `fuelUnits` (`1 fuel = 60 fuelUnits`, max `6000`, threshold `1800`). Natural decay is `-1 unit/tick`; each draining shade subtracts `-5 units/tick`; each refuel mote adds `+600 units`. Round to 1 decimal place (`round1`) only when serializing snapshots/events.
3. **Updated 12-Step Tick Order (Contract v1.2):**
   1) Read input (`pause` first; if just paused, stop step here).
   2) Decrement timers AND subtract lantern fuel (decay `1/s` + shade drain `5/s`, emitting `fuel_drain` every 60 ticks of draining). Immediately after Step 2, any lit lantern with `fuel <= 0` turns off (`lit = false`, `deposited = 0`, `ever_lit = true`, emitting `lantern_out`).
   3) Move Mây (jump, dash, jump pads, wind) then check island fall (`Y < -10`).
   4) Pickup motes (up to dynamic `player.capacity = min(20, 10 + 2 * successful_lights)`) & charms.
   5) Interact with lanterns (`XZ <= 2.0m`, nearest eligible unlit or non-full lit lantern; relight cost is `5` if `ever_lit`, else `10`; refuel emits `refuel`; `+5` score per mote).
   6) Update safe zones (`6.0m` ONLY around lit lanterns with `fuel >= 30`; refuel to `>= 30` expels shades inside `6.0m` over max 30 ticks).
   7) Pulse (`cost: 3`, 3D dist `<= 5.0m`, `+15` score if shade was in `drain` else `+5`, stun 120 ticks -> returns to `wander` afterwards).
   8) Move Shades (`spawning`, `wander`, `chase`, `drain`, `recoil`, `stunned`) and Drifters. `wander` shades target nearest lit lantern with `fuel < 30` (`<= 2m` enters `drain`).
   9) Collisions: Drifters steal first, then Shades hit in ascending `id` order.
   10) Scheduled spawns (motes, shades, drifters).
   11) Win/Lose check (NO early win on all lanterns lit! `flames <= 0` -> `lost/no_flames`; at `time_left_s <= 0`: `lit_count >= ceil(0.6 * total)` -> `won/dawn_survived` else `lost/dawn`).
   12) Emit snapshot if `tick % snapshotEvery === 0`.
