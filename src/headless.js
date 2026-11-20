#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GameSimulation } from './core/simulation.js';
import { CONTRACT } from './core/config.js';

function exitWithError(code, msg) {
  process.stderr.write(`Error: ${msg}\n`);
  process.exit(code);
}

function validateVec3(arr, label) {
  if (
    !Array.isArray(arr) ||
    arr.length !== 3 ||
    !arr.every((x) => typeof x === 'number' && Number.isFinite(x))
  ) {
    exitWithError(2, `Invalid 3D vector for ${label}`);
  }
}

export function validateScenario(scenario) {
  if (!scenario || typeof scenario !== 'object' || Array.isArray(scenario)) {
    exitWithError(2, 'Scenario root must be a JSON object');
  }
  if (scenario.player !== undefined) {
    if (!scenario.player || typeof scenario.player !== 'object' || Array.isArray(scenario.player)) {
      exitWithError(2, 'scenario.player must be an object');
    }
    if (scenario.player.pos !== undefined) {
      validateVec3(scenario.player.pos, 'scenario.player.pos');
    }
    if (scenario.player.vel !== undefined) {
      validateVec3(scenario.player.vel, 'scenario.player.vel');
    }
    for (const intKey of [
      'carried',
      'flames',
      'invuln_ticks',
      'dash_cd_ticks',
      'pulse_cd_ticks',
      'charm_ticks'
    ]) {
      if (
        scenario.player[intKey] !== undefined &&
        (typeof scenario.player[intKey] !== 'number' ||
          !Number.isInteger(scenario.player[intKey]) ||
          scenario.player[intKey] < 0)
      ) {
        exitWithError(2, `scenario.player.${intKey} must be a non-negative integer`);
      }
    }
  }
  for (const boolFlag of ['random_motes', 'random_shades', 'random_drifters', 'wind_enabled']) {
    if (scenario[boolFlag] !== undefined && typeof scenario[boolFlag] !== 'boolean') {
      exitWithError(2, `scenario.${boolFlag} must be a boolean`);
    }
  }
  if (scenario.time_left_s !== undefined) {
    if (
      typeof scenario.time_left_s !== 'number' ||
      !Number.isFinite(scenario.time_left_s) ||
      scenario.time_left_s < 0
    ) {
      exitWithError(2, 'scenario.time_left_s must be a non-negative number');
    }
  }
  if (scenario.motes !== undefined) {
    if (!Array.isArray(scenario.motes)) {
      exitWithError(2, 'scenario.motes must be an array');
    }
    for (let i = 0; i < scenario.motes.length; i++) {
      const m = scenario.motes[i];
      if (Array.isArray(m)) {
        validateVec3(m, `scenario.motes[${i}]`);
      } else if (m && typeof m === 'object') {
        validateVec3(m.pos, `scenario.motes[${i}].pos`);
      } else {
        exitWithError(2, `Invalid mote entry at scenario.motes[${i}]`);
      }
    }
  }
  if (scenario.shades !== undefined) {
    if (!Array.isArray(scenario.shades)) {
      exitWithError(2, 'scenario.shades must be an array');
    }
    for (let i = 0; i < scenario.shades.length; i++) {
      const s = scenario.shades[i];
      if (Array.isArray(s)) {
        validateVec3(s, `scenario.shades[${i}]`);
      } else if (s && typeof s === 'object') {
        validateVec3(s.pos, `scenario.shades[${i}].pos`);
      } else {
        exitWithError(2, `Invalid shade entry at scenario.shades[${i}]`);
      }
    }
  }
  if (scenario.drifters !== undefined) {
    if (!Array.isArray(scenario.drifters)) {
      exitWithError(2, 'scenario.drifters must be an array');
    }
    for (let i = 0; i < scenario.drifters.length; i++) {
      const d = scenario.drifters[i];
      if (Array.isArray(d)) {
        validateVec3(d, `scenario.drifters[${i}]`);
      } else if (d && typeof d === 'object') {
        validateVec3(d.pos, `scenario.drifters[${i}].pos`);
      } else {
        exitWithError(2, `Invalid drifter entry at scenario.drifters[${i}]`);
      }
    }
  }
  if (scenario.charms !== undefined) {
    if (!Array.isArray(scenario.charms)) {
      exitWithError(2, 'scenario.charms must be an array');
    }
    for (let i = 0; i < scenario.charms.length; i++) {
      const c = scenario.charms[i];
      if (Array.isArray(c)) {
        validateVec3(c, `scenario.charms[${i}]`);
      } else if (!c || typeof c !== 'object') {
        exitWithError(2, `Invalid charm entry at scenario.charms[${i}]`);
      } else if (c.pos !== undefined) {
        validateVec3(c.pos, `scenario.charms[${i}].pos`);
      }
    }
  }
  if (scenario.lanterns !== undefined) {
    if (!Array.isArray(scenario.lanterns)) {
      exitWithError(2, 'scenario.lanterns must be an array');
    }
    for (let i = 0; i < scenario.lanterns.length; i++) {
      const l = scenario.lanterns[i];
      if (!l || typeof l !== 'object' || Array.isArray(l) || typeof l.id !== 'string' || !l.id) {
        exitWithError(2, `Invalid lantern entry at scenario.lanterns[${i}]`);
      }
      if (l.pos !== undefined) {
        validateVec3(l.pos, `scenario.lanterns[${i}].pos`);
      }
      if (
        l.deposited !== undefined &&
        (typeof l.deposited !== 'number' || !Number.isInteger(l.deposited) || l.deposited < 0)
      ) {
        exitWithError(2, `scenario.lanterns[${i}].deposited must be a non-negative integer`);
      }
      if (l.lit !== undefined && typeof l.lit !== 'boolean') {
        exitWithError(2, `scenario.lanterns[${i}].lit must be a boolean`);
      }
    }
  }
}

