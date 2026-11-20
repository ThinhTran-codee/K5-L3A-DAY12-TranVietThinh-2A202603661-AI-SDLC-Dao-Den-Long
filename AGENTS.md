# AGENTS.md — Đảo Đèn Lồng (AI SDLC Harness — Phase 2 / Contract v1.1)

## 1. Project Overview
- **Game:** Đảo Đèn Lồng (3D Third-Person Game across 3 Nights + Deterministic 60Hz Headless Simulation)
- **Stack:** Node.js (ESM) + Three.js (Vite)
- **Core Rule:** Strict separation between `src/core/` (pure deterministic 60Hz game simulation, zero DOM/WebGL imports) and `src/client/` (Three.js 3D renderer, Web Audio, HUD, Menus).

## 2. Standard Commands
- **Install / Build:** `npm install && npm run build`
- **Run 3D Game (Dev):** `npm start`
- **Run Headless CLI:** `node src/headless.js --seed 42 --night 1 --ticks 600 --out out.jsonl` (supports `--night 1|2|3`)
- **Run All Tests & Verification:** `npm test`
- **Generate Phase Proof:** `npm run proof`

## 3. Non-Negotiable Rules (Guardrails — Updated for Phase 2 / Contract v1.1)
1. **Test Contract v1.1 First:** `game.contract.json` (`contract_version: "1.1"`) is the single source of truth for all standardized `tuning` numbers.
2. **Mandatory 12-Step Tick Order:**
   1) Read input (process `pause` first; if just paused, stop step here).
   2) Decrement timers (time, cooldowns, invuln, stun/recoil, charm, dropped mote TTL, charm respawn).
   3) Move Mây (jump, dash, jump pads, wind) then check island fall (`Y < -10`).
   4) Pickup motes & charms (`XZ <= 1.0m`, `|dY| <= 1.5m`, entities born this tick cannot be picked up until next tick).
   5) Interact with lanterns (`XZ <= 2.0m`, nearest unlit, tie-break by smaller `id`; `+10` score per deposited mote).
   6) Update safe zones (`6.0m` around lit lanterns; shades inside when newly lit are pushed out over max 30 ticks without dealing damage).
   7) Pulse (`cost: 3`, 3D dist from `player.pos + [0,0.8,0]` `<= 5.0m`, stun 120 ticks, push 4m over 15 ticks; affects chasing/fleeing Drifters).
   8) Move Shades (`spawning`, `wander`, `chase`, `recoil`, `stunned`) and Drifters (`idle`, `chase`, `flee`, `removed`).
   9) Collisions: Drifters steal first (`XZ <= 1.2m`), then Shades hit in ascending `id` order (`XZ <= 1.0m`, `|dY| <= 1.5m`, max 1 flame lost per tick).
   10) Scheduled spawns (motes, shades, drifters; newly spawned entities only interact from next tick).
   11) Win/Lose check (`flames <= 0` -> `lost/no_flames`; else all lanterns lit -> `won/all_lit`; else `time_left_s <= 0` -> `lost/dawn`).
   12) Emit snapshot if `tick % snapshotEvery === 0`.
3. **Performance Gate:** Running a full Night (`21,600` ticks) in headless mode MUST complete in `<= 30 seconds` (target `< 1 second`).
4. **Exit Codes:** `0` on completion/game_over, `2` on invalid `--scenario` or `--inputs`, `1` on other CLI errors.
5. **Creative Features Isolation:** Creative extensions must never alter headless output.
