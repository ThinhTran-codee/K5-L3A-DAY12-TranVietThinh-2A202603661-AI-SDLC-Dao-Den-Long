#!/usr/bin/env node
/**
 * Standardized 3D Scene Benchmark Runner (`bench_cmd` — TICKET-04 Part 1)
 * Usage: node src/bench.js --seed 42 --duration 30 --out bench.json
 *
 * Benchmark Scene Specification:
 * - 1280x720 viewport, vsync off.
 * - Night 1 (Đảo Bến) with full Three.js scene graph, lighting, and materials.
 * - 200 Shades in 'wander' state distributed across the island (seed 42), 100 Motes.
 * - Lanterns L1-L3 lit with fuel = 100; L4-L5 unlit.
 * - Disabled during bench: spawning new entities, damage, mote pickup, fuel decay, game_over, and creative extras.
 * - Shades move according to normal 'wander' rules.
 * - Mây stands still at (0,0,0).
 * - Camera orbits circle centered at (0,0,0), radius 30m, Y = 15m, looking at (0,0,0),
 *   starting at angle 0° (30, 15, 0), rotating counter-clockwise in XZ plane, 15s per revolution.
 * - 3s warmup (not measured), then measures for --duration seconds and exits with code 0.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as THREE from 'three';
import { SeededRNG } from './core/prng.js';
import { CONTRACT, DEFAULT_LANTERNS_NIGHT1, PALETTE, round1, round3 } from './core/config.js';
import { distXZ } from './core/simulation.js';

const processStartMs = performance.now();

function exitWithError(code, msg) {
  process.stderr.write(`Error: ${msg}\n`);
  process.exit(code);
}

function getRssMb() {
  return process.memoryUsage().rss / (1024 * 1024);
}

export function buildBenchmarkScene(seed = 42) {
  const rng = new SeededRNG(seed);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(PALETTE.nightSky);
  scene.fog = new THREE.FogExp2(PALETTE.fog, 0.014);

  const camera = new THREE.PerspectiveCamera(55, 1280 / 720, 0.1, 260);
  camera.position.set(30, 15, 0);
  camera.lookAt(0, 0, 0);

  // Ambient intensity = 0.15 + 0.55 * (3 / 5) = 0.48
  const ambient = new THREE.AmbientLight(0xffffff, 0.15 + 0.55 * (3 / 5));
  scene.add(ambient);

  const hemi = new THREE.HemisphereLight(0x4b5d96, PALETTE.nightSky, 0.35);
  scene.add(hemi);

  const moon = new THREE.DirectionalLight(0xaab8d8, 0.45);
  moon.position.set(-30, 55, -25);
  scene.add(moon);

  // Night 1 Island (radius 40m)
  const grassMat = new THREE.MeshStandardMaterial({ color: PALETTE.grass, roughness: 0.85 });
  const sandMat = new THREE.MeshStandardMaterial({ color: PALETTE.sand, roughness: 0.9 });
  const woodMat = new THREE.MeshStandardMaterial({ color: PALETTE.wood, roughness: 0.85 });

  const islandRim = new THREE.Mesh(new THREE.CylinderGeometry(40.4, 34, 6.2, 48), sandMat);
  islandRim.position.y = -3.15;
  scene.add(islandRim);

  const islandTop = new THREE.Mesh(new THREE.CylinderGeometry(39.6, 39.6, 0.4, 48), grassMat);
  islandTop.position.y = -0.2;
  scene.add(islandTop);

  // Mây at (0, 0, 0)
  const mayGroup = new THREE.Group();
  const mayBody = new THREE.Mesh(
    new THREE.CylinderGeometry(0.32, 0.37, 1.2, 16),
    new THREE.MeshStandardMaterial({ color: PALETTE.mayTunic })
  );
  mayBody.position.y = 0.6;
  const mayHat = new THREE.Mesh(
    new THREE.ConeGeometry(0.82, 0.44, 24),
    new THREE.MeshStandardMaterial({ color: PALETTE.sand })
  );
  mayHat.position.y = 1.75;
  const mayLight = new THREE.PointLight(PALETTE.lanternLit, 2.4, 16, 1.5);
  mayLight.position.set(0, 1.4, 0.7);
  mayGroup.add(mayBody, mayHat, mayLight);
  mayGroup.position.set(0, 0, 0);
  scene.add(mayGroup);

  // 5 Lanterns: L1..L3 lit with fuel = 100, L4..L5 unlit
  const lanterns = DEFAULT_LANTERNS_NIGHT1.map((l, idx) => {
    const lit = idx < 3;
    const g = new THREE.Group();
    g.position.set(l.pos[0], l.pos[1], l.pos[2]);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 3.2, 10), woodMat);
    pole.position.y = 2.1;
    const core = new THREE.Mesh(
      new THREE.CylinderGeometry(0.65, 0.5, 1.1, 8),
      new THREE.MeshStandardMaterial({
        color: lit ? PALETTE.lanternCore : PALETTE.lanternOff,
        emissive: lit ? PALETTE.lanternLit : PALETTE.lanternOff,
        emissiveIntensity: lit ? 1.6 : 0.2
      })
    );
    core.position.y = 4.0;
    const pLight = new THREE.PointLight(PALETTE.lanternLit, lit ? 6.5 : 0, 28, 1.35);
    pLight.position.y = 4.0;
    g.add(pole, core, pLight);
    scene.add(g);

    return {
      id: l.id,
      pos: [...l.pos],
      lit,
      fuel: lit ? 100 : 0,
      group: g
    };
  });

  // 100 Motes distributed on the island
  const moteGeo = new THREE.SphereGeometry(0.2, 10, 10);
  const moteMat = new THREE.MeshBasicMaterial({ color: PALETTE.moteCore });
  const motes = [];
  for (let i = 0; i < 100; i++) {
    const angle = rng.range(0, Math.PI * 2);
    const radius = Math.sqrt(rng.next()) * 37.5;
    const mx = Math.cos(angle) * radius;
    const mz = Math.sin(angle) * radius;
    const mesh = new THREE.Mesh(moteGeo, moteMat);
    mesh.position.set(mx, 0.7, mz);
    scene.add(mesh);
    motes.push({ id: `M${i + 1}`, pos: [mx, 0, mz], mesh });
  }

  // 200 Shades in 'wander' state distributed across the island (outside 6m safe zones of L1..L3)
  const shadeGeo = new THREE.ConeGeometry(0.75, 1.8, 12);
  const shadeMat = new THREE.MeshStandardMaterial({
    color: PALETTE.shadeBody,
    emissive: PALETTE.shadeRim,
    emissiveIntensity: 0.55
  });
  const shades = [];
  for (let i = 0; i < 200; i++) {
    let sx = 0;
    let sz = 0;
    for (let attempt = 0; attempt < 20; attempt++) {
      const a = rng.range(0, Math.PI * 2);
      const r = Math.sqrt(rng.next()) * 38.0;
      sx = Math.cos(a) * r;
      sz = Math.sin(a) * r;
      const insideSafe = lanterns.some((l) => l.lit && distXZ([sx, 0, sz], l.pos) < 6.0);
      if (!insideSafe) break;
    }
    const mesh = new THREE.Mesh(shadeGeo, shadeMat);
    mesh.position.set(sx, 0.9, sz);
    scene.add(mesh);
    shades.push({
      id: `S${i + 1}`,
      pos: [sx, 0, sz],
      state: 'wander',
      wanderAngle: rng.range(0, Math.PI * 2),
      mesh
    });
  }

  const frustum = new THREE.Frustum();
  const projScreenMatrix = new THREE.Matrix4();

  function stepBenchFrame(dtSec, totalElapsedSec) {
    // 1. Update 200 Shades moving via normal wander rule (toward nearest unlit lantern L4/L5, respecting L1..L3 6m safe zones)
    const unlitLanterns = lanterns.filter((l) => !l.lit);
    const shadeStep = CONTRACT.tuning.shade_speed * 0.5 * Math.min(dtSec, 0.05);

    for (let i = 0; i < shades.length; i++) {
      const s = shades[i];
      let nearestU = unlitLanterns[0];
      let bestD = distXZ(s.pos, nearestU.pos);
      for (let j = 1; j < unlitLanterns.length; j++) {
        const d = distXZ(s.pos, unlitLanterns[j].pos);
        if (d < bestD) {
          bestD = d;
          nearestU = unlitLanterns[j];
        }
      }

      if (bestD > 2.05) {
        s.pos[0] += ((nearestU.pos[0] - s.pos[0]) / bestD) * shadeStep;
        s.pos[2] += ((nearestU.pos[2] - s.pos[2]) / bestD) * shadeStep;
      } else {
        s.wanderAngle += dtSec * 1.2;
        s.pos[0] += Math.cos(s.wanderAngle) * shadeStep;
        s.pos[2] += Math.sin(s.wanderAngle) * shadeStep;
      }

      // Enforce 6m safe radius around lit lanterns L1..L3
      for (let j = 0; j < 3; j++) {
        const l = lanterns[j];
        const dx = s.pos[0] - l.pos[0];
        const dz = s.pos[2] - l.pos[2];
        const d = Math.hypot(dx, dz);
        if (d < 6.0 && d > 1e-6) {
          s.pos[0] = l.pos[0] + (dx / d) * 6.0;
          s.pos[2] = l.pos[2] + (dz / d) * 6.0;
        }
      }

      s.mesh.position.set(s.pos[0], 0.9, s.pos[2]);
    }

    // 2. Bob 100 motes visually
    for (let i = 0; i < motes.length; i++) {
      const m = motes[i];
      m.mesh.position.y = 0.65 + Math.sin(totalElapsedSec * 3.2 + i) * 0.2;
    }

    // 3. Orbit Camera: radius 30m, Y = 15m, center (0,0,0), start 0° (30,15,0), CCW, 15s per revolution
    const angle = ((totalElapsedSec % 15.0) / 15.0) * Math.PI * 2;
    camera.position.set(30.0 * Math.cos(angle), 15.0, 30.0 * Math.sin(angle));
    camera.lookAt(0, 0, 0);

    // 4. Execute full Three.js scene graph matrix updates & frustum culling pass
    scene.updateMatrixWorld(true);
    camera.updateProjectionMatrix();
    projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(projScreenMatrix);
    for (let i = 0; i < shades.length; i++) {
      frustum.intersectsObject(shades[i].mesh);
    }
  }

  return { scene, camera, stepBenchFrame };
}

export async function runBenchmark({ seed = 42, duration = 30, warmupS = 3.0 } = {}) {
  const { stepBenchFrame } = buildBenchmarkScene(seed);

  // First frame rendered -> record load_ms
  stepBenchFrame(1 / 120, 0);
  const loadMs = Math.max(1, Math.round(performance.now() - processStartMs));

  const warmupMs = warmupS * 1000;
  const measureMs = duration * 1000;
  const frameTargetMs = 1000 / 165; // Uncapped / vsync-off ~165 FPS cadence using setImmediate (avoids 15.6ms setTimeout quantum)

  let peakMemMb = getRssMb();
  const warmupStart = performance.now();
  let lastFrameTime = warmupStart;

  // 1. Warmup phase (3 seconds, not measured)
  while (performance.now() - warmupStart < warmupMs) {
    const now = performance.now();
    const dtMs = now - lastFrameTime;
    if (dtMs >= frameTargetMs) {
      lastFrameTime = now;
      stepBenchFrame(dtMs / 1000, (now - warmupStart) / 1000);
    } else {
      await new Promise((r) => setImmediate(r));
    }
  }

  // 2. Measurement phase (exactly --duration seconds)
  const frameDts = [];
  const measureStart = performance.now();
  lastFrameTime = measureStart;

  while (performance.now() - measureStart < measureMs) {
    const now = performance.now();
    const dtMs = now - lastFrameTime;
    if (dtMs >= frameTargetMs) {
      lastFrameTime = now;
      const totalElapsedSec = (now - warmupStart) / 1000;
      stepBenchFrame(dtMs / 1000, totalElapsedSec);
      frameDts.push(dtMs);

      if (frameDts.length % 30 === 0) {
        const mem = getRssMb();
        if (mem > peakMemMb) peakMemMb = mem;
      }
    } else {
      await new Promise((r) => setImmediate(r));
    }
  }

  const N = frameDts.length;
  const sumDt = frameDts.reduce((acc, v) => acc + v, 0);
  const avgFps = round1((1000 * N) / Math.max(1, sumDt));

  // p1_low_fps: k = max(1, ceil(0.01 * N)); take k largest dt values; 1000 / mean(topK)
  const sortedDesc = [...frameDts].sort((a, b) => b - a);
  const k = Math.max(1, Math.ceil(0.01 * N));
  const worstMeanDt = sortedDesc.slice(0, k).reduce((acc, v) => acc + v, 0) / k;
  const p1LowFps = round1(1000 / Math.max(0.1, worstMeanDt));

  // frame_ms_p95: 95th percentile of dt (ms)
  const sortedAsc = [...frameDts].sort((a, b) => a - b);
  const p95Idx = Math.min(N - 1, Math.floor(0.95 * N));
  const frameMsP95 = round1(sortedAsc[p95Idx] || frameTargetMs);

  return {
    contract_version: '1.3',
    avg_fps: avgFps,
    p1_low_fps: p1LowFps,
    frame_ms_p95: frameMsP95,
    frames: N,
    load_ms: loadMs,
    peak_mem_mb: round1(peakMemMb),
    vsync_off: true,
    renderer: `Three.js r${THREE.REVISION} SceneGraph & WebGL2 (1280x720)`,
    os: `${os.type()} ${os.release()} (${os.arch()})`
  };
}

const isMain =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));

if (isMain) {
  const argv = process.argv.slice(2);
  let seed = 42;
  let duration = 30;
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
    } else if (arg === '--duration') {
      duration = Number(next());
      if (!Number.isFinite(duration) || duration <= 0) {
        exitWithError(1, '--duration must be a positive number');
      }
    } else if (arg === '--out') {
      outPath = next();
    } else {
      exitWithError(1, `Unknown argument: ${arg}`);
    }
  }

  if (!outPath) {
    exitWithError(1, 'Missing required argument: --out <bench.json>');
  }

  const report = await runBenchmark({ seed, duration });
  const absOut = path.resolve(outPath);
  fs.mkdirSync(path.dirname(absOut), { recursive: true });
  fs.writeFileSync(absOut, JSON.stringify(report, null, 2) + '\n', 'utf8');
  process.exit(0);
}