export function validateInputs(inputs) {
  if (!inputs || typeof inputs !== 'object' || Array.isArray(inputs) || !Array.isArray(inputs.frames)) {
    exitWithError(2, 'Inputs file must be a JSON object containing a "frames" array');
  }
  let prevTick = -1;
  for (let i = 0; i < inputs.frames.length; i++) {
    const f = inputs.frames[i];
    if (!f || typeof f !== 'object' || Array.isArray(f)) {
      exitWithError(2, `inputs.frames[${i}] must be an object`);
    }
    if (typeof f.tick !== 'number' || !Number.isInteger(f.tick) || f.tick < 0) {
      exitWithError(2, `inputs.frames[${i}].tick must be a non-negative integer`);
    }
    if (f.tick <= prevTick) {
      exitWithError(
        2,
        `inputs.frames[${i}].tick (${f.tick}) must be strictly increasing (previous: ${prevTick})`
      );
    }
    prevTick = f.tick;

    if (f.move !== undefined) {
      if (
        !Array.isArray(f.move) ||
        f.move.length !== 2 ||
        typeof f.move[0] !== 'number' ||
        typeof f.move[1] !== 'number' ||
        !Number.isFinite(f.move[0]) ||
        !Number.isFinite(f.move[1])
      ) {
        exitWithError(2, `inputs.frames[${i}].move must be [x, z] with finite numbers`);
      }
    }
    if (
      f.cam_yaw_deg !== undefined &&
      (typeof f.cam_yaw_deg !== 'number' || !Number.isFinite(f.cam_yaw_deg))
    ) {
      exitWithError(2, `inputs.frames[${i}].cam_yaw_deg must be a finite number`);
    }
    for (const boolKey of ['jump', 'interact', 'pulse', 'dash', 'pause']) {
      if (f[boolKey] !== undefined && typeof f[boolKey] !== 'boolean') {
        exitWithError(2, `inputs.frames[${i}].${boolKey} must be a boolean`);
      }
    }
  }
}

