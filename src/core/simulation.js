import { SeededRNG } from './prng.js';
import { CONTRACT, NIGHT_CONFIGS, round1, round3 } from './config.js';

export const TICK_RATE = 60;
export const DT = 1 / TICK_RATE;
export const GRAVITY = 20.0;
export const JUMP_SPEED = 7.0;
const EPS = 1e-9;

export { round1, round3 };

export function roundVec3(v) {
  return [round3(v[0]), round3(v[1]), round3(v[2])];
}

export function distXZ(a, b) {
  return Math.hypot(a[0] - b[0], a[2] - b[2]);
}

function parseNumericId(id) {
  const m = /(\d+)$/.exec(String(id));
  return m ? Number(m[1]) : 0;
}

export class GameSimulation {
  /**
   * @param {object} options
   * @param {number} [options.seed=1]
   * @param {number} [options.night=1]
   * @param {object|null} [options.scenario=null]
   * @param {object} [options.tuning=CONTRACT.tuning]
   */
  constructor({ seed = 1, night = 1, scenario = null, tuning = CONTRACT.tuning } = {}) {
    this.seed = Number(seed) || 1;
    this.night = [1, 2, 3].includes(Number(night)) ? Number(night) : 1;
    this.nightConfig = NIGHT_CONFIGS[this.night] || NIGHT_CONFIGS[1];
    this.tuning = structuredClone(tuning);
    this.rng = new SeededRNG(this.seed);

    this.tick = 0;
    this.sim_tick = 0;
    this.state = 'playing';
    this.score = 0;

    this.maxFuelUnits = Math.round((this.tuning.fuel_max ?? 100) * TICK_RATE); // 6000
    this.lowFuelThresholdUnits = Math.round((this.tuning.low_fuel_threshold ?? 30) * TICK_RATE); // 1800
    this.fuelPerMoteUnits = Math.round((this.tuning.fuel_per_mote ?? 10) * TICK_RATE); // 600
    this.fuelDecayUnitsPerTick = Math.round(this.tuning.fuel_decay_per_s ?? 1.0); // 1
    this.drainUnitsPerTick = Math.round(this.tuning.drain_per_s ?? 5.0); // 5

    const defaultDuration =
      this.tuning[this.nightConfig.durationKey] ?? this.tuning.night1_duration_s ?? 240;
    this.initialDuration =
      scenario && scenario.time_left_s !== undefined
        ? Number(scenario.time_left_s)
        : defaultDuration;
    this.time_left_s = this.initialDuration;

    // Player state
    this.player = {
      pos: [0, 0, 0],
      vel: [0, 0, 0],
      flames: this.tuning.flames,
      carried: 0,
      successfulLights: 0,
      capacity: this.tuning.carry_capacity || 10,
      grounded: true,
      invulnTicks: 0,
      dashCdTicks: 0,
      pulseCdTicks: 0,
      charmTicks: 0,
      dashTicksLeft: 0,
      dashDir: [0, 1],
      facingDir: [0, 1],
      facingYaw: 0,
      padLaunchActive: false,
      padVel: [0, 0],
      respawnWaitTicks: 0
    };

    if (scenario && scenario.player) {
      const sp = scenario.player;
      if (Array.isArray(sp.pos)) {
        this.player.pos = [Number(sp.pos[0]), Number(sp.pos[1]), Number(sp.pos[2])];
      }
      if (Array.isArray(sp.vel)) {
        this.player.vel = [Number(sp.vel[0]), Number(sp.vel[1]), Number(sp.vel[2])];
      }
      if (sp.carried !== undefined) this.player.carried = Number(sp.carried);
      if (sp.flames !== undefined) this.player.flames = Number(sp.flames);
      if (sp.successful_lights !== undefined) {
        this.player.successfulLights = Number(sp.successful_lights);
      }
      if (sp.grounded !== undefined) this.player.grounded = Boolean(sp.grounded);
      if (sp.invuln_ticks !== undefined) this.player.invulnTicks = Number(sp.invuln_ticks);
      if (sp.dash_cd_ticks !== undefined) this.player.dashCdTicks = Number(sp.dash_cd_ticks);
      if (sp.pulse_cd_ticks !== undefined) this.player.pulseCdTicks = Number(sp.pulse_cd_ticks);
      if (sp.charm_ticks !== undefined) this.player.charmTicks = Number(sp.charm_ticks);
    }

    this.updatePlayerCapacity();

    const initSurf = this.getTerrainInfo(this.player.pos[0], this.player.pos[2]);
    if (scenario?.player?.grounded === undefined) {
      this.player.grounded =
        initSurf.onIsland && Math.abs(this.player.pos[1] - initSurf.y) <= 0.15;
    }

    // Lanterns for current night (v1.2 adds fuelUnits, ever_lit, relit_count)
    this.lanterns = this.nightConfig.lanterns.map((l) => ({
      id: l.id,
      pos: [...l.pos],
      lit: false,
      deposited: 0,
      fuelUnits: 0,
      ever_lit: false,
      relit_count: 0
    }));

    if (scenario && Array.isArray(scenario.lanterns)) {
      for (const patch of scenario.lanterns) {
        let target = this.lanterns.find((l) => l.id === patch.id);
        if (!target) {
          target = {
            id: String(patch.id),
            pos: [0, 0, 0],
            lit: false,
            deposited: 0,
            fuelUnits: 0,
            ever_lit: false,
            relit_count: 0
          };
          this.lanterns.push(target);
        }
        if (Array.isArray(patch.pos)) {
          target.pos = [Number(patch.pos[0]), Number(patch.pos[1]), Number(patch.pos[2])];
        }
        if (patch.deposited !== undefined) {
          target.deposited = Number(patch.deposited);
        }
        if (patch.ever_lit !== undefined) {
          target.ever_lit = Boolean(patch.ever_lit);
        }
        if (patch.relit_count !== undefined) {
          target.relit_count = Number(patch.relit_count);
        }
        if (patch.lit !== undefined) {
          target.lit = Boolean(patch.lit);
        } else if (
          patch.deposited !== undefined &&
          target.deposited >=
            (target.ever_lit ? this.tuning.relight_cost || 5 : this.tuning.lantern_cost || 10)
        ) {
          target.lit = true;
        }

        if (target.lit) {
          const fuelVal =
            patch.fuel !== undefined ? Number(patch.fuel) : this.tuning.fuel_max ?? 100;
          target.fuelUnits = Math.max(0, Math.min(this.maxFuelUnits, Math.round(fuelVal * TICK_RATE)));
          if (patch.ever_lit === undefined) {
            target.ever_lit = true;
          }
          if (target.fuelUnits <= 0) {
            target.lit = false;
            target.deposited = 0;
          }
        } else {
          target.fuelUnits = 0;
        }
      }
    }

    // Scenario flags
    this.randomMotes =
      scenario && scenario.random_motes !== undefined ? Boolean(scenario.random_motes) : true;
    this.randomShades =
      scenario && scenario.random_shades !== undefined ? Boolean(scenario.random_shades) : true;
    this.randomDrifters =
      scenario && scenario.random_drifters !== undefined
        ? Boolean(scenario.random_drifters)
        : this.nightConfig.hasDrifters;
    this.windEnabled =
      scenario && scenario.wind_enabled !== undefined
        ? Boolean(scenario.wind_enabled)
        : this.nightConfig.hasWind;

    this.wind = {
      active: false,
      dir_deg: 0,
      ticksLeft: 0,
      warning: false,
      nextDirDeg: 0
    };

    this.nextMoteSeq = 1;
    this.nextShadeSeq = 1;
    this.nextDrifterSeq = 1;

    // Motes initialization
    this.motes = [];
    if (scenario && Array.isArray(scenario.motes)) {
      for (const item of scenario.motes) {
        if (Array.isArray(item)) {
          this.motes.push({
            id: `M${this.nextMoteSeq++}`,
            pos: [Number(item[0]), Number(item[1]), Number(item[2])],
            kind: 'random',
            ttlTicks: null,
            bornTick: 0
          });
        } else if (item && Array.isArray(item.pos)) {
          const id = item.id ? String(item.id) : `M${this.nextMoteSeq++}`;
          this.nextMoteSeq = Math.max(this.nextMoteSeq, parseNumericId(id) + 1);
          const kind = item.kind === 'dropped' ? 'dropped' : 'random';
          const ttlTicks =
            kind === 'dropped'
              ? item.ttl_ticks !== undefined
                ? Number(item.ttl_ticks)
                : item.ttl_s !== undefined && item.ttl_s !== null
                  ? Math.round(Number(item.ttl_s) * TICK_RATE)
                  : 480
              : null;
          this.motes.push({
            id,
            pos: [Number(item.pos[0]), Number(item.pos[1]), Number(item.pos[2])],
            kind,
            ttlTicks,
            bornTick: 0
          });
        }
      }
    } else if (this.randomMotes) {
      this.spawnInitialMotesFromMap(20);
    }

    // Shades initialization
    this.shades = [];
    if (scenario && Array.isArray(scenario.shades)) {
      for (const item of scenario.shades) {
        if (Array.isArray(item)) {
          const pos = [Number(item[0]), Number(item[1]), Number(item[2])];
          const initState = distXZ(this.player.pos, pos) <= 12.0 + EPS ? 'chase' : 'wander';
          this.shades.push({
            id: `S${this.nextShadeSeq++}`,
            pos,
            state: initState,
            stateTicksLeft: 0,
            pushTicksLeft: 0,
            pushDir: [1, 0],
            recoilDir: [1, 0],
            targetLanternId: null,
            drainTicks: 0,
            expelLanternId: null,
            expelTicksLeft: 0,
            bornTick: 0
          });
        } else if (item && Array.isArray(item.pos)) {
          const id = item.id ? String(item.id) : `S${this.nextShadeSeq++}`;
          this.nextShadeSeq = Math.max(this.nextShadeSeq, parseNumericId(id) + 1);
          const pos = [Number(item.pos[0]), Number(item.pos[1]), Number(item.pos[2])];
          const defaultState = distXZ(this.player.pos, pos) <= 12.0 + EPS ? 'chase' : 'wander';
          const state = item.state ? String(item.state) : defaultState;
          const defaultTicks =
            state === 'stunned' ? 120 : state === 'recoil' ? 60 : state === 'spawning' ? 15 : 0;
          const stateTicksLeft =
            item.state_ticks_left !== undefined
              ? Number(item.state_ticks_left)
              : item.stunTimer !== undefined
                ? Math.round(Number(item.stunTimer) * TICK_RATE)
                : defaultTicks;
          const dx = pos[0] - this.player.pos[0];
          const dz = pos[2] - this.player.pos[2];
          const d = Math.hypot(dx, dz);
          const awayDir = d > 1e-6 ? [dx / d, dz / d] : [1, 0];

          let targetLanternId = item.target_lantern_id ? String(item.target_lantern_id) : null;
          if (state === 'drain' && !targetLanternId) {
            const nearLit = this.lanterns.find((l) => l.lit && distXZ(pos, l.pos) <= 2.0 + EPS);
            if (nearLit) targetLanternId = nearLit.id;
          }

          this.shades.push({
            id,
            pos,
            state,
            stateTicksLeft,
            pushTicksLeft: item.push_ticks_left !== undefined ? Number(item.push_ticks_left) : 0,
            pushDir: [...awayDir],
            recoilDir: [...awayDir],
            targetLanternId,
            drainTicks: 0,
            expelLanternId: null,
            expelTicksLeft: 0,
            bornTick: 0
          });
        }
      }
    }

    // Drifters (Gió Lạc) initialization
    this.drifters = [];
    if (scenario && Array.isArray(scenario.drifters)) {
      for (const item of scenario.drifters) {
        if (Array.isArray(item)) {
          this.drifters.push({
            id: `D${this.nextDrifterSeq++}`,
            pos: [Number(item[0]), Number(item[1]), Number(item[2])],
            state: 'idle',
            stolen: 0,
            stateTicksLeft: 0,
            hasStolenOnce: false,
            wanderAngle: 0,
            bornTick: 0
          });
        } else if (item && Array.isArray(item.pos)) {
          const id = item.id ? String(item.id) : `D${this.nextDrifterSeq++}`;
          this.nextDrifterSeq = Math.max(this.nextDrifterSeq, parseNumericId(id) + 1);
          const state = item.state ? String(item.state) : 'idle';
          const stolen = item.stolen !== undefined ? Number(item.stolen) : 0;
          const stateTicksLeft =
            item.state_ticks_left !== undefined
              ? Number(item.state_ticks_left)
              : state === 'flee'
                ? 240
                : 0;
          this.drifters.push({
            id,
            pos: [Number(item.pos[0]), Number(item.pos[1]), Number(item.pos[2])],
            state,
            stolen,
            stateTicksLeft,
            hasStolenOnce: Boolean(stolen > 0 || state === 'flee'),
            wanderAngle: 0,
            bornTick: 0
          });
        }
      }
    }

    // Charms (Bùa Gió) initialization
    this.charms = this.nightConfig.charms.map((c) => ({
      id: c.id,
      pos: [...c.pos],
      available: true,
      respawnTicks: 0
    }));

    if (scenario && Array.isArray(scenario.charms)) {
      this.charms = [];
      for (let i = 0; i < scenario.charms.length; i++) {
        const item = scenario.charms[i];
        if (Array.isArray(item)) {
          this.charms.push({
            id: `C${i + 1}`,
            pos: [Number(item[0]), Number(item[1]), Number(item[2])],
            available: true,
            respawnTicks: 0
          });
        } else if (item && typeof item === 'object') {
          const id = item.id ? String(item.id) : `C${i + 1}`;
          const fallback = this.nightConfig.charms.find((c) => c.id === id);
          const pos = Array.isArray(item.pos)
            ? [Number(item.pos[0]), Number(item.pos[1]), Number(item.pos[2])]
            : fallback
              ? [...fallback.pos]
              : [35, 0, 0];
          const available = item.available !== undefined ? Boolean(item.available) : true;
          const respawnTicks =
            item.respawn_ticks !== undefined
              ? Number(item.respawn_ticks)
              : item.respawn_s !== undefined
                ? Math.round(Number(item.respawn_s) * TICK_RATE)
                : available
                  ? 0
                  : 2700;
          this.charms.push({
            id,
            pos,
            available,
            respawnTicks
          });
        }
      }
    }

    // Sticky input state
    this.currInput = {
      move: [0, 0],
      cam_yaw_deg: 0,
      jump: false,
      interact: false,
      pulse: false,
      dash: false,
      pause: false
    };
    this.prevInput = {
      jump: false,
      interact: false,
      pulse: false,
      dash: false,
      pause: false
    };
  }

