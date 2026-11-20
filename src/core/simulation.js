import { SeededRNG } from './prng.js';
import { CONTRACT, DEFAULT_LANTERNS_NIGHT1 } from './config.js';

export const TICK_RATE = 60;
export const DT = 1 / TICK_RATE;
const EPS = 1e-9;

export function round3(n) {
  const r = Math.round((Number(n) + Number.EPSILON) * 1000) / 1000;
  return Object.is(r, -0) ? 0 : r;
}

export function roundVec3(v) {
  return [round3(v[0]), round3(v[1]), round3(v[2])];
}

export function distXZ(a, b) {
  return Math.hypot(a[0] - b[0], a[2] - b[2]);
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
    this.night = Number(night) || 1;
    this.tuning = structuredClone(tuning);
    this.rng = new SeededRNG(this.seed);

    this.tick = 0;
    this.sim_tick = 0;
    this.state = 'playing';
    this.score = 0;

    this.initialDuration =
      scenario && scenario.time_left_s !== undefined
        ? Number(scenario.time_left_s)
        : this.tuning.night1_duration_s;
    this.time_left_s = this.initialDuration;

    // Player state
    this.player = {
      pos: [0, 0, 0],
      vy: 0,
      flames: this.tuning.flames,
      carried: 0,
      invulnTimer: 0,
      pulseCooldown: 0,
      facingYaw: 0
    };

    if (scenario && scenario.player) {
      if (Array.isArray(scenario.player.pos)) {
        this.player.pos = [
          Number(scenario.player.pos[0]),
          Number(scenario.player.pos[1]),
          Number(scenario.player.pos[2])
        ];
      }
      if (scenario.player.carried !== undefined) {
        this.player.carried = Number(scenario.player.carried);
      }
      if (scenario.player.flames !== undefined) {
        this.player.flames = Number(scenario.player.flames);
      }
    }

    // Lanterns (L1..L5)
    this.lanterns = DEFAULT_LANTERNS_NIGHT1.slice(0, this.tuning.lantern_count_night1).map((l) => ({
      id: l.id,
      pos: [...l.pos],
      lit: Boolean(l.lit),
      deposited: Number(l.deposited)
    }));

    if (scenario && Array.isArray(scenario.lanterns)) {
      for (const patch of scenario.lanterns) {
        let target = this.lanterns.find((l) => l.id === patch.id);
        if (!target) {
          target = {
            id: String(patch.id),
            pos: [0, 0, 0],
            lit: false,
            deposited: 0
          };
          this.lanterns.push(target);
        }
        if (Array.isArray(patch.pos)) {
          target.pos = [Number(patch.pos[0]), Number(patch.pos[1]), Number(patch.pos[2])];
        }
        if (patch.deposited !== undefined) {
          target.deposited = Number(patch.deposited);
        }
        if (patch.lit !== undefined) {
          target.lit = Boolean(patch.lit);
          if (target.lit && patch.deposited === undefined && target.deposited < this.tuning.lantern_cost) {
            target.deposited = this.tuning.lantern_cost;
          }
        } else if (patch.deposited !== undefined && target.deposited >= this.tuning.lantern_cost) {
          target.lit = true;
        }
      }
    }

    // Random spawn flags
    this.randomMotes =
      scenario && scenario.random_motes !== undefined ? Boolean(scenario.random_motes) : true;
    this.randomShades =
      scenario && scenario.random_shades !== undefined ? Boolean(scenario.random_shades) : true;

    this.nextMoteSeq = 1;
    this.nextShadeSeq = 1;

    // Motes initialization
    this.motes = [];
    if (scenario && Array.isArray(scenario.motes)) {
      for (const item of scenario.motes) {
        if (Array.isArray(item)) {
          this.motes.push({
            id: `M${this.nextMoteSeq++}`,
            pos: [Number(item[0]), Number(item[1]), Number(item[2])]
          });
        } else if (item && Array.isArray(item.pos)) {
          const id = item.id ? String(item.id) : `M${this.nextMoteSeq++}`;
          this.motes.push({
            id,
            pos: [Number(item.pos[0]), Number(item.pos[1]), Number(item.pos[2])]
          });
        }
      }
    } else if (this.randomMotes) {
      this.spawnInitialMotes(20);
    }

    // Shades initialization
    this.shades = [];
    if (scenario && Array.isArray(scenario.shades)) {
      for (const item of scenario.shades) {
        if (Array.isArray(item)) {
          this.shades.push({
            id: `S${this.nextShadeSeq++}`,
            pos: [Number(item[0]), Number(item[1]), Number(item[2])],
            state: 'chase',
            stunTimer: 0
          });
        } else if (item && Array.isArray(item.pos)) {
          const id = item.id ? String(item.id) : `S${this.nextShadeSeq++}`;
          const numMatch = /^S(\d+)$/.exec(id);
          if (numMatch) {
            this.nextShadeSeq = Math.max(this.nextShadeSeq, Number(numMatch[1]) + 1);
          }
          this.shades.push({
            id,
            pos: [Number(item.pos[0]), Number(item.pos[1]), Number(item.pos[2])],
            state: item.state ? String(item.state) : 'chase',
            stunTimer: item.stunTimer ? Number(item.stunTimer) : 0
          });
        }
      }
    } else if (this.randomShades) {
      this.spawnInitialShades(3);
    }

    // Sticky input state
    this.currInput = {
      move: [0, 0],
      cam_yaw_deg: 0,
      jump: false,
      interact: false,
      pulse: false,
      dash: false
    };
    this.prevInput = {
      jump: false,
      interact: false,
      pulse: false,
      dash: false
    };
  }

  spawnInitialMotes(count) {
    for (let i = 0; i < count; i++) {
      this.spawnSingleRandomMote();
    }
  }

  spawnSingleRandomMote() {
    for (let attempt = 0; attempt < 16; attempt++) {
      const angle = this.rng.range(0, Math.PI * 2);
      const radius = this.rng.range(4.5, 36.0);
      const pos = [round3(Math.cos(angle) * radius), 0, round3(Math.sin(angle) * radius)];
      if (distXZ(pos, this.player.pos) > this.tuning.pickup_radius + 1.5) {
        this.motes.push({
          id: `M${this.nextMoteSeq++}`,
          pos
        });
        return;
      }
    }
  }

  spawnInitialShades(count) {
    for (let i = 0; i < count; i++) {
      const angle = (i * Math.PI * 2) / count + this.rng.range(-0.3, 0.3);
      const radius = this.rng.range(30.0, 38.0);
      const shade = {
        id: `S${this.nextShadeSeq++}`,
        pos: [round3(Math.cos(angle) * radius), 0, round3(Math.sin(angle) * radius)],
        state: 'chase',
        stunTimer: 0
      };
      this.enforceSafeZones(shade);
      this.shades.push(shade);
    }
  }

  /**
   * Push shade outside safe_radius of any lit lantern.
   */
  enforceSafeZones(shade) {
    if (!this.tuning.safe_radius || this.tuning.safe_radius <= 0) return;
    for (const lantern of this.lanterns) {
      if (!lantern.lit) continue;
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
      if (lantern.lit && distXZ(this.player.pos, lantern.pos) <= this.tuning.safe_radius + EPS) {
        return true;
      }
    }
    return false;
  }

  /**
   * Apply frame patch for tick k before advancing to tick k+1.
   */
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
  }

  /**
   * Execute 1 simulation step (from tick k to tick k+1).
   * @param {object|null} [framePatch=null] Input frame matching tick k
   * @returns {Array<object>} Events emitted during this step (all stamped with tick = k+1)
   */
  step(framePatch = null) {
    if (this.state !== 'playing') return [];

    this.applyInputFrame(framePatch);

    // Detect rising edges (false -> true)
    const jumpPressed = !this.prevInput.jump && this.currInput.jump;
    const interactPressed = !this.prevInput.interact && this.currInput.interact;
    const pulsePressed = !this.prevInput.pulse && this.currInput.pulse;

    this.prevInput.jump = this.currInput.jump;
    this.prevInput.interact = this.currInput.interact;
    this.prevInput.pulse = this.currInput.pulse;
    this.prevInput.dash = this.currInput.dash;

    const currentTick = this.tick + 1;
    this.tick = currentTick;
    this.sim_tick = currentTick;
    this.time_left_s = Math.max(0, this.initialDuration - currentTick / TICK_RATE);

    const events = [];
    const emit = (name, data) => {
      events.push({
        type: 'event',
        tick: currentTick,
        name,
        data
      });
    };

    // 1. Update player timers
    if (this.player.invulnTimer > 0) {
      this.player.invulnTimer = Math.max(0, this.player.invulnTimer - DT);
    }
    if (this.player.pulseCooldown > 0) {
      this.player.pulseCooldown = Math.max(0, this.player.pulseCooldown - DT);
    }

    // 2. Player movement
    let [mx, mz] = this.currInput.move;
    const moveLen = Math.hypot(mx, mz);
    if (moveLen > 1) {
      mx /= moveLen;
      mz /= moveLen;
    }
    const theta = (this.currInput.cam_yaw_deg * Math.PI) / 180;
    const wx = mx * Math.cos(theta) + mz * Math.sin(theta);
    const wz = -mx * Math.sin(theta) + mz * Math.cos(theta);

    if (moveLen > 1e-4) {
      this.player.facingYaw = Math.atan2(wx, wz);
    }

    this.player.pos[0] += wx * this.tuning.player_speed * DT;
    this.player.pos[2] += wz * this.tuning.player_speed * DT;

    // Jump vertical movement
    if (jumpPressed && this.player.pos[1] <= 0) {
      this.player.vy = 6.5;
    }
    if (this.player.pos[1] > 0 || this.player.vy > 0) {
      this.player.pos[1] += this.player.vy * DT;
      this.player.vy -= 18.0 * DT;
      if (this.player.pos[1] <= 0) {
        this.player.pos[1] = 0;
        this.player.vy = 0;
      }
    }

    // 3. Auto-pickup motes (within pickup_radius)
    for (let i = 0; i < this.motes.length; ) {
      if (this.player.carried >= this.tuning.carry_capacity) break;
      const mote = this.motes[i];
      if (distXZ(this.player.pos, mote.pos) <= this.tuning.pickup_radius + EPS) {
        this.motes.splice(i, 1);
        this.player.carried += 1;
        this.score += this.tuning.score.per_mote;
        emit('mote_picked', { carried: this.player.carried });
      } else {
        i++;
      }
    }

    // 4. Deposit into nearest unlit lantern within interact_radius
    if (interactPressed && this.player.carried > 0) {
      let bestLantern = null;
      let bestDist = Infinity;
      for (const lantern of this.lanterns) {
        if (lantern.lit) continue;
        const d = distXZ(this.player.pos, lantern.pos);
        if (d <= this.tuning.interact_radius + EPS && d < bestDist) {
          bestDist = d;
          bestLantern = lantern;
        }
      }
      if (bestLantern) {
        const needed = Math.max(0, this.tuning.lantern_cost - bestLantern.deposited);
        const amount = Math.min(this.player.carried, needed);
        if (amount > 0) {
          this.player.carried -= amount;
          bestLantern.deposited += amount;
          emit('deposit', {
            lantern_id: bestLantern.id,
            amount,
            deposited: bestLantern.deposited
          });
          if (bestLantern.deposited >= this.tuning.lantern_cost && !bestLantern.lit) {
            bestLantern.lit = true;
            this.score += this.tuning.score.per_lantern;
            emit('lantern_lit', {
              lantern_id: bestLantern.id
            });
            // Push any shades out of the newly lit lantern's safe zone
            for (const shade of this.shades) {
              this.enforceSafeZones(shade);
            }
          }
        }
      }
    }

    // 5. Pulse to stun & push shades
    if (
      pulsePressed &&
      this.player.carried >= this.tuning.pulse_cost &&
      this.player.pulseCooldown <= EPS
    ) {
      this.player.carried -= this.tuning.pulse_cost;
      this.player.pulseCooldown = this.tuning.pulse_cooldown_s;
      const stunned_ids = [];

      for (const shade of this.shades) {
        const d = distXZ(this.player.pos, shade.pos);
        if (d <= this.tuning.pulse_radius + EPS) {
          shade.state = 'stunned';
          shade.stunTimer = this.tuning.pulse_stun_s;

          let ux = 0;
          let uz = 1;
          if (d > 1e-6) {
            ux = (shade.pos[0] - this.player.pos[0]) / d;
            uz = (shade.pos[2] - this.player.pos[2]) / d;
          }
          shade.pos[0] += ux * this.tuning.pulse_push_m;
          shade.pos[2] += uz * this.tuning.pulse_push_m;
          this.enforceSafeZones(shade);

          stunned_ids.push(shade.id);
          this.score += this.tuning.score.per_stun;
        }
      }

      emit('pulse', { stunned_ids });
    }

    // 6. Shades update & collision with player
    const playerInSafeZone = this.isPlayerInLitSafeZone();

    for (const shade of this.shades) {
      if (shade.stunTimer > 0) {
        shade.stunTimer = Math.max(0, shade.stunTimer - DT);
        if (shade.stunTimer <= EPS) {
          shade.stunTimer = 0;
          shade.state = 'chase';
        } else {
          shade.state = 'stunned';
        }
      }

      if (shade.state !== 'stunned') {
        shade.state = 'chase';
        const dx = this.player.pos[0] - shade.pos[0];
        const dz = this.player.pos[2] - shade.pos[2];
        const d = Math.hypot(dx, dz);
        if (d > 1e-6) {
          const stepDist = Math.min(d, this.tuning.shade_speed * DT);
          shade.pos[0] += (dx / d) * stepDist;
          shade.pos[2] += (dz / d) * stepDist;
        }
        this.enforceSafeZones(shade);

        // Check hit on player
        if (
          !playerInSafeZone &&
          this.player.invulnTimer <= EPS &&
          distXZ(this.player.pos, shade.pos) <= this.tuning.shade_hit_radius + EPS
        ) {
          this.player.flames = Math.max(0, this.player.flames - 1);
          const dropped = Math.floor(this.player.carried * (this.tuning.hit_drop_ratio || 0));
          this.player.carried = Math.max(0, this.player.carried - dropped);
          this.player.invulnTimer = this.tuning.invuln_s;

          emit('player_hit', {
            by: 'shade',
            flames: this.player.flames,
            dropped
          });
        }
      } else {
        this.enforceSafeZones(shade);
      }
    }

    // 7. Dynamic spawns when random flags are enabled
    if (this.randomMotes && currentTick % 180 === 0 && this.motes.length < 15) {
      this.spawnSingleRandomMote();
    }
    if (this.randomShades && currentTick % 2700 === 0 && this.shades.length < 6) {
      const angle = this.rng.range(0, Math.PI * 2);
      const radius = 36.0;
      const newShade = {
        id: `S${this.nextShadeSeq++}`,
        pos: [round3(Math.cos(angle) * radius), 0, round3(Math.sin(angle) * radius)],
        state: 'chase',
        stunTimer: 0
      };
      this.enforceSafeZones(newShade);
      this.shades.push(newShade);
      emit('shade_spawned', { id: newShade.id });
    }

    // 8. Check win / lose conditions
    const allLit = this.lanterns.length > 0 && this.lanterns.every((l) => l.lit);
    if (allLit) {
      this.state = 'won';
      const timeBonus = Math.round(this.time_left_s * (this.tuning.score.per_second_left || 0));
      const flameBonus = this.player.flames * (this.tuning.score.per_flame_left || 0);
      this.score += timeBonus + flameBonus;
      emit('game_over', { result: 'won', reason: 'all_lit' });
    } else if (this.player.flames <= 0) {
      this.state = 'lost';
      emit('game_over', { result: 'lost', reason: 'no_flames' });
    } else if (this.time_left_s <= EPS) {
      this.time_left_s = 0;
      this.state = 'lost';
      emit('game_over', { result: 'lost', reason: 'dawn' });
    }

    return events;
  }

  /**
   * Build snapshot JSON object at current tick according to Test Contract v1.0 Section E.
   */
  getSnapshot() {
    return {
      type: 'snapshot',
      tick: this.tick,
      sim_tick: this.sim_tick,
      state: this.state,
      time_left_s: round3(this.time_left_s),
      score: this.score,
      player: {
        pos: roundVec3(this.player.pos),
        flames: this.player.flames,
        carried: this.player.carried
      },
      lanterns: this.lanterns.map((l) => ({
        id: l.id,
        pos: roundVec3(l.pos),
        lit: l.lit,
        deposited: l.deposited
      })),
      shades: this.shades.map((s) => ({
        id: s.id,
        pos: roundVec3(s.pos),
        state: s.state
      })),
      motes_active: this.motes.length,
      motes: this.motes.map((m) => ({
        id: m.id,
        pos: roundVec3(m.pos)
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
