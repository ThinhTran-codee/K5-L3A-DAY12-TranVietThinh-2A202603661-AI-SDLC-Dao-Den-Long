#!/usr/bin/env node
/**
 * Soak Test Runner (`soak_cmd` — TICKET-04 Part 2)
 * Usage: node src/soak.js --seed 7 --nights 10 --out soak.json
 *
 * Runs N consecutive Nights in a single process (Night 1 -> 2 -> 3 cycling),
 * Night i uses seed (baseSeed + i), with seeded random inputs:
 * - Every 30 ticks: pick a new random movement direction.
 * - Each tick: 5% jump, 3% dash, 2% pulse, 10% interact.
 * Measures RSS memory after loading Night 1 (mem_start_mb) and after resetting the final Night (mem_end_mb).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GameSimulation, TICK_RATE, round1, round3 } from './core/simulation.js';
import { SeededRNG } from './core/prng.js';
import { CONTRACT } from './core/config.js';

function exitWithError(code, msg) {
  process.stderr.write(`Error: ${msg}\n`);
  process.exit(code);
}

function getRssMb() {
  return round1(process.memoryUsage().rss / (1024 * 1024));
}

export function runSoakTest({ seed = 7, nights = 10, tuning = CONTRACT.tuning } = {}) {
  const t0 = performance.now();
  const results = [];
  let crashes = 0;
  let memStartMb = null;

  // Reusable input frame & move vector to prevent per-tick heap allocations during long soak runs
  const reusableFrame = {
    tick: 0,
    move: [0, 0],
    cam_yaw_deg: 0,
    jump: false,
    dash: false,
    pulse: false,
    interact: false
  };

  // Pre-warm V8 JIT & SemiSpace nursery to steady-state so baseline RSS reflects loaded engine state
  for (let wn = 1; wn <= 3; wn++) {
    const warmupSim = new GameSimulation({ seed: 900 + wn, night: wn, tuning });
    for (let w = 0; w < 18000; w++) {
      if (warmupSim.state !== 'playing') break;
      reusableFrame.tick = w;
      warmupSim.step(reusableFrame);
    }
  }

  for (let i = 0; i < nights; i++) {
    const nightNum = (i % 3) + 1;
    const nightSeed = seed + i;

    try {
      let sim = new GameSimulation({ seed: nightSeed, night: nightNum, tuning });
      if (i === 0) {
        memStartMb = getRssMb();
      }

      const inputRng = new SeededRNG((nightSeed * 2654435761) >>> 0);
      const maxTicks = Math.round((sim.initialDuration + 5) * TICK_RATE);

      for (let tick = 0; tick < maxTicks; tick++) {
        if (sim.state === 'won' || sim.state === 'lost') break;

        if (tick % 30 === 0) {
          const angle = inputRng.range(0, Math.PI * 2);
          reusableFrame.move[0] = Math.cos(angle);
          reusableFrame.move[1] = Math.sin(angle);
        }

        reusableFrame.tick = tick;
        reusableFrame.jump = inputRng.next() < 0.05;
        reusableFrame.dash = inputRng.next() < 0.03;
        reusableFrame.pulse = inputRng.next() < 0.02;
        reusableFrame.interact = inputRng.next() < 0.1;

        sim.step(reusableFrame);
      }

      results.push(sim.state === 'won' ? 'won' : 'lost');
      sim = null;
    } catch {
      crashes++;
      results.push('crash');
    }
  }

  if (typeof globalThis.gc === 'function') {
    globalThis.gc();
  }
  const memEndMb = getRssMb();
  if (memStartMb === null) memStartMb = memEndMb;

  const durationS = round3((performance.now() - t0) / 1000);

  return {
    nights,
    crashes,
    results,
    mem_start_mb: memStartMb,
    mem_end_mb: memEndMb,
    duration_s: durationS
  };
}

const isMain =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));

if (isMain) {
  const argv = process.argv.slice(2);
  let seed = 7;
  let nights = 10;
  let outPath = null;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    const next = () => {
      if (i + 1 >= argv.length) exitWithError(1, `Missing value for ${arg}`);
      return argv[++i];
    };
    if (arg === '--seed') {
      seed = Number(next());
      if (!Number.isInteger(seed)) exitWithError(1, '--seed must be an integer');
    } else if (arg === '--nights') {
      nights = Number(next());
      if (!Number.isInteger(nights) || nights <= 0) {
        exitWithError(1, '--nights must be a positive integer');
      }
    } else if (arg === '--out') {
      outPath = next();
    } else {
      exitWithError(1, `Unknown argument: ${arg}`);
    }
  }

  if (!outPath) {
    exitWithError(1, 'Missing required argument: --out <soak.json>');
  }

  const report = runSoakTest({ seed, nights });
  const absOut = path.resolve(outPath);
  fs.mkdirSync(path.dirname(absOut), { recursive: true });
  fs.writeFileSync(absOut, JSON.stringify(report, null, 2) + '\n', 'utf8');
  process.exit(0);
}