  updatePlayerCapacity() {
    const baseCap = this.tuning.carry_capacity || 10;
    const maxCap = this.tuning.capacity_max || 20;
    this.player.capacity = Math.min(maxCap, baseCap + 2 * this.player.successfulLights);
  }

  /**
   * A lantern has an active 6m safe zone ONLY when lit AND fuel >= 30 (1800 fuelUnits).
   */
  hasSafeZone(lantern) {
    return Boolean(lantern.lit && lantern.fuelUnits >= this.lowFuelThresholdUnits);
  }

  spawnInitialMotesFromMap(count) {
    const pool = this.nightConfig.moteSpawnPoints.map((pt) => [...pt]);
    for (let i = pool.length - 1; i > 0; i--) {
      const j = this.rng.int(0, i);
      const tmp = pool[i];
      pool[i] = pool[j];
      pool[j] = tmp;
    }
    const limit = Math.min(count, pool.length);
    for (let i = 0; i < limit; i++) {
      this.motes.push({
        id: `M${this.nextMoteSeq++}`,
        pos: pool[i],
        kind: 'random',
        ttlTicks: null,
        bornTick: 0
      });
    }
  }

  getTerrainInfo(x, z) {
    const fallEnabled = Boolean(this.tuning.fall_enabled);
    if (this.night === 1) {
      const r = Math.hypot(x, z);
      if (!fallEnabled || r <= 40.0 + EPS) {
        return { onIsland: true, y: 0, isRamp: false };
      }
      return { onIsland: false, y: -Infinity, isRamp: false };
    }

    if (this.night === 2) {
      const inA = Math.hypot(x, z) <= 28.0 + EPS;
      const inB = Math.hypot(x - 70, z) <= 28.0 + EPS;
      const inBridge = x >= 26.0 - EPS && x <= 44.0 + EPS && z >= -2.0 - EPS && z <= 2.0 + EPS;
      if (!fallEnabled || inA || inB || inBridge) {
        return { onIsland: true, y: 0, isRamp: false };
      }
      return { onIsland: false, y: -Infinity, isRamp: false };
    }

    // Night 3 — Đảo Chuông
    const r = Math.hypot(x, z);
    if (fallEnabled && r > 45.0 + EPS) {
      return { onIsland: false, y: -Infinity, isRamp: false };
    }
    if (r <= 8.0 + EPS) {
      return { onIsland: true, y: 6.0, isRamp: false };
    }
    if (z > 0 && r >= 12.0 - EPS && r <= 24.0 + EPS) {
      return { onIsland: true, y: 3.0, isRamp: false };
    }
    for (const deg of [30, 150]) {
      const rad = (deg * Math.PI) / 180;
      const ca = Math.cos(rad);
      const sa = Math.sin(rad);
      const projR = x * ca + z * sa;
      const lat = Math.abs(-x * sa + z * ca);
      if (lat <= 1.5 + EPS && projR >= 24.0 - EPS && projR <= 30.0 + EPS) {
        const t = Math.max(0, Math.min(1, (30.0 - projR) / 6.0));
        return { onIsland: true, y: 3.0 * t, isRamp: true };
      }
    }
    return { onIsland: true, y: 0, isRamp: false };
  }

