/**
 * Single Source of Truth for Test Contract v1.2 & 3-Night Map Configurations.
 * Verified against game.contract.json by automated tests.
 */
export const CONTRACT = {
  contract_version: '1.2',
  team: '2A202603661-TranVietThinh',
  build_cmd: 'npm install',
  run_cmd: 'npm start',
  headless_cmd: 'node src/headless.js',
  tuning: {
    player_speed: 6,
    dash_speed: 14,
    dash_duration_s: 0.2,
    dash_cooldown_s: 1.5,
    carry_capacity: 10,
    capacity_max: 20,
    lantern_cost: 10,
    relight_cost: 5,
    lantern_count_night1: 5,
    pickup_radius: 1,
    interact_radius: 2,
    pulse_cost: 3,
    pulse_radius: 5,
    fuel_max: 100,
    fuel_decay_per_s: 1.0,
    fuel_per_mote: 10,
    drain_per_s: 5,
    low_fuel_threshold: 30,
    win_ratio: 0.6,
    night1_duration_s: 240,
    night2_duration_s: 270,
    night3_duration_s: 300,
    flames: 3,
    invuln_s: 1.5,
    hit_drop_ratio: 0.5,
    pulse_stun_s: 2,
    pulse_push_m: 4,
    pulse_cooldown_s: 3,
    safe_radius: 6,
    shade_speed: 4,
    shade_hit_radius: 1,
    fall_enabled: true,
    score: {
      per_mote: 5,
      per_lantern: 100,
      per_stun: 5,
      per_second_left: 0,
      per_flame_left: 50
    }
  }
};

export function round1(n) {
  const r = Math.round((Number(n) + Number.EPSILON) * 10) / 10;
  return Object.is(r, -0) ? 0 : r;
}

export function round3(n) {
  const r = Math.round((Number(n) + Number.EPSILON) * 1000) / 1000;
  return Object.is(r, -0) ? 0 : r;
}

/**
 * Angle measured from +X axis counter-clockwise in XZ plane:
 * x = cx + R * cos(deg), z = cz + R * sin(deg)
 */
export function polarPoint(cx, cz, radius, deg, y = 0) {
  const rad = (deg * Math.PI) / 180;
  return [round3(cx + radius * Math.cos(rad)), round3(y), round3(cz + radius * Math.sin(rad))];
}

function buildRingPoints(cx, cz, radius, count, startDeg = 0, stepDeg = 360 / count, y = 0) {
  const pts = [];
  for (let i = 0; i < count; i++) {
    pts.push(polarPoint(cx, cz, radius, startDeg + i * stepDeg, y));
  }
  return pts;
}

// Night 1 — Đảo Bến
export const DEFAULT_LANTERNS_NIGHT1 = [
  { id: 'L1', pos: [0, 0, 25], lit: false, deposited: 0 },
  { id: 'L2', pos: [23.8, 0, 7.7], lit: false, deposited: 0 },
  { id: 'L3', pos: [14.7, 0, -20.2], lit: false, deposited: 0 },
  { id: 'L4', pos: [-14.7, 0, -20.2], lit: false, deposited: 0 },
  { id: 'L5', pos: [-23.8, 0, 7.7], lit: false, deposited: 0 }
];

// Night 2 — Đảo Cau
export const DEFAULT_LANTERNS_NIGHT2 = [
  { id: 'L1', pos: [0, 0, 20], lit: false, deposited: 0 },
  { id: 'L2', pos: [17, 0, -10], lit: false, deposited: 0 },
  { id: 'L3', pos: [-17, 0, -10], lit: false, deposited: 0 },
  { id: 'L4', pos: [70, 0, 20], lit: false, deposited: 0 },
  { id: 'L5', pos: [87, 0, -10], lit: false, deposited: 0 },
  { id: 'L6', pos: [53, 0, -10], lit: false, deposited: 0 }
];

// Night 3 — Đảo Chuông
export const DEFAULT_LANTERNS_NIGHT3 = [
  { id: 'L1', pos: [0, 6, 6], lit: false, deposited: 0 },
  { id: 'L2', pos: [18, 3, 10], lit: false, deposited: 0 },
  { id: 'L3', pos: [-18, 3, 10], lit: false, deposited: 0 },
  { id: 'L4', pos: [35, 0, -10], lit: false, deposited: 0 },
  { id: 'L5', pos: [-35, 0, -10], lit: false, deposited: 0 },
  { id: 'L6', pos: [20, 0, -35], lit: false, deposited: 0 },
  { id: 'L7', pos: [-20, 0, -35], lit: false, deposited: 0 }
];

