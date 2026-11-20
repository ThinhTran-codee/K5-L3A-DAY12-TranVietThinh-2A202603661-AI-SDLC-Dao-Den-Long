/**
 * Single Source of Truth for Contract & Tuning configuration.
 * Verified against game.contract.json by automated tests.
 */
export const CONTRACT = {
  contract_version: '1.0',
  team: 'K5-L3-Dao-Den-Long',
  build_cmd: 'npm install',
  run_cmd: 'npm start',
  headless_cmd: 'node src/headless.js',
  tuning: {
    player_speed: 8,
    carry_capacity: 5,
    lantern_cost: 3,
    lantern_count_night1: 5,
    pickup_radius: 2,
    interact_radius: 3,
    pulse_cost: 1,
    pulse_radius: 6,
    night1_duration_s: 300,
    flames: 3,
    invuln_s: 1.5,
    hit_drop_ratio: 0,
    pulse_stun_s: 3,
    pulse_push_m: 4,
    pulse_cooldown_s: 1,
    safe_radius: 5,
    shade_speed: 4.5,
    shade_hit_radius: 1.2,
    fall_enabled: false,
    score: {
      per_mote: 10,
      per_lantern: 100,
      per_stun: 25,
      per_second_left: 2,
      per_flame_left: 50
    }
  }
};

export const DEFAULT_LANTERNS_NIGHT1 = [
  { id: 'L1', pos: [0, 0, 25], lit: false, deposited: 0 },
  { id: 'L2', pos: [23.776, 0, 7.725], lit: false, deposited: 0 },
  { id: 'L3', pos: [14.695, 0, -20.225], lit: false, deposited: 0 },
  { id: 'L4', pos: [-14.695, 0, -20.225], lit: false, deposited: 0 },
  { id: 'L5', pos: [-23.776, 0, 7.725], lit: false, deposited: 0 }
];