  resolveHorizontalMove(oldX, oldZ, currentY, newX, newZ) {
    let hitObstacle = false;
    let rx = newX;
    let rz = newZ;

    if (this.night === 3) {
      const distCenter = Math.hypot(rx, rz);
      if (distCenter < 2.0 && currentY >= 5.0 && currentY < 14.0) {
        hitObstacle = true;
        if (distCenter > 1e-6) {
          rx = (rx / distCenter) * 2.0;
          rz = (rz / distCenter) * 2.0;
        } else {
          rx = 2.0;
          rz = 0;
        }
      }

      const newSurf = this.getTerrainInfo(rx, rz);
      if (newSurf.onIsland && !newSurf.isRamp && newSurf.y > currentY + 0.55) {
        hitObstacle = true;
        rx = oldX;
        rz = oldZ;
      }
    }

    return { x: rx, z: rz, hitObstacle };
  }

  /**
   * Clamp shade outside safe_radius (6m) of lit lanterns that have fuel >= 30.
   */
  clampShadeOutsideSafeZones(shade) {
    if (!this.tuning.safe_radius || this.tuning.safe_radius <= 0) return;
    for (const lantern of this.lanterns) {
      if (!this.hasSafeZone(lantern)) continue;
      if (shade.expelLanternId === lantern.id) continue;
      const dx = shade.pos[0] - lantern.pos[0];
      const dz = shade.pos[2] - lantern.pos[2];
      const d = Math.hypot(dx, dz);
      if (d < this.tuning.safe_radius) {
        if (d > 1e-6) {
          shade.pos[0] = lantern.pos[0] + (dx / d) * this.tuning.safe_radius;
          shade.pos[2] = lantern.pos[2] + (dz / d) * this.tuning.safe_radius;
        } else {
          shade.pos[0] = lantern.pos[0] + this.tuning.safe_radius;
          shade.pos[2] = lantern.pos[2];
        }
      }
    }
  }

  isPlayerInLitSafeZone() {
    if (!this.tuning.safe_radius || this.tuning.safe_radius <= 0) return false;
    for (const lantern of this.lanterns) {
      if (
        this.hasSafeZone(lantern) &&
        distXZ(this.player.pos, lantern.pos) <= this.tuning.safe_radius + EPS
      ) {
        return true;
      }
    }
    return false;
  }

  /**
   * Select nearest weak lit lantern (lit && fuel < 30), tie-break by smaller numeric ID.
   * Zero-allocation loop for soak test memory stability.
   */
  findNearestWeakLantern(pos) {
    let best = null;
    let bestD = Infinity;
    let bestIdNum = Infinity;
    for (let i = 0; i < this.lanterns.length; i++) {
      const l = this.lanterns[i];
      if (!l.lit || l.fuelUnits >= this.lowFuelThresholdUnits) continue;
      const d = distXZ(pos, l.pos);
      const idNum = parseNumericId(l.id);
      if (d < bestD - 1e-6 || (Math.abs(d - bestD) <= 1e-6 && idNum < bestIdNum)) {
        best = l;
        bestD = d;
        bestIdNum = idNum;
      }
    }
    return best;
  }

  /**
   * Select nearest unlit lantern, tie-break by smaller numeric ID.
   * Zero-allocation loop for soak test memory stability.
   */
  findNearestUnlitLantern(pos) {
    let best = null;
    let bestD = Infinity;
    let bestIdNum = Infinity;
    for (let i = 0; i < this.lanterns.length; i++) {
      const l = this.lanterns[i];
      if (l.lit) continue;
      const d = distXZ(pos, l.pos);
      const idNum = parseNumericId(l.id);
      if (d < bestD - 1e-6 || (Math.abs(d - bestD) <= 1e-6 && idNum < bestIdNum)) {
        best = l;
        bestD = d;
        bestIdNum = idNum;
      }
    }
    return best;
  }

  applyInputFrame(framePatch) {
    if (!framePatch) return;
    if (framePatch.move !== undefined) {
      this.currInput.move = [Number(framePatch.move[0]), Number(framePatch.move[1])];
    }
    if (framePatch.cam_yaw_deg !== undefined) {
      this.currInput.cam_yaw_deg = Number(framePatch.cam_yaw_deg);
    }
    if (framePatch.jump !== undefined) {
      this.currInput.jump = Boolean(framePatch.jump);
    }
    if (framePatch.interact !== undefined) {
      this.currInput.interact = Boolean(framePatch.interact);
    }
    if (framePatch.pulse !== undefined) {
      this.currInput.pulse = Boolean(framePatch.pulse);
    }
    if (framePatch.dash !== undefined) {
      this.currInput.dash = Boolean(framePatch.dash);
    }
    if (framePatch.pause !== undefined) {
      this.currInput.pause = Boolean(framePatch.pause);
    }
  }