export const NIGHT_CONFIGS = {
  1: {
    night: 1,
    name: 'Đêm 1 — Đảo Bến',
    elderIntro:
      'Ông Đăng: "Đèn Lồng nay sẽ cạn dần dầu theo thời gian và bị Bóng Mực hút dầu khi yếu (< 30)! Hãy giữ ít nhất 3/5 ngọn đèn sáng cho tới lúc Bình Minh (240s) nhé Mây!"',
    durationKey: 'night1_duration_s',
    shadeSpeed: 4.0,
    shadeFirstSpawnTick: 300,
    shadeIntervalTicks: 480,
    maxShades: 6,
    lanterns: DEFAULT_LANTERNS_NIGHT1,
    moteSpawnPoints: [
      ...buildRingPoints(0, 0, 12, 8, 0, 45, 0),
      ...buildRingPoints(0, 0, 33, 16, 0, 22.5, 0)
    ],
    shadeSpawnPoints: buildRingPoints(0, 0, 37, 12, 15, 30, 0),
    jumpPads: [],
    charms: [],
    hasDrifters: false,
    hasWind: false
  },
  2: {
    night: 2,
    name: 'Đêm 2 — Đảo Cau',
    elderIntro:
      'Ông Đăng: "Trên hai hòn Đảo Cau, cháu phải duy trì ít nhất 4/6 ngọn đèn sáng tới Bình Minh (270s). Đèn đã từng sáng nếu tắt chỉ tốn 5 đom đóm để thắp lại, và mỗi lần thắp đèn sức chứa của cháu sẽ tăng thêm 2!"',
    durationKey: 'night2_duration_s',
    shadeSpeed: 4.0,
    shadeFirstSpawnTick: 300,
    shadeIntervalTicks: 420,
    maxShades: 8,
    lanterns: DEFAULT_LANTERNS_NIGHT2,
    moteSpawnPoints: [
      ...buildRingPoints(0, 0, 10, 4, 0, 90, 0),
      ...buildRingPoints(0, 0, 22, 8, 0, 45, 0),
      ...buildRingPoints(70, 0, 10, 4, 0, 90, 0),
      ...buildRingPoints(70, 0, 22, 8, 0, 45, 0)
    ],
    shadeSpawnPoints: [
      ...buildRingPoints(0, 0, 26, 8, 22.5, 45, 0),
      ...buildRingPoints(70, 0, 26, 8, 22.5, 45, 0)
    ],
    jumpPads: [
      { id: 'JP1', pos: [20, 0, 18], radius: 1.0, vy: 14.0, vh: 24.0, target: [70, 0, 0] },
      { id: 'JP2', pos: [50, 0, -18], radius: 1.0, vy: 14.0, vh: 24.0, target: [0, 0, 0] }
    ],
    charms: [{ id: 'C1', pos: [35, 0, 0] }],
    hasDrifters: true,
    hasWind: false
  },
  3: {
    night: 3,
    name: 'Đêm 3 — Đảo Chuông',
    elderIntro:
      'Ông Đăng: "Đêm cuối trên Đảo Chuông kéo dài 300 giây! Hãy châm dầu kịp thời trước khi đèn giảm dưới 30, dùng Tỏa Sáng đánh bật Bóng Mực đang hút dầu (+15 điểm) và giữ ít nhất 5/7 ngọn đèn sáng đón Bình Minh!"',
    durationKey: 'night3_duration_s',
    shadeSpeed: 4.5,
    shadeFirstSpawnTick: 300,
    shadeIntervalTicks: 360,
    maxShades: 10,
    lanterns: DEFAULT_LANTERNS_NIGHT3,
    moteSpawnPoints: [
      ...buildRingPoints(0, 0, 34, 18, 0, 20, 0),
      ...buildRingPoints(0, 0, 18, 8, 20, 20, 3),
      ...buildRingPoints(0, 0, 5, 4, 45, 90, 6)
    ],
    shadeSpawnPoints: buildRingPoints(0, 0, 43, 16, 0, 22.5, 0),
    jumpPads: [
      { id: 'JP1', pos: [0, 3, 13], radius: 1.0, vy: 12.0, vh: 8.0, dir: [0, -1] }
    ],
    charms: [
      { id: 'C1', pos: [30, 0, 25] },
      { id: 'C2', pos: [-30, 0, 25] }
    ],
    hasDrifters: true,
    hasWind: true
  }
};

// Standardized Color Palette (TICKET-02 Part 3 & TICKET-03 Part 6 Colorblind Mode)
export const PALETTE = {
  nightSky: 0x0e1430,
  fog: 0x1b2350,
  grass: 0x2f5d50,
  sand: 0xc9b48a,
  wood: 0x6b4a2f,
  cloudSea: 0x12384a,
  lanternLit: 0xffb347,
  lanternCore: 0xffe9b0,
  lanternOff: 0x5b5f6e,
  moteCore: 0xfff6c2,
  moteHalo: 0xffe58a,
  shadeBody: 0x120a1a,
  shadeRim: 0x7a3cff,
  shadeRimColorblind: 0x00b3ff,
  shadeStunned: 0x3a3450,
  mayTunic: 0xe8e2d0,
  mayScarfAndCharm: 0xc8102e,
  goldBorderAndScore: 0xf2c14e,
  drifter: 0x8fa3b8,
  uiDanger: 0xff5a5f,
  uiDangerColorblind: 0xffffff,
  uiText: 0xf5f1e6
};