export function runHeadless({
  seed = 1,
  night = 1,
  scenario = null,
  inputs = null,
  ticks = 0,
  snapshotEvery = 10,
  tuning = CONTRACT.tuning
}) {
  const frameMap = new Map();
  if (inputs && Array.isArray(inputs.frames)) {
    for (const f of inputs.frames) {
      frameMap.set(f.tick, f);
    }
  }

  const sim = new GameSimulation({ seed, night, scenario, tuning });
  const lines = [];

  // Snapshot at tick 0 (after scenario construction, before applying inputs)
  if (snapshotEvery > 0 && 0 % snapshotEvery === 0) {
    lines.push(JSON.stringify(sim.getSnapshot()));
  }

  for (let k = 0; k < ticks; k++) {
    if (sim.state === 'won' || sim.state === 'lost') break;
    const framePatch = frameMap.get(k) || null;
    const events = sim.step(framePatch);

    for (const ev of events) {
      lines.push(JSON.stringify(ev));
    }

    // Step 12: Emit snapshot if on schedule
    if (snapshotEvery > 0 && sim.tick % snapshotEvery === 0) {
      lines.push(JSON.stringify(sim.getSnapshot()));
    }

    if (sim.state === 'won' || sim.state === 'lost') {
      break;
    }
  }

  lines.push(JSON.stringify(sim.getEndRecord()));
  return lines;
}

function parseCliArgs(argv) {
  const args = {
    seed: 1,
    night: 1,
    scenarioPath: null,
    inputsPath: null,
    ticks: null,
    outPath: null,
    snapshotEvery: 10
  };

  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    const next = () => {
      if (i + 1 >= argv.length) {
        exitWithError(1, `Missing value for argument ${token}`);
      }
      return argv[++i];
    };

    switch (token) {
      case '--seed': {
        const val = Number(next());
        if (!Number.isInteger(val)) exitWithError(1, '--seed must be an integer');
        args.seed = val;
        break;
      }
      case '--night': {
        const val = Number(next());
        if (![1, 2, 3].includes(val)) exitWithError(1, '--night must be 1, 2, or 3');
        args.night = val;
        break;
      }
      case '--scenario':
        args.scenarioPath = next();
        break;
      case '--inputs':
        args.inputsPath = next();
        break;
      case '--ticks': {
        const val = Number(next());
        if (!Number.isInteger(val) || val < 0) {
          exitWithError(1, '--ticks must be a non-negative integer');
        }
        args.ticks = val;
        break;
      }
      case '--out':
        args.outPath = next();
        break;
      case '--snapshot-every': {
        const val = Number(next());
        if (!Number.isInteger(val) || val <= 0) {
          exitWithError(1, '--snapshot-every must be a positive integer');
        }
        args.snapshotEvery = val;
        break;
      }
      default:
        exitWithError(1, `Unknown CLI argument: ${token}`);
    }
  }

  if (args.ticks === null) {
    exitWithError(1, 'Missing required argument: --ticks <int>');
  }
  if (!args.outPath) {
    exitWithError(1, 'Missing required argument: --out <file.jsonl>');
  }

  return args;
}

function loadJsonFileForContract(filePath, kind) {
  let raw;
  try {
    raw = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    exitWithError(2, `Failed to read ${kind} file "${filePath}": ${err.message}`);
  }
  try {
    return JSON.parse(raw);
  } catch (err) {
    exitWithError(2, `Invalid JSON in ${kind} file "${filePath}": ${err.message}`);
  }
}

const isMain =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));

if (isMain) {
  const args = parseCliArgs(process.argv.slice(2));

  let tuning = CONTRACT.tuning;
  const contractFile = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '..',
    'game.contract.json'
  );
  if (fs.existsSync(contractFile)) {
    try {
      const parsedContract = JSON.parse(fs.readFileSync(contractFile, 'utf8'));
      if (parsedContract && parsedContract.tuning) {
        tuning = parsedContract.tuning;
      }
    } catch {
      // Fallback to CONTRACT.tuning
    }
  }

  let scenario = null;
  if (args.scenarioPath) {
    scenario = loadJsonFileForContract(args.scenarioPath, 'scenario');
    validateScenario(scenario);
  }

  let inputs = null;
  if (args.inputsPath) {
    inputs = loadJsonFileForContract(args.inputsPath, 'inputs');
    validateInputs(inputs);
  }

  const lines = runHeadless({
    seed: args.seed,
    night: args.night,
    scenario,
    inputs,
    ticks: args.ticks,
    snapshotEvery: args.snapshotEvery,
    tuning
  });

  try {
    const outDir = path.dirname(path.resolve(args.outPath));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(args.outPath, lines.join('\n') + '\n', 'utf8');
  } catch (err) {
    exitWithError(1, `Failed to write output file "${args.outPath}": ${err.message}`);
  }

  process.exit(0);
}