  /**
   * Execute 1 tick according to the mandatory 12-Step Tick Execution Order (Contract v1.2).
   */
  step(framePatch = null) {
    if (this.state === 'won' || this.state === 'lost') return [];

    const currentTick = this.tick + 1;
    this.tick = currentTick;

    const events = [];
    const emit = (name, data = {}) => {
      events.push({
        type: 'event',
        tick: currentTick,
        name,
        data
      });
    };

    // =========================================================================
    // STEP 1: Read input (process pause first; if just paused, stop step here)
    // =========================================================================
    this.applyInputFrame(framePatch);

    const pausePressed = !this.prevInput.pause && this.currInput.pause;
    this.prevInput.pause = this.currInput.pause;

    if (pausePressed) {
      if (this.state === 'playing') {
        this.state = 'paused';
        emit('paused', {});
        return events;
      } else if (this.state === 'paused') {
        this.state = 'playing';
        emit('resumed', {});
      }
    }

    if (this.state === 'paused') {
      return events;
    }

    const jumpPressed = !this.prevInput.jump && this.currInput.jump;
    const interactPressed = !this.prevInput.interact && this.currInput.interact;
    const pulsePressed = !this.prevInput.pulse && this.currInput.pulse;
    const dashPressed = !this.prevInput.dash && this.currInput.dash;

    this.prevInput.jump = this.currInput.jump;
    this.prevInput.interact = this.currInput.interact;
    this.prevInput.pulse = this.currInput.pulse;
    this.prevInput.dash = this.currInput.dash;

    this.sim_tick += 1;

    // =========================================================================
    // STEP 2: Decrement timers + Subtract lantern fuel (decay + shade drain)
    // Immediately after Step 2: lanterns with fuel <= 0 turn off (lantern_out)
    // =========================================================================
    this.time_left_s = Math.max(0, this.initialDuration - this.sim_tick / TICK_RATE);

    if (this.player.dashCdTicks > 0) this.player.dashCdTicks--;
    if (this.player.pulseCdTicks > 0) this.player.pulseCdTicks--;
    if (this.player.invulnTicks > 0) this.player.invulnTicks--;
    if (this.player.charmTicks > 0) {
      this.player.charmTicks--;
      if (this.player.charmTicks > 0) {
        this.player.dashCdTicks = 0;
      }
    }

    // 2a. Natural fuel decay on lit lanterns (1.0 fuel/s = 1 fuelUnit/tick)
    for (const lantern of this.lanterns) {
      if (lantern.lit) {
        lantern.fuelUnits = Math.max(0, lantern.fuelUnits - this.fuelDecayUnitsPerTick);
      }
    }

    // 2b. Shade fuel drain (5.0 fuel/s = 5 fuelUnits/tick per draining shade; emit fuel_drain every 60 ticks)
    for (let i = 0; i < this.shades.length; i++) {
      const shade = this.shades[i];
      if (shade.bornTick >= this.sim_tick || shade.state !== 'drain') continue;
      let targetL = shade.targetLanternId
        ? this.lanterns.find((l) => l.id === shade.targetLanternId)
        : null;
      if (!targetL) {
        targetL = this.lanterns.find((l) => l.lit && distXZ(shade.pos, l.pos) <= 2.0 + EPS);
        if (targetL) shade.targetLanternId = targetL.id;
      }
      if (targetL && targetL.lit) {
        targetL.fuelUnits = Math.max(0, targetL.fuelUnits - this.drainUnitsPerTick);
        shade.drainTicks = (shade.drainTicks || 0) + 1;
        if (shade.drainTicks % 60 === 0) {
          emit('fuel_drain', {
            lantern_id: targetL.id,
            shade_id: shade.id,
            fuel: round1(targetL.fuelUnits / TICK_RATE)
          });
        }
      }
    }

    // 2c. Immediately after Step 2: any lit lantern with fuel <= 0 turns off
    for (const lantern of this.lanterns) {
      if (lantern.lit && lantern.fuelUnits <= 0) {
        lantern.fuelUnits = 0;
        lantern.lit = false;
        lantern.deposited = 0;
        lantern.ever_lit = true;
        emit('lantern_out', { lantern_id: lantern.id });

        for (const shade of this.shades) {
          if (shade.state === 'drain' && shade.targetLanternId === lantern.id) {
            shade.state = 'wander';
            shade.drainTicks = 0;
          }
        }
      }
    }

    // Dropped motes TTL (480 ticks)
    for (let i = this.motes.length - 1; i >= 0; i--) {
      const m = this.motes[i];
      if (m.kind === 'dropped' && m.ttlTicks !== null && m.bornTick < this.sim_tick) {
        m.ttlTicks--;
        if (m.ttlTicks <= 0) {
          this.motes.splice(i, 1);
        }
      }
    }

    // Charm respawn timer (2700 ticks)
    for (const c of this.charms) {
      if (!c.available && c.respawnTicks > 0) {
        c.respawnTicks--;
        if (c.respawnTicks <= 0) {
          c.available = true;
          c.respawnTicks = 0;
        }
      }
    }

    // Strong wind schedule on Night 3
    if (this.windEnabled) {
      if (this.wind.ticksLeft > 0) {
        this.wind.ticksLeft--;
        if (this.wind.ticksLeft <= 0) {
          this.wind.active = false;
          this.wind.dir_deg = 0;
        }
      }
      const mod = this.sim_tick % 1800;
      if (mod === 1680) {
        this.wind.warning = true;
        this.wind.nextDirDeg = round3(this.rng.range(0, 360));
      } else if (this.sim_tick >= 1800 && mod === 0) {
        this.wind.warning = false;
        this.wind.active = true;
        this.wind.dir_deg = this.wind.nextDirDeg || round3(this.rng.range(0, 360));
        this.wind.ticksLeft = 300;
      }
    }

    // =========================================================================
    // STEP 3: Move Mây (jump, dash, jump pads, wind) then check island fall
    // =========================================================================
    if (this.player.respawnWaitTicks > 0) {
      this.player.respawnWaitTicks--;
      if (this.player.respawnWaitTicks === 0 && this.player.flames > 0) {
        this.player.pos = [0, 0, 0];
        this.player.vel = [0, 0, 0];
        this.player.grounded = true;
        this.player.invulnTicks = Math.round(this.tuning.invuln_s * TICK_RATE);
        this.player.dashTicksLeft = 0;
        this.player.padLaunchActive = false;
      }
    } else {
      let [mx, mz] = this.currInput.move;
      const moveLen = Math.hypot(mx, mz);
      if (moveLen > 1) {
        mx /= moveLen;
        mz /= moveLen;
      }
      const theta = (this.currInput.cam_yaw_deg * Math.PI) / 180;
      const wx = mx * Math.cos(theta) + mz * Math.sin(theta);
      const wz = -mx * Math.sin(theta) + mz * Math.cos(theta);

      const worldLen = Math.hypot(wx, wz);
      if (worldLen > 1e-4) {
        this.player.facingDir = [wx / worldLen, wz / worldLen];
        this.player.facingYaw = Math.atan2(wx, wz);
      }

      const dashDurationTicks = Math.round((this.tuning.dash_duration_s || 0.2) * TICK_RATE);
      const dashCooldownTicks = Math.round((this.tuning.dash_cooldown_s || 1.5) * TICK_RATE);
      if (
        dashPressed &&
        this.player.dashTicksLeft === 0 &&
        (this.player.dashCdTicks === 0 || this.player.charmTicks > 0)
      ) {
        this.player.dashTicksLeft = dashDurationTicks;
        this.player.dashCdTicks = this.player.charmTicks > 0 ? 0 : dashCooldownTicks;
        this.player.dashDir = [...this.player.facingDir];
        this.player.padLaunchActive = false;
        emit('dash', {});
      }

      // Check Jump Pads before movement integration if player is on the pad surface
      for (const pad of this.nightConfig.jumpPads) {
        if (
          !this.player.padLaunchActive &&
          distXZ(this.player.pos, pad.pos) <= pad.radius + EPS &&
          Math.abs(this.player.pos[1] - pad.pos[1]) <= 0.25
        ) {
          let ux = 0;
          let uz = -1;
          if (Array.isArray(pad.dir)) {
            const dLen = Math.hypot(pad.dir[0], pad.dir[1]) || 1;
            ux = pad.dir[0] / dLen;
            uz = pad.dir[1] / dLen;
          } else if (Array.isArray(pad.target)) {
            const dx = pad.target[0] - pad.pos[0];
            const dz = pad.target[2] - pad.pos[2];
            const dLen = Math.hypot(dx, dz) || 1;
            ux = dx / dLen;
            uz = dz / dLen;
          }
          this.player.padVel = [ux * pad.vh, uz * pad.vh];
          this.player.vel[0] = this.player.padVel[0];
          this.player.vel[2] = this.player.padVel[1];
          this.player.vel[1] = pad.vy;
          this.player.grounded = false;
          this.player.padLaunchActive = true;
          this.player.dashTicksLeft = 0;
          break;
        }
      }

      if (jumpPressed && this.player.grounded && this.player.dashTicksLeft === 0) {
        this.player.vel[1] = JUMP_SPEED;
        this.player.grounded = false;
      }

      const isDashingThisTick = this.player.dashTicksLeft > 0;
      if (isDashingThisTick) {
        const dashSpeed = this.tuning.dash_speed || 14.0;
        this.player.vel[0] = this.player.dashDir[0] * dashSpeed;
        this.player.vel[2] = this.player.dashDir[1] * dashSpeed;
        this.player.vel[1] = 0;
        this.player.dashTicksLeft--;
      } else if (this.player.padLaunchActive) {
        this.player.vel[0] = this.player.padVel[0];
        this.player.vel[2] = this.player.padVel[1];
      } else {
        const runSpeed =
          this.player.charmTicks > 0 ? this.tuning.player_speed * 1.2 : this.tuning.player_speed;
        this.player.vel[0] = wx * runSpeed;
        this.player.vel[2] = wz * runSpeed;

        if (this.wind.active) {
          const wRad = (this.wind.dir_deg * Math.PI) / 180;
          this.player.vel[0] += 2.0 * Math.cos(wRad);
          this.player.vel[2] += 2.0 * Math.sin(wRad);
        }
      }

      const nextX = this.player.pos[0] + this.player.vel[0] * DT;
      const nextZ = this.player.pos[2] + this.player.vel[2] * DT;
      const resolved = this.resolveHorizontalMove(
        this.player.pos[0],
        this.player.pos[2],
        this.player.pos[1],
        nextX,
        nextZ
      );
      this.player.pos[0] = resolved.x;
      this.player.pos[2] = resolved.z;

      const surf = this.getTerrainInfo(this.player.pos[0], this.player.pos[2]);
      if (isDashingThisTick) {
        if (surf.onIsland && Math.abs(this.player.pos[1] - surf.y) <= 0.05) {
          this.player.pos[1] = surf.y;
          this.player.grounded = true;
        } else {
          this.player.grounded = false;
        }
      } else {
        if (this.player.grounded) {
          if (surf.onIsland && Math.abs(this.player.pos[1] - surf.y) <= 0.55) {
            this.player.pos[1] = surf.y;
            this.player.vel[1] = 0;
            this.player.grounded = true;
          } else {
            this.player.grounded = false;
          }
        }
        if (!this.player.grounded) {
          const prevY = this.player.pos[1];
          this.player.pos[1] += this.player.vel[1] * DT;
          this.player.vel[1] -= GRAVITY * DT;
          if (
            surf.onIsland &&
            this.player.vel[1] <= 0 &&
            prevY >= surf.y - 0.25 &&
            this.player.pos[1] <= surf.y + EPS
          ) {
            this.player.pos[1] = surf.y;
            this.player.vel[1] = 0;
            this.player.grounded = true;
            this.player.padLaunchActive = false;
          }
        }
      }

      // Check if player just walked onto a Jump Pad
      for (const pad of this.nightConfig.jumpPads) {
        if (
          !this.player.padLaunchActive &&
          distXZ(this.player.pos, pad.pos) <= pad.radius + EPS &&
          Math.abs(this.player.pos[1] - pad.pos[1]) <= 0.25
        ) {
          let ux = 0;
          let uz = -1;
          if (Array.isArray(pad.dir)) {
            const dLen = Math.hypot(pad.dir[0], pad.dir[1]) || 1;
            ux = pad.dir[0] / dLen;
            uz = pad.dir[1] / dLen;
          } else if (Array.isArray(pad.target)) {
            const dx = pad.target[0] - pad.pos[0];
            const dz = pad.target[2] - pad.pos[2];
            const dLen = Math.hypot(dx, dz) || 1;
            ux = dx / dLen;
            uz = dz / dLen;
          }
          this.player.padVel = [ux * pad.vh, uz * pad.vh];
          this.player.vel[0] = this.player.padVel[0];
          this.player.vel[2] = this.player.padVel[1];
          this.player.vel[1] = pad.vy;
          this.player.grounded = false;
          this.player.padLaunchActive = true;
          this.player.dashTicksLeft = 0;
          break;
        }
      }

      // Check Fall off Island (Y < -10)
      if (this.tuning.fall_enabled && this.player.pos[1] < -10) {
        const lost = this.player.carried;
        this.player.flames = Math.max(0, this.player.flames - 1);
        this.player.carried = 0;
        this.player.vel = [0, 0, 0];
        this.player.dashTicksLeft = 0;
        this.player.padLaunchActive = false;

        emit('player_hit', {
          by: 'fall',
          flames: this.player.flames,
          dropped: 0,
          lost
        });

        if (this.player.flames > 0) {
          this.player.respawnWaitTicks = 60;
        }
      }
    }

    const canPlayerInteract = this.player.respawnWaitTicks === 0 && this.player.flames > 0;

    // =========================================================================
    // STEP 4: Pickup motes (up to dynamic player.capacity) and charms
    // =========================================================================
    if (canPlayerInteract) {
      this.updatePlayerCapacity();
      for (let i = 0; i < this.motes.length; ) {
        if (this.player.carried >= this.player.capacity) break;
        const mote = this.motes[i];
        if (
          mote.bornTick < this.sim_tick &&
          distXZ(this.player.pos, mote.pos) <= this.tuning.pickup_radius + EPS &&
          Math.abs(this.player.pos[1] - mote.pos[1]) <= 1.5 + EPS
        ) {
          this.motes.splice(i, 1);
          this.player.carried += 1;
          emit('mote_picked', { carried: this.player.carried });
        } else {
          i++;
        }
      }

      for (const charm of this.charms) {
        if (
          charm.available &&
          distXZ(this.player.pos, charm.pos) <= this.tuning.pickup_radius + EPS &&
          Math.abs(this.player.pos[1] - charm.pos[1]) <= 1.5 + EPS
        ) {
          charm.available = false;
          charm.respawnTicks = 2700;
          this.player.charmTicks = 600;
          this.player.dashCdTicks = 0;
          emit('charm_picked', { charm_id: charm.id, charm_ticks: 600 });
        }
      }
    }

    // =========================================================================
    // STEP 5: Interact with lanterns (Light, Relight, or Refuel)
    // =========================================================================
    if (canPlayerInteract && interactPressed && this.player.carried > 0) {
      const candidates = [];
      for (const lantern of this.lanterns) {
        // Eligible if unlit OR (lit and fuel < 100)
        const canAcceptMotes = !lantern.lit || lantern.fuelUnits < this.maxFuelUnits;
        if (!canAcceptMotes) continue;
        const d = distXZ(this.player.pos, lantern.pos);
        if (d <= this.tuning.interact_radius + EPS) {
          candidates.push({ lantern, d });
        }
      }
      candidates.sort((a, b) => {
        if (Math.abs(a.d - b.d) > 1e-6) return a.d - b.d;
        return parseNumericId(a.lantern.id) - parseNumericId(b.lantern.id);
      });

      if (candidates.length > 0) {
        const bestLantern = candidates[0].lantern;
        const perMoteScore = this.tuning.score.per_mote ?? 5;

        if (!bestLantern.lit) {
          // Deposit into unlit lantern (cost = 5 if ever_lit, else 10)
          const requiredCost = bestLantern.ever_lit
            ? this.tuning.relight_cost || 5
            : this.tuning.lantern_cost || 10;
          const needed = Math.max(0, requiredCost - bestLantern.deposited);
          const amount = Math.min(this.player.carried, needed);
          if (amount > 0) {
            this.player.carried -= amount;
            bestLantern.deposited += amount;
            this.score += amount * perMoteScore;

            emit('deposit', {
              lantern_id: bestLantern.id,
              amount,
              deposited: bestLantern.deposited
            });

            if (bestLantern.deposited >= requiredCost && !bestLantern.lit) {
              const isRelight = Boolean(bestLantern.ever_lit);
              bestLantern.lit = true;
              bestLantern.fuelUnits = this.maxFuelUnits;
              bestLantern.ever_lit = true;
              if (isRelight) {
                bestLantern.relit_count = (bestLantern.relit_count || 0) + 1;
                this.score += 40;
              } else {
                this.score += this.tuning.score.per_lantern || 100;
              }

              this.player.successfulLights += 1;
              this.updatePlayerCapacity();

              emit('lantern_lit', {
                lantern_id: bestLantern.id,
                relight: isRelight
              });

              // Expel shades inside 6m over max 30 ticks
              for (const shade of this.shades) {
                if (shade.state === 'drain' && shade.targetLanternId === bestLantern.id) {
                  shade.state = 'wander';
                  shade.drainTicks = 0;
                }
                if (distXZ(shade.pos, bestLantern.pos) < this.tuning.safe_radius) {
                  shade.expelLanternId = bestLantern.id;
                  shade.expelTicksLeft = 30;
                }
              }
            }
          }
        } else {
          // Refuel an already-lit lantern with fuel < 100
          const missingUnits = this.maxFuelUnits - bestLantern.fuelUnits;
          const neededMotes = Math.ceil(missingUnits / this.fuelPerMoteUnits);
          const used = Math.min(this.player.carried, neededMotes);
          if (used > 0) {
            const wasBelowThreshold = bestLantern.fuelUnits < this.lowFuelThresholdUnits;
            this.player.carried -= used;
            bestLantern.fuelUnits = Math.min(
              this.maxFuelUnits,
              bestLantern.fuelUnits + used * this.fuelPerMoteUnits
            );
            this.score += used * perMoteScore;

            emit('refuel', {
              lantern_id: bestLantern.id,
              amount: used,
              fuel: round1(bestLantern.fuelUnits / TICK_RATE)
            });

            if (wasBelowThreshold && bestLantern.fuelUnits >= this.lowFuelThresholdUnits) {
              for (const shade of this.shades) {
                if (shade.state === 'drain' && shade.targetLanternId === bestLantern.id) {
                  shade.state = 'wander';
                  shade.drainTicks = 0;
                }
                if (distXZ(shade.pos, bestLantern.pos) < this.tuning.safe_radius) {
                  shade.expelLanternId = bestLantern.id;
                  shade.expelTicksLeft = 30;
                }
              }
            }
          }
        }
      }
    }

    // =========================================================================
    // STEP 6: Update safe zones (ONLY lanterns with lit && fuel >= 30)
    // =========================================================================
    for (const shade of this.shades) {
      if (shade.expelLanternId) {
        const lantern = this.lanterns.find((l) => l.id === shade.expelLanternId);
        if (lantern && this.hasSafeZone(lantern)) {
          const dx = shade.pos[0] - lantern.pos[0];
          const dz = shade.pos[2] - lantern.pos[2];
          const d = Math.hypot(dx, dz);
          if (d >= this.tuning.safe_radius - EPS || shade.expelTicksLeft <= 1) {
            if (d > 1e-6) {
              shade.pos[0] = lantern.pos[0] + (dx / d) * this.tuning.safe_radius;
              shade.pos[2] = lantern.pos[2] + (dz / d) * this.tuning.safe_radius;
            } else {
              shade.pos[0] = lantern.pos[0] + this.tuning.safe_radius;
              shade.pos[2] = lantern.pos[2];
            }
            shade.expelLanternId = null;
            shade.expelTicksLeft = 0;
          } else {
            const stepOut = (this.tuning.safe_radius - d) / shade.expelTicksLeft;
            const ux = d > 1e-6 ? dx / d : 1;
            const uz = d > 1e-6 ? dz / d : 0;
            shade.pos[0] += ux * stepOut;
            shade.pos[2] += uz * stepOut;
            shade.expelTicksLeft--;
          }
        } else {
          shade.expelLanternId = null;
          shade.expelTicksLeft = 0;
        }
      }
      this.clampShadeOutsideSafeZones(shade);
    }

    // =========================================================================
    // STEP 7: Tỏa Sáng (Pulse) — +15 score if shade was draining, else +5
    // =========================================================================
    if (
      canPlayerInteract &&
      pulsePressed &&
      this.player.carried >= this.tuning.pulse_cost &&
      this.player.pulseCdTicks === 0
    ) {
      this.player.carried -= this.tuning.pulse_cost;
      this.player.pulseCdTicks = Math.round(this.tuning.pulse_cooldown_s * TICK_RATE);
      const stunned_ids = [];
      const stunTicks = Math.round(this.tuning.pulse_stun_s * TICK_RATE);

      for (const shade of this.shades) {
        if (shade.bornTick >= this.sim_tick) continue;
        const dx = shade.pos[0] - this.player.pos[0];
        const dz = shade.pos[2] - this.player.pos[2];
        const dy = Math.min(
          Math.abs(this.player.pos[1] + 0.8 - shade.pos[1]),
          Math.abs(this.player.pos[1] - shade.pos[1])
        );
        const dist3D = Math.hypot(dx, dy, dz);
        if (dist3D <= this.tuning.pulse_radius + EPS) {
          const wasDraining = shade.state === 'drain';
          shade.state = 'stunned';
          shade.drainTicks = 0;
          shade.stateTicksLeft = stunTicks;
          shade.pushTicksLeft = 15;
          const dHoriz = Math.hypot(dx, dz);
          if (dHoriz > 1e-6) {
            shade.pushDir = [dx / dHoriz, dz / dHoriz];
          } else {
            shade.pushDir = [1, 0];
          }
          stunned_ids.push(shade.id);
          this.score += wasDraining ? 15 : this.tuning.score.per_stun || 5;
        }
      }

      // Pulse interaction with Drifters
      for (const drifter of this.drifters) {
        if (drifter.bornTick >= this.sim_tick || drifter.state === 'removed') continue;
        const dx = drifter.pos[0] - this.player.pos[0];
        const dz = drifter.pos[2] - this.player.pos[2];
        const dy = Math.min(
          Math.abs(this.player.pos[1] + 0.8 - drifter.pos[1]),
          Math.abs(this.player.pos[1] - drifter.pos[1])
        );
        if (Math.hypot(dx, dy, dz) <= this.tuning.pulse_radius + EPS) {
          if (drifter.state === 'chase') {
            drifter.state = 'flee';
            drifter.stateTicksLeft = 240;
          } else if (drifter.state === 'flee' && drifter.stolen > 0) {
            const amount = drifter.stolen;
            drifter.stolen = 0;
            drifter.stateTicksLeft = 120;
            for (let m = 0; m < amount; m++) {
              const ang = (m * Math.PI * 2) / amount;
              const r = amount > 1 ? 0.5 : 0;
              const mx = round3(drifter.pos[0] + Math.cos(ang) * r);
              const mz = round3(drifter.pos[2] + Math.sin(ang) * r);
              const surf = this.getTerrainInfo(mx, mz);
              const my = surf.onIsland ? round3(surf.y) : round3(drifter.pos[1]);
              this.motes.push({
                id: `M${this.nextMoteSeq++}`,
                pos: [mx, my, mz],
                kind: 'dropped',
                ttlTicks: 480,
                bornTick: this.sim_tick
              });
            }
            emit('drifter_drop', { drifter_id: drifter.id, amount });
          }
        }
      }

      emit('pulse', { stunned_ids });
    }

    // =========================================================================
    // STEP 8: Move Shades (spawning, wander, chase, drain, recoil, stunned) & Drifters
    // =========================================================================
    const shadeSpeed = this.night === 3 ? 4.5 : this.tuning.shade_speed;
    for (const shade of this.shades) {
      if (shade.bornTick >= this.sim_tick) continue;

      if (shade.state === 'spawning') {
        shade.stateTicksLeft--;
        if (shade.stateTicksLeft <= 0) {
          shade.state = 'wander';
        }
      } else if (shade.state === 'stunned') {
        if (shade.pushTicksLeft > 0) {
          const pushStep = (this.tuning.pulse_push_m || 4.0) / 15;
          const nx = shade.pos[0] + shade.pushDir[0] * pushStep;
          const nz = shade.pos[2] + shade.pushDir[1] * pushStep;
          const res = this.resolveHorizontalMove(shade.pos[0], shade.pos[2], shade.pos[1], nx, nz);
          shade.pos[0] = res.x;
          shade.pos[2] = res.z;
          if (res.hitObstacle) {
            shade.pushTicksLeft = 0;
          } else {
            shade.pushTicksLeft--;
          }
          this.clampShadeOutsideSafeZones(shade);
        }
        shade.stateTicksLeft--;
        if (shade.stateTicksLeft <= 0) {
          // TICKET-03 Part 2: "Hết choáng thì về wander."
          shade.state = 'wander';
        }
      } else if (shade.state === 'recoil') {
        const recoilStep = 2.0 / 60;
        const nx = shade.pos[0] + shade.recoilDir[0] * recoilStep;
        const nz = shade.pos[2] + shade.recoilDir[1] * recoilStep;
        const res = this.resolveHorizontalMove(shade.pos[0], shade.pos[2], shade.pos[1], nx, nz);
        shade.pos[0] = res.x;
        shade.pos[2] = res.z;
        this.clampShadeOutsideSafeZones(shade);
        shade.stateTicksLeft--;
        if (shade.stateTicksLeft <= 0) {
          shade.state = distXZ(this.player.pos, shade.pos) <= 12.0 + EPS ? 'chase' : 'wander';
        }
      } else if (shade.state === 'drain') {
        // Check transitions out of drain:
        // -> chase if Mây enters <= 6m
        // -> wander if lantern out, refueled >= 30, or dist > 2m
        const targetL = shade.targetLanternId
          ? this.lanterns.find((l) => l.id === shade.targetLanternId)
          : null;
        const dToPlayer = distXZ(this.player.pos, shade.pos);
        if (dToPlayer <= 6.0 + EPS) {
          shade.state = 'chase';
          shade.drainTicks = 0;
          if (dToPlayer > 1e-6) {
            const stepDist = Math.min(dToPlayer, shadeSpeed * DT);
            const nx = shade.pos[0] + ((this.player.pos[0] - shade.pos[0]) / dToPlayer) * stepDist;
            const nz = shade.pos[2] + ((this.player.pos[2] - shade.pos[2]) / dToPlayer) * stepDist;
            const res = this.resolveHorizontalMove(
              shade.pos[0],
              shade.pos[2],
              shade.pos[1],
              nx,
              nz
            );
            shade.pos[0] = res.x;
            shade.pos[2] = res.z;
          }
          this.clampShadeOutsideSafeZones(shade);
        } else if (
          !targetL ||
          !targetL.lit ||
          targetL.fuelUnits >= this.lowFuelThresholdUnits ||
          distXZ(shade.pos, targetL.pos) > 2.0 + EPS
        ) {
          shade.state = 'wander';
          shade.drainTicks = 0;
        }
      } else if (shade.state === 'chase') {
        // Chasing shades do not switch targets unless player exceeds 18m
        const dToPlayer = distXZ(this.player.pos, shade.pos);
        if (dToPlayer > 18.0 + EPS) {
          shade.state = 'wander';
        } else {
          if (dToPlayer > 1e-6) {
            const stepDist = Math.min(dToPlayer, shadeSpeed * DT);
            const nx = shade.pos[0] + ((this.player.pos[0] - shade.pos[0]) / dToPlayer) * stepDist;
            const nz = shade.pos[2] + ((this.player.pos[2] - shade.pos[2]) / dToPlayer) * stepDist;
            const res = this.resolveHorizontalMove(
              shade.pos[0],
              shade.pos[2],
              shade.pos[1],
              nx,
              nz
            );
            shade.pos[0] = res.x;
            shade.pos[2] = res.z;
          }
          this.clampShadeOutsideSafeZones(shade);
        }
      } else {
        // shade.state === 'wander'
        const dToPlayer = distXZ(this.player.pos, shade.pos);
        const weakLantern = this.findNearestWeakLantern(shade.pos);

        if (weakLantern) {
          // Prioritize moving toward nearest weak lit lantern (fuel < 30) unless player is within 6m
          if (dToPlayer <= 6.0 + EPS) {
            shade.state = 'chase';
            const stepDist = Math.min(dToPlayer, shadeSpeed * DT);
            if (dToPlayer > 1e-6) {
              shade.pos[0] += ((this.player.pos[0] - shade.pos[0]) / dToPlayer) * stepDist;
              shade.pos[2] += ((this.player.pos[2] - shade.pos[2]) / dToPlayer) * stepDist;
            }
            this.clampShadeOutsideSafeZones(shade);
          } else {
            shade.targetLanternId = weakLantern.id;
            const dL = distXZ(shade.pos, weakLantern.pos);
            if (dL <= 2.0 + EPS) {
              shade.state = 'drain';
              shade.drainTicks = 0;
            } else {
              const stepDist = Math.min(dL - 1.9, shadeSpeed * DT);
              const nx = shade.pos[0] + ((weakLantern.pos[0] - shade.pos[0]) / dL) * stepDist;
              const nz = shade.pos[2] + ((weakLantern.pos[2] - shade.pos[2]) / dL) * stepDist;
              const res = this.resolveHorizontalMove(
                shade.pos[0],
                shade.pos[2],
                shade.pos[1],
                nx,
                nz
              );
              shade.pos[0] = res.x;
              shade.pos[2] = res.z;
              this.clampShadeOutsideSafeZones(shade);
              if (distXZ(shade.pos, weakLantern.pos) <= 2.0 + EPS) {
                shade.state = 'drain';
                shade.drainTicks = 0;
              }
            }
          }
        } else {
          // No weak lit lantern: detect player within 12m, else move toward nearest unlit lantern
          if (dToPlayer <= 12.0 + EPS) {
            shade.state = 'chase';
            if (dToPlayer > 1e-6) {
              const stepDist = Math.min(dToPlayer, shadeSpeed * DT);
              const nx =
                shade.pos[0] + ((this.player.pos[0] - shade.pos[0]) / dToPlayer) * stepDist;
              const nz =
                shade.pos[2] + ((this.player.pos[2] - shade.pos[2]) / dToPlayer) * stepDist;
              const res = this.resolveHorizontalMove(
                shade.pos[0],
                shade.pos[2],
                shade.pos[1],
                nx,
                nz
              );
              shade.pos[0] = res.x;
              shade.pos[2] = res.z;
            }
            this.clampShadeOutsideSafeZones(shade);
          } else {
            const unlitL = this.findNearestUnlitLantern(shade.pos);
            if (unlitL) {
              shade.targetLanternId = unlitL.id;
              const dU = distXZ(shade.pos, unlitL.pos);
              if (dU > 2.0 + EPS) {
                const stepDist = Math.min(dU - 2.0, shadeSpeed * 0.5 * DT);
                const nx = shade.pos[0] + ((unlitL.pos[0] - shade.pos[0]) / dU) * stepDist;
                const nz = shade.pos[2] + ((unlitL.pos[2] - shade.pos[2]) / dU) * stepDist;
                const res = this.resolveHorizontalMove(
                  shade.pos[0],
                  shade.pos[2],
                  shade.pos[1],
                  nx,
                  nz
                );
                shade.pos[0] = res.x;
                shade.pos[2] = res.z;
              }
            }
            this.clampShadeOutsideSafeZones(shade);
          }
        }
      }
    }

    // Move Drifters (Gió Lạc)
    for (let i = this.drifters.length - 1; i >= 0; i--) {
      const drifter = this.drifters[i];
      if (drifter.bornTick >= this.sim_tick) continue;

      if (drifter.state === 'flee') {
        const dx = drifter.pos[0] - this.player.pos[0];
        const dz = drifter.pos[2] - this.player.pos[2];
        const d = Math.hypot(dx, dz);
        const ux = d > 1e-6 ? dx / d : 1;
        const uz = d > 1e-6 ? dz / d : 0;
        drifter.pos[0] += ux * 7.0 * DT;
        drifter.pos[2] += uz * 7.0 * DT;
        drifter.stateTicksLeft--;
        if (drifter.stateTicksLeft <= 0) {
          drifter.state = 'removed';
          this.drifters.splice(i, 1);
        }
      } else if (drifter.state === 'removed') {
        this.drifters.splice(i, 1);
      } else {
        const d = distXZ(this.player.pos, drifter.pos);
        if (!drifter.hasStolenOnce && this.player.carried >= 5 && d <= 15.0 + EPS) {
          drifter.state = 'chase';
        } else {
          drifter.state = 'idle';
        }

        if (drifter.state === 'chase') {
          if (d > 1e-6) {
            const stepDist = Math.min(d, 7.0 * DT);
            drifter.pos[0] += ((this.player.pos[0] - drifter.pos[0]) / d) * stepDist;
            drifter.pos[2] += ((this.player.pos[2] - drifter.pos[2]) / d) * stepDist;
          }
        } else {
          drifter.wanderAngle = (drifter.wanderAngle || 0) + 0.025;
          drifter.pos[0] += Math.cos(drifter.wanderAngle) * 2.0 * DT;
          drifter.pos[2] += Math.sin(drifter.wanderAngle) * 2.0 * DT;
        }
      }
    }

    // =========================================================================
    // STEP 9: Collisions — Drifters steal first, then Shades hit (ascending ID)
    // =========================================================================
    if (canPlayerInteract) {
      if (this.drifters.length > 1) {
        this.drifters.sort((a, b) => parseNumericId(a.id) - parseNumericId(b.id));
      }
      for (let i = 0; i < this.drifters.length; i++) {
        const drifter = this.drifters[i];
        if (drifter.bornTick >= this.sim_tick) continue;
        if (drifter.state !== 'chase' || drifter.hasStolenOnce) continue;
        if (distXZ(this.player.pos, drifter.pos) <= 1.2 + EPS) {
          const amount = Math.min(3, this.player.carried);
          this.player.carried -= amount;
          drifter.stolen = amount;
          drifter.hasStolenOnce = true;
          drifter.state = 'flee';
          drifter.stateTicksLeft = 240;
          emit('drifter_steal', {
            drifter_id: drifter.id,
            amount,
            carried: this.player.carried
          });
        }
      }

      const playerSafe = this.isPlayerInLitSafeZone();
      if (this.shades.length > 1) {
        this.shades.sort((a, b) => parseNumericId(a.id) - parseNumericId(b.id));
      }
      for (let i = 0; i < this.shades.length; i++) {
        const shade = this.shades[i];
        if (shade.bornTick >= this.sim_tick) continue;
        if (
          shade.state === 'stunned' ||
          shade.state === 'spawning' ||
          shade.state === 'recoil' ||
          shade.expelLanternId
        ) {
          continue;
        }
        if (playerSafe) continue;

        if (
          distXZ(this.player.pos, shade.pos) <= this.tuning.shade_hit_radius + EPS &&
          Math.abs(this.player.pos[1] - shade.pos[1]) <= 1.5 + EPS
        ) {
          if (this.player.invulnTicks > 0) {
            continue;
          }

          this.player.flames = Math.max(0, this.player.flames - 1);
          const dropped = Math.floor(this.player.carried * (this.tuning.hit_drop_ratio ?? 0.5));
          this.player.carried = Math.max(0, this.player.carried - dropped);
          this.player.invulnTicks = Math.round(this.tuning.invuln_s * TICK_RATE);

          for (let m = 0; m < dropped; m++) {
            const ang = (m * Math.PI * 2) / dropped + this.rng.range(0, 0.35);
            const rad = this.rng.range(1.5, 2.5);
            const mx = round3(this.player.pos[0] + Math.cos(ang) * rad);
            const mz = round3(this.player.pos[2] + Math.sin(ang) * rad);
            const surf = this.getTerrainInfo(mx, mz);
            const my = surf.onIsland ? round3(surf.y) : round3(this.player.pos[1]);
            this.motes.push({
              id: `M${this.nextMoteSeq++}`,
              pos: [mx, my, mz],
              kind: 'dropped',
              ttlTicks: 480,
              bornTick: this.sim_tick
            });
          }

          const dx = shade.pos[0] - this.player.pos[0];
          const dz = shade.pos[2] - this.player.pos[2];
          const d = Math.hypot(dx, dz);
          shade.recoilDir = d > 1e-6 ? [dx / d, dz / d] : [1, 0];
          shade.state = 'recoil';
          shade.drainTicks = 0;
          shade.stateTicksLeft = 60;

          emit('player_hit', {
            by: 'shade',
            flames: this.player.flames,
            dropped
          });
          break;
        }
      }
    }

    // =========================================================================
    // STEP 10: Scheduled spawns (motes, shades, drifters)
    // =========================================================================
    if (this.randomMotes && this.sim_tick % 240 === 0 && this.motes.length < 30) {
      const emptyPts = this.nightConfig.moteSpawnPoints.filter(
        (pt) =>
          !this.motes.some((m) => distXZ(m.pos, pt) <= 0.5 && Math.abs(m.pos[1] - pt[1]) <= 0.5)
      );
      if (emptyPts.length > 0) {
        const chosen = emptyPts[this.rng.int(0, emptyPts.length - 1)];
        this.motes.push({
          id: `M${this.nextMoteSeq++}`,
          pos: [...chosen],
          kind: 'random',
          ttlTicks: null,
          bornTick: this.sim_tick
        });
      }
    }

    if (
      this.randomShades &&
      this.sim_tick >= this.nightConfig.shadeFirstSpawnTick &&
      (this.sim_tick - this.nightConfig.shadeFirstSpawnTick) %
        this.nightConfig.shadeIntervalTicks ===
        0
    ) {
      const countToSpawn = this.sim_tick === this.nightConfig.shadeFirstSpawnTick ? 2 : 1;
      for (let s = 0; s < countToSpawn; s++) {
        if (this.shades.length >= this.nightConfig.maxShades) break;
        const validPts = this.nightConfig.shadeSpawnPoints.filter((pt) => {
          if (distXZ(pt, this.player.pos) < 15.0) return false;
          for (const l of this.lanterns) {
            if (this.hasSafeZone(l) && distXZ(pt, l.pos) < this.tuning.safe_radius) return false;
          }
          for (const sh of this.shades) {
            if (distXZ(pt, sh.pos) < 1.0) return false;
          }
          return true;
        });
        if (validPts.length > 0) {
          const chosen = validPts[this.rng.int(0, validPts.length - 1)];
          const newShade = {
            id: `S${this.nextShadeSeq++}`,
            pos: [...chosen],
            state: 'spawning',
            stateTicksLeft: 15,
            pushTicksLeft: 0,
            pushDir: [1, 0],
            recoilDir: [1, 0],
            targetLanternId: null,
            drainTicks: 0,
            expelLanternId: null,
            expelTicksLeft: 0,
            bornTick: this.sim_tick
          };
          this.shades.push(newShade);
          emit('shade_spawned', { id: newShade.id });
        }
      }
    }

    if (
      this.randomDrifters &&
      this.sim_tick >= 1200 &&
      this.sim_tick % 1200 === 0 &&
      this.drifters.length < 2
    ) {
      const pts = this.nightConfig.shadeSpawnPoints;
      if (pts.length > 0) {
        const chosen = pts[this.rng.int(0, pts.length - 1)];
        this.drifters.push({
          id: `D${this.nextDrifterSeq++}`,
          pos: [...chosen],
          state: 'idle',
          stolen: 0,
          stateTicksLeft: 0,
          hasStolenOnce: false,
          wanderAngle: this.rng.range(0, Math.PI * 2),
          bornTick: this.sim_tick
        });
      }
    }

    // =========================================================================
    // STEP 11: Win / Lose check (TICKET-03 / Contract v1.2)
    // - No early win when all lanterns are lit!
    // - Priority:
    //   1) flames <= 0 -> lost (no_flames)
    //   2) time_left_s <= 0 -> if lit_count >= ceil(0.6 * total) -> won (dawn_survived)
    //                          else -> lost (dawn)
    // =========================================================================
    if (this.player.flames <= 0) {
      this.state = 'lost';
      emit('game_over', { result: 'lost', reason: 'no_flames' });
    } else if (this.time_left_s <= EPS) {
      this.time_left_s = 0;
      const winRatio = this.tuning.win_ratio ?? 0.6;
      const requiredLit = Math.ceil(winRatio * this.lanterns.length);
      const litLanterns = this.lanterns.filter((l) => l.lit);

      if (litLanterns.length >= requiredLit) {
        this.state = 'won';
        // Dawn bonus: +50 + floor(fuel) for each lit lantern, +50 per remaining flame
        let dawnBonus = 0;
        for (const l of litLanterns) {
          dawnBonus += 50 + Math.floor(l.fuelUnits / TICK_RATE);
        }
        dawnBonus += this.player.flames * (this.tuning.score.per_flame_left || 50);
        this.score += dawnBonus;
        emit('game_over', { result: 'won', reason: 'dawn_survived' });
      } else {
        this.state = 'lost';
        emit('game_over', { result: 'lost', reason: 'dawn' });
      }
    }

    return events;
  }

  /**
   * Build snapshot JSON object at current tick according to Test Contract v1.2 (TICKET-03 Part 7).
   */
  getSnapshot() {
    this.updatePlayerCapacity();
    return {
      type: 'snapshot',
      tick: this.tick,
      sim_tick: this.sim_tick,
      night: this.night,
      state: this.state,
      time_left_s: round3(this.time_left_s),
      score: this.score,
      wind: {
        active: Boolean(this.wind.active),
        dir_deg: round3(this.wind.active ? this.wind.dir_deg : 0)
      },
      player: {
        pos: roundVec3(this.player.pos),
        vel: roundVec3(this.player.vel),
        flames: this.player.flames,
        carried: this.player.carried,
        capacity: this.player.capacity,
        grounded: Boolean(this.player.grounded),
        invuln: this.player.invulnTicks > 0,
        dash_cd_s: round3(this.player.dashCdTicks / TICK_RATE),
        pulse_cd_s: round3(this.player.pulseCdTicks / TICK_RATE),
        charm_s: round3(this.player.charmTicks / TICK_RATE)
      },
      lanterns: this.lanterns.map((l) => ({
        id: l.id,
        pos: roundVec3(l.pos),
        lit: l.lit,
        deposited: l.deposited,
        fuel: l.lit ? round1(l.fuelUnits / TICK_RATE) : 0,
        ever_lit: Boolean(l.ever_lit),
        relit_count: l.relit_count || 0
      })),
      shades: this.shades.map((s) => ({
        id: s.id,
        pos: roundVec3(s.pos),
        state: s.state
      })),
      motes_active: this.motes.length,
      motes: this.motes.map((m) => ({
        id: m.id,
        pos: roundVec3(m.pos),
        kind: m.kind,
        ttl_s: m.kind === 'dropped' && m.ttlTicks !== null ? round3(m.ttlTicks / TICK_RATE) : null
      })),
      drifters: this.drifters.map((d) => ({
        id: d.id,
        pos: roundVec3(d.pos),
        state: d.state,
        stolen: d.stolen
      })),
      charms: this.charms.map((c) => ({
        id: c.id,
        pos: roundVec3(c.pos),
        available: c.available,
        respawn_s: round3(c.respawnTicks / TICK_RATE)
      }))
    };
  }

  getEndRecord() {
    return {
      type: 'end',
      ticks: this.tick,
      state: this.state,
      score: this.score
    };
  }
}
