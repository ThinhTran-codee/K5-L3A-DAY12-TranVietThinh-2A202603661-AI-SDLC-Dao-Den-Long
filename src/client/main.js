import * as THREE from 'three';
import { GameSimulation, DT, distXZ } from '../core/simulation.js';
import { CONTRACT, NIGHT_CONFIGS, PALETTE } from '../core/config.js';
import { SoundEffects } from './sound.js';

const SETTINGS_KEY = 'dao_den_long_settings_v11';
const sfx = new SoundEffects();

// Load persistent settings from localStorage
let userSettings = { volume: 0.7, mouseSens: 0.35 };
try {
  const saved = localStorage.getItem(SETTINGS_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    if (typeof parsed.volume === 'number') userSettings.volume = parsed.volume;
    if (typeof parsed.mouseSens === 'number') userSettings.mouseSens = parsed.mouseSens;
  }
} catch {
  // Default settings
}
sfx.setVolume(userSettings.volume);

// Build 10-slot Firefly Bar DOM elements
const moteSlotsContainer = document.getElementById('hud-mote-slots');
const moteSlotEls = [];
for (let i = 0; i < 10; i++) {
  const slot = document.createElement('div');
  slot.className = 'mote-slot';
  moteSlotsContainer.appendChild(slot);
  moteSlotEls.push(slot);
}

// Renderer & Scene setup with Standardized Color Palette (TICKET-02 Part 3)
const canvas = document.getElementById('game-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(PALETTE.nightSky);
scene.fog = new THREE.FogExp2(PALETTE.fog, 0.014);

const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 260);

// Ambient light formula required by TICKET-02 Part 3:
// intensity = 0.15 + 0.55 * (litLanterns / totalLanterns)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
scene.add(ambientLight);

const hemiLight = new THREE.HemisphereLight(0x4b5d96, PALETTE.nightSky, 0.35);
scene.add(hemiLight);

const moonLight = new THREE.DirectionalLight(0xaab8d8, 0.45);
moonLight.position.set(-30, 55, -25);
moonLight.castShadow = true;
moonLight.shadow.mapSize.set(1024, 1024);
scene.add(moonLight);

// Scene Groups
const envGroup = new THREE.Group();
scene.add(envGroup);

const guideGroup = new THREE.Group();
scene.add(guideGroup);

const windLeavesGroup = new THREE.Group();
scene.add(windLeavesGroup);

let turtleRune = null;

// Build 3D Island Environment for Night 1, 2, or 3
function buildNightEnvironment(night) {
  while (envGroup.children.length > 0) {
    envGroup.remove(envGroup.children[0]);
  }
  turtleRune = null;

  const grassMat = new THREE.MeshStandardMaterial({ color: PALETTE.grass, roughness: 0.85 });
  const sandMat = new THREE.MeshStandardMaterial({ color: PALETTE.sand, roughness: 0.9 });
  const woodMat = new THREE.MeshStandardMaterial({ color: PALETTE.wood, roughness: 0.85 });
  const cloudMat = new THREE.MeshStandardMaterial({
    color: PALETTE.cloudSea,
    roughness: 1,
    transparent: true,
    opacity: 0.78
  });

  // Cloud Sea below islands (Y = -10)
  const seaPlane = new THREE.Mesh(new THREE.PlaneGeometry(320, 320), cloudMat);
  seaPlane.rotation.x = -Math.PI / 2;
  seaPlane.position.set(25, -10, 0);
  envGroup.add(seaPlane);

  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    const r = 54 + (i % 4) * 12;
    const cx = night === 2 ? 35 + Math.cos(a) * (r + 25) : Math.cos(a) * r;
    const cz = Math.sin(a) * r;
    const puff = new THREE.Mesh(new THREE.SphereGeometry(8 + (i % 3) * 3, 12, 10), cloudMat);
    puff.position.set(cx, -7.5, cz);
    puff.scale.y = 0.4;
    envGroup.add(puff);
  }

  if (night === 1) {
    // Night 1 — Đảo Bến: Circular island radius 40m
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(40.4, 34, 6.2, 48), sandMat);
    rim.position.y = -3.15;
    envGroup.add(rim);

    const top = new THREE.Mesh(new THREE.CylinderGeometry(39.6, 39.6, 0.4, 48), grassMat);
    top.position.y = -0.2;
    top.receiveShadow = true;
    envGroup.add(top);
  } else if (night === 2) {
    // Night 2 — Đảo Cau: Two islands radius 28m at (0,0,0) and (70,0,0) + Bamboo Bridge x∈[26,44], z∈[-2,2]
    for (const cx of [0, 70]) {
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(28.3, 23, 6.2, 40), sandMat);
      rim.position.set(cx, -3.15, 0);
      envGroup.add(rim);

      const top = new THREE.Mesh(new THREE.CylinderGeometry(27.7, 27.7, 0.4, 40), grassMat);
      top.position.set(cx, -0.2, 0);
      top.receiveShadow = true;
      envGroup.add(top);
    }

    // Bamboo Bridge x ∈ [26, 44] (length 18m), z ∈ [-2, 2] (width 4m), no railings
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(18, 0.35, 4), woodMat);
    bridge.position.set(35, -0.175, 0);
    bridge.receiveShadow = true;
    envGroup.add(bridge);
  } else if (night === 3) {
    // Night 3 — Đảo Chuông: Radius 45m, 3 tiers (Y=0, Y=3, Y=6), 2 ramps at 30° & 150°, Bell Tower at center
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(45.3, 38, 6.2, 56), sandMat);
    rim.position.y = -3.15;
    envGroup.add(rim);

    const tier0 = new THREE.Mesh(new THREE.CylinderGeometry(44.8, 44.8, 0.4, 56), grassMat);
    tier0.position.y = -0.2;
    tier0.receiveShadow = true;
    envGroup.add(tier0);

    // Tier 1 (Y = 3): Half-annulus r ∈ [12, 24] in half z > 0 (theta from 0 to PI in XZ plane)
    const shapeT1 = new THREE.Shape();
    shapeT1.absarc(0, 0, 24, 0, Math.PI, false);
    shapeT1.lineTo(-12, 0);
    shapeT1.absarc(0, 0, 12, Math.PI, 0, true);
    shapeT1.closePath();

    const extrudeT1 = new THREE.ExtrudeGeometry(shapeT1, { depth: 3.0, bevelEnabled: false, curveSegments: 32 });
    // Rotate so (X, Y_shape) maps to (X, +Z) and extrusion depth goes along +Y from 0 to 3
    extrudeT1.rotateX(Math.PI / 2);
    const tier1Mesh = new THREE.Mesh(extrudeT1, grassMat);
    tier1Mesh.position.y = 3.0;
    tier1Mesh.receiveShadow = true;
    envGroup.add(tier1Mesh);

    // 2 Straight Ramps (width 3m, r = 24..30 at 30° and 150°, connecting Y=0 at r=30 to Y=3 at r=24)
    const rampLen = Math.hypot(6.0, 3.0);
    const rampPitch = Math.atan2(3.0, 6.0);
    for (const deg of [30, 150]) {
      const rad = (deg * Math.PI) / 180;
      const midR = 27.0;
      const rampMesh = new THREE.Mesh(new THREE.BoxGeometry(rampLen, 0.3, 3.0), woodMat);
      rampMesh.position.set(Math.cos(rad) * midR, 1.5 - 0.15, Math.sin(rad) * midR);
      // Orient box local +X along radial outward direction (cos(rad), 0, sin(rad))
      rampMesh.rotation.y = -rad;
      rampMesh.rotation.z = -rampPitch;
      rampMesh.receiveShadow = true;
      envGroup.add(rampMesh);
    }

    // Tier 2 (Y = 6): Disc radius 8m at center
    const tier2 = new THREE.Mesh(new THREE.CylinderGeometry(8.0, 8.0, 6.0, 36), sandMat);
    tier2.position.y = 3.0;
    tier2.receiveShadow = true;
    envGroup.add(tier2);

    const tier2Top = new THREE.Mesh(new THREE.CylinderGeometry(8.0, 8.0, 0.2, 36), grassMat);
    tier2Top.position.y = 5.95;
    tier2Top.receiveShadow = true;
    envGroup.add(tier2Top);

    // Bell Tower at center of Tier 2: cylinder radius 2m, height 8m (Y = 6..14)
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(1.9, 2.0, 8.0, 24), woodMat);
    tower.position.y = 10.0;
    tower.castShadow = true;
    envGroup.add(tower);

    const towerRoof = new THREE.Mesh(
      new THREE.ConeGeometry(2.8, 2.2, 16),
      new THREE.MeshStandardMaterial({ color: PALETTE.mayScarfAndCharm, roughness: 0.7 })
    );
    towerRoof.position.y = 15.0;
    envGroup.add(towerRoof);

    const bell = new THREE.Mesh(
      new THREE.CylinderGeometry(0.45, 0.75, 1.1, 16),
      new THREE.MeshStandardMaterial({ color: PALETTE.goldBorderAndScore, metalness: 0.7, roughness: 0.3 })
    );
    bell.position.set(0, 12.6, 2.1);
    envGroup.add(bell);
  }

  // Render Jump Pads for current Night
  const nCfg = NIGHT_CONFIGS[night];
  for (const pad of nCfg.jumpPads) {
    const padGroup = new THREE.Group();
    padGroup.position.set(pad.pos[0], pad.pos[1], pad.pos[2]);

    const padBase = new THREE.Mesh(
      new THREE.CylinderGeometry(1.0, 1.15, 0.22, 24),
      new THREE.MeshStandardMaterial({ color: PALETTE.wood })
    );
    padBase.position.y = 0.11;
    padGroup.add(padBase);

    const padGlow = new THREE.Mesh(
      new THREE.CylinderGeometry(0.85, 0.85, 0.26, 24),
      new THREE.MeshBasicMaterial({ color: PALETTE.goldBorderAndScore })
    );
    padGlow.position.y = 0.12;
    padGroup.add(padGlow);

    envGroup.add(padGroup);
  }

  // Creative NPC Companion: Cụ Rùa Đá Giữ Bến at [3.8, 0, 3.8] (or on Tier 0)
  const turtleGroup = new THREE.Group();
  const shell = new THREE.Mesh(
    new THREE.SphereGeometry(1.0, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.55),
    new THREE.MeshStandardMaterial({ color: PALETTE.grass, roughness: 0.65 })
  );
  shell.scale.set(1.2, 0.85, 1.0);
  turtleGroup.add(shell);

  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.35, 12, 10),
    new THREE.MeshStandardMaterial({ color: PALETTE.sand })
  );
  head.position.set(-1.1, 0.3, 0);
  turtleGroup.add(head);

  turtleRune = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.22, 0),
    new THREE.MeshBasicMaterial({ color: PALETTE.goldBorderAndScore })
  );
  turtleRune.position.set(0, 1.15, 0);
  turtleGroup.add(turtleRune);

  turtleGroup.position.set(3.8, night === 3 ? 6.0 : 0, 3.8);
  envGroup.add(turtleGroup);
}

// Build Mây Character using Standardized Palette (Áo Mây #E8E2D0, Khăn Mây #C8102E, Nón lá + Đèn lồng nhỏ)
function createMayCharacter() {
  const group = new THREE.Group();

  const skinMat = new THREE.MeshStandardMaterial({ color: 0xfde68a, roughness: 0.6 });
  const tunicMat = new THREE.MeshStandardMaterial({ color: PALETTE.mayTunic, roughness: 0.65 });
  const scarfMat = new THREE.MeshStandardMaterial({ color: PALETTE.mayScarfAndCharm, roughness: 0.55 });
  const shortsMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.75 });
  const goldMat = new THREE.MeshBasicMaterial({ color: PALETTE.goldBorderAndScore });

  // Articulated Legs
  const leftLeg = new THREE.Group();
  leftLeg.position.set(-0.2, 0.55, 0);
  const lShort = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.13, 0.32, 12), shortsMat);
  lShort.position.y = -0.12;
  const lCalf = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.28, 12), skinMat);
  lCalf.position.y = -0.38;
  const lSandal = new THREE.Mesh(
    new THREE.BoxGeometry(0.22, 0.07, 0.32),
    new THREE.MeshStandardMaterial({ color: PALETTE.wood })
  );
  lSandal.position.set(0, -0.52, 0.04);
  leftLeg.add(lShort, lCalf, lSandal);
  group.add(leftLeg);

  const rightLeg = leftLeg.clone();
  rightLeg.position.set(0.2, 0.55, 0);
  group.add(rightLeg);

  // Torso (Tunic #E8E2D0 + Crimson Scarf/Sash #C8102E)
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.37, 0.68, 16), tunicMat);
  torso.position.y = 0.88;
  torso.castShadow = true;
  group.add(torso);

  const scarf = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.39, 0.18, 16), scarfMat);
  scarf.position.y = 1.15;
  group.add(scarf);

  const sash = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.12, 16), scarfMat);
  sash.position.y = 0.58;
  group.add(sash);

  // Articulated Arms
  const leftArm = new THREE.Group();
  leftArm.position.set(-0.42, 1.12, 0);
  const lSleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.11, 0.22, 10), tunicMat);
  lSleeve.position.y = -0.06;
  const lForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.32, 10), skinMat);
  lForearm.position.y = -0.26;
  leftArm.add(lSleeve, lForearm);
  group.add(leftArm);

  const rightArm = leftArm.clone();
  rightArm.position.set(0.42, 1.12, 0);
  group.add(rightArm);

  // Head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.31, 16, 16), skinMat);
  head.position.y = 1.46;
  group.add(head);

  // Straw-golden Nón Lá with Crimson Ribbon (#C8102E)
  const hatGroup = new THREE.Group();
  hatGroup.position.y = 1.76;
  hatGroup.rotation.x = -0.06;

  const hatCone = new THREE.Mesh(
    new THREE.ConeGeometry(0.82, 0.44, 28),
    new THREE.MeshStandardMaterial({ color: PALETTE.sand, roughness: 0.6 })
  );
  hatGroup.add(hatCone);

  const ribbon = new THREE.Mesh(
    new THREE.CylinderGeometry(0.42, 0.56, 0.09, 24, 1, true),
    scarfMat
  );
  ribbon.position.y = -0.06;
  hatGroup.add(ribbon);
  group.add(hatGroup);

  // Mini Lantern hanging from front brim of Nón lá
  const cord = new THREE.Mesh(
    new THREE.CylinderGeometry(0.016, 0.016, 0.26, 6),
    new THREE.MeshBasicMaterial({ color: PALETTE.wood })
  );
  cord.position.set(0, 1.45, 0.72);
  group.add(cord);

  const miniLantern = new THREE.Mesh(
    new THREE.SphereGeometry(0.13, 12, 12),
    new THREE.MeshBasicMaterial({ color: PALETTE.lanternCore })
  );
  miniLantern.position.set(0, 1.3, 0.72);
  group.add(miniLantern);

  const playerLight = new THREE.PointLight(PALETTE.lanternLit, 2.4, 16, 1.5);
  playerLight.position.set(0, 1.4, 0.72);
  playerLight.castShadow = true;
  group.add(playerLight);

  const orbitGroup = new THREE.Group();
  orbitGroup.position.y = 1.1;
  group.add(orbitGroup);

  return { group, miniLantern, playerLight, orbitGroup, leftArm, rightArm, leftLeg, rightLeg, goldMat };
}

const mayMesh = createMayCharacter();
scene.add(mayMesh.group);

// Build Great Lantern Mesh with Standardized Palette
function createLanternMesh(lanternData) {
  const group = new THREE.Group();
  group.position.set(lanternData.pos[0], lanternData.pos[1], lanternData.pos[2]);

  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(1.05, 1.3, 0.6, 12),
    new THREE.MeshStandardMaterial({ color: PALETTE.lanternOff, roughness: 0.85 })
  );
  base.position.y = 0.3;
  group.add(base);

  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.22, 0.28, 3.2, 10),
    new THREE.MeshStandardMaterial({ color: PALETTE.wood, roughness: 0.8 })
  );
  pole.position.y = 2.1;
  group.add(pole);

  const coreMat = new THREE.MeshStandardMaterial({
    color: PALETTE.lanternOff,
    emissive: PALETTE.lanternOff,
    emissiveIntensity: 0.2,
    roughness: 0.35
  });
  const core = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.5, 1.1, 8), coreMat);
  core.position.y = 4.0;
  group.add(core);

  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(1.15, 0.65, 8),
    new THREE.MeshStandardMaterial({ color: PALETTE.wood, roughness: 0.7 })
  );
  roof.position.y = 4.85;
  group.add(roof);

  const light = new THREE.PointLight(PALETTE.lanternLit, 0, 28, 1.35);
  light.position.y = 4.0;
  group.add(light);

  // Safe radius ring (6.0m in Phase 2)
  const ringGeo = new THREE.RingGeometry(
    CONTRACT.tuning.safe_radius - 0.14,
    CONTRACT.tuning.safe_radius,
    48
  );
  ringGeo.rotateX(-Math.PI / 2);
  const ringMat = new THREE.MeshBasicMaterial({
    color: PALETTE.lanternLit,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.1
  });
  const safeRing = new THREE.Mesh(ringGeo, ringMat);
  safeRing.position.y = 0.06;
  group.add(safeRing);

  scene.add(group);
  return { group, core, coreMat, light, safeRing, ringMat };
}

// Visual Entity Maps
const lanternVisuals = new Map();
const moteVisuals = new Map();
const shadeVisuals = new Map();
const drifterVisuals = new Map();
const charmVisuals = new Map();
const activePulses = [];
const guidingRibbonParticles = [];

// Creative Guiding Trail (Phím G)
function triggerGuideTrail(sim) {
  sfx.playChimeGuide();
  let nearest = null;
  let bestD = Infinity;
  for (const l of sim.lanterns) {
    if (l.lit) continue;
    const d = distXZ(sim.player.pos, l.pos);
    if (d < bestD) {
      bestD = d;
      nearest = l;
    }
  }
  if (!nearest) return;

  while (guideGroup.children.length > 0) {
    guideGroup.remove(guideGroup.children[0]);
  }
  guidingRibbonParticles.length = 0;

  const steps = 18;
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const px = sim.player.pos[0] + (nearest.pos[0] - sim.player.pos[0]) * t;
    const pz = sim.player.pos[2] + (nearest.pos[2] - sim.player.pos[2]) * t;
    const py =
      sim.player.pos[1] +
      (nearest.pos[1] - sim.player.pos[1]) * t +
      0.6 +
      Math.sin(t * Math.PI) * 1.6;

    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(0.14, 8, 8),
      new THREE.MeshBasicMaterial({ color: PALETTE.goldBorderAndScore, transparent: true, opacity: 0.95 })
    );
    orb.position.set(px, py, pz);
    guideGroup.add(orb);
    guidingRibbonParticles.push({ mesh: orb, life: 3.5, baseY: py, phase: i * 0.4 });
  }
}

function spawnPulseWaveEffect(pos) {
  const geo = new THREE.RingGeometry(0.2, 0.55, 36);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshBasicMaterial({
    color: PALETTE.lanternLit,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.92
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(pos[0], pos[1] + 0.35, pos[2]);
  scene.add(mesh);
  activePulses.push({ mesh, mat, elapsed: 0, duration: 0.42 });
}

// Game Session State across 3 Nights
let sim = null;
let currentNight = 1;
let totalCampaignScore = 0;
let camYawDeg = 0;
let keys = {};
let queuedInteract = false;
let queuedPulse = false;
let queuedJump = false;
let queuedDash = false;
let lastCountdownSec = -1;
let wasWindWarning = false;

function clearAllEntityVisuals() {
  for (const v of lanternVisuals.values()) scene.remove(v.group);
  lanternVisuals.clear();
  for (const m of moteVisuals.values()) scene.remove(m);
  moteVisuals.clear();
  for (const v of shadeVisuals.values()) scene.remove(v.group);
  shadeVisuals.clear();
  for (const v of drifterVisuals.values()) scene.remove(v.group);
  drifterVisuals.clear();
  for (const v of charmVisuals.values()) scene.remove(v.group);
  charmVisuals.clear();
}

function hideAllScreens() {
  for (const id of [
    'screen-main-menu',
    'screen-night-intro',
    'screen-pause',
    'screen-settings',
    'screen-result'
  ]) {
    document.getElementById(id).classList.remove('active');
  }
}

function showNightIntro(night) {
  currentNight = night;
  hideAllScreens();
  const cfg = NIGHT_CONFIGS[night];
  document.getElementById('intro-night-title').textContent = cfg.name;
  document.getElementById('intro-elder-quote').textContent = cfg.elderIntro;
  document.getElementById('screen-night-intro').classList.add('active');
  buildNightEnvironment(night);
}

function startNightGameplay(night, seed = 2026 + night) {
  sfx.startAmbientMusic();
  hideAllScreens();
  clearAllEntityVisuals();
  currentNight = night;
  lastCountdownSec = -1;
  wasWindWarning = false;

  buildNightEnvironment(night);
  sim = new GameSimulation({ seed, night });

  for (const l of sim.lanterns) {
    lanternVisuals.set(l.id, createLanternMesh(l));
  }

  for (const c of sim.charms) {
    const group = new THREE.Group();
    group.position.set(c.pos[0], c.pos[1] + 0.9, c.pos[2]);
    const card = new THREE.Mesh(
      new THREE.BoxGeometry(0.45, 0.72, 0.08),
      new THREE.MeshBasicMaterial({ color: PALETTE.mayScarfAndCharm })
    );
    const border = new THREE.Mesh(
      new THREE.BoxGeometry(0.53, 0.8, 0.06),
      new THREE.MeshBasicMaterial({ color: PALETTE.goldBorderAndScore })
    );
    group.add(border, card);
    scene.add(group);
    charmVisuals.set(c.id, { group });
  }

  updateHud();
}

function togglePauseGame() {
  if (!sim || sim.state === 'won' || sim.state === 'lost') return;
  sim.step({ pause: true });
  sim.step({ pause: false });
  if (sim.state === 'paused') {
    document.getElementById('screen-pause').classList.add('active');
  } else {
    document.getElementById('screen-pause').classList.remove('active');
  }
}

// Keyboard & Mouse Listeners
window.addEventListener('keydown', (e) => {
  const code = e.code;
  keys[code] = true;

  if (code === 'Escape' || code === 'KeyP') {
    const settingsEl = document.getElementById('screen-settings');
    if (settingsEl.classList.contains('active')) {
      settingsEl.classList.remove('active');
      return;
    }
    togglePauseGame();
    return;
  }

  if (!sim || sim.state !== 'playing') return;

  if (code === 'KeyE') queuedInteract = true;
  if (code === 'KeyF' || code === 'KeyK') queuedPulse = true;
  if (code === 'Space') queuedJump = true;
  if (code === 'ShiftLeft' || code === 'ShiftRight' || code === 'KeyL') queuedDash = true;
  if (code === 'KeyG') triggerGuideTrail(sim);
  if (code === 'KeyR') startNightGameplay(currentNight, Math.floor(performance.now()) % 100000);
});

window.addEventListener('keyup', (e) => {
  keys[e.code] = false;
});

let dragging = false;
let prevMouseX = 0;
window.addEventListener('mousedown', (e) => {
  dragging = true;
  prevMouseX = e.clientX;
});
window.addEventListener('mouseup', () => {
  dragging = false;
});
window.addEventListener('mousemove', (e) => {
  if (dragging) {
    const dx = e.clientX - prevMouseX;
    prevMouseX = e.clientX;
    camYawDeg = (camYawDeg + dx * userSettings.mouseSens) % 360;
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Menu & UI Button Wiring
document.getElementById('btn-start-campaign').addEventListener('click', () => {
  totalCampaignScore = 0;
  showNightIntro(1);
});

document.querySelectorAll('[data-select-night]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const n = Number(btn.getAttribute('data-select-night'));
    totalCampaignScore = 0;
    showNightIntro(n);
  });
});

document.getElementById('btn-begin-night').addEventListener('click', () => {
  startNightGameplay(currentNight);
});

document.getElementById('btn-pause-resume').addEventListener('click', () => {
  if (sim && sim.state === 'paused') togglePauseGame();
});

document.getElementById('btn-pause-restart').addEventListener('click', () => {
  startNightGameplay(currentNight, Math.floor(performance.now()) % 100000);
});

document.getElementById('btn-pause-menu').addEventListener('click', () => {
  hideAllScreens();
  document.getElementById('screen-main-menu').classList.add('active');
});

// Settings Modal
const volSlider = document.getElementById('input-volume');
const sensSlider = document.getElementById('input-sens');
const lblVol = document.getElementById('lbl-volume');
const lblSens = document.getElementById('lbl-sens');

function syncSettingsUI() {
  volSlider.value = String(Math.round(userSettings.volume * 100));
  sensSlider.value = String(Math.round(userSettings.mouseSens * 100));
  lblVol.textContent = `${Math.round(userSettings.volume * 100)}%`;
  lblSens.textContent = userSettings.mouseSens.toFixed(2);
}
syncSettingsUI();

volSlider.addEventListener('input', () => {
  userSettings.volume = Number(volSlider.value) / 100;
  sfx.setVolume(userSettings.volume);
  syncSettingsUI();
});
sensSlider.addEventListener('input', () => {
  userSettings.mouseSens = Number(sensSlider.value) / 100;
  syncSettingsUI();
});

function openSettings() {
  syncSettingsUI();
  document.getElementById('screen-settings').classList.add('active');
}
document.getElementById('btn-open-settings-main').addEventListener('click', openSettings);
document.getElementById('btn-pause-settings').addEventListener('click', openSettings);
document.getElementById('btn-close-settings').addEventListener('click', () => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(userSettings));
  } catch {
    // Ignore storage quota errors
  }
  document.getElementById('screen-settings').classList.remove('active');
});

document.getElementById('cd-dash-box').addEventListener('click', () => {
  if (sim && sim.state === 'playing') queuedDash = true;
});
document.getElementById('cd-pulse-box').addEventListener('click', () => {
  if (sim && sim.state === 'playing') queuedPulse = true;
});

document.getElementById('btn-result-next').addEventListener('click', () => {
  if (currentNight < 3) {
    showNightIntro(currentNight + 1);
  } else {
    hideAllScreens();
    document.getElementById('screen-main-menu').classList.add('active');
  }
});
document.getElementById('btn-result-retry').addEventListener('click', () => {
  startNightGameplay(currentNight, Math.floor(performance.now()) % 100000);
});
document.getElementById('btn-result-menu').addEventListener('click', () => {
  hideAllScreens();
  document.getElementById('screen-main-menu').classList.add('active');
});

function buildInputFrame() {
  if (keys['KeyQ']) camYawDeg -= 1.8;

  let mx = 0;
  let mz = 0;
  if (keys['KeyW'] || keys['ArrowUp']) mz -= 1;
  if (keys['KeyS'] || keys['ArrowDown']) mz += 1;
  if (keys['KeyA'] || keys['ArrowLeft']) mx -= 1;
  if (keys['KeyD'] || keys['ArrowRight']) mx += 1;

  const frame = {
    move: [mx, mz],
    cam_yaw_deg: camYawDeg,
    jump: Boolean(queuedJump || keys['Space']),
    interact: Boolean(queuedInteract),
    pulse: Boolean(queuedPulse),
    dash: Boolean(queuedDash)
  };

  queuedInteract = false;
  queuedPulse = false;
  queuedJump = false;
  queuedDash = false;
  return frame;
}

function updateOffscreenLanternArrow() {
  const arrowEl = document.getElementById('offscreen-arrow');
  if (!sim || sim.state !== 'playing') {
    arrowEl.style.display = 'none';
    return;
  }

  let nearest = null;
  let bestD = Infinity;
  for (const l of sim.lanterns) {
    if (l.lit) continue;
    const d = distXZ(sim.player.pos, l.pos);
    if (d < bestD) {
      bestD = d;
      nearest = l;
    }
  }
  if (!nearest) {
    arrowEl.style.display = 'none';
    return;
  }

  const targetVec = new THREE.Vector3(nearest.pos[0], nearest.pos[1] + 3.5, nearest.pos[2]);
  const projected = targetVec.clone().project(camera);

  const inFront = projected.z < 1.0;
  const onScreen =
    inFront &&
    projected.x >= -0.92 &&
    projected.x <= 0.92 &&
    projected.y >= -0.88 &&
    projected.y <= 0.88;

  if (onScreen) {
    arrowEl.style.display = 'none';
    return;
  }

  let ndcX = projected.x;
  let ndcY = projected.y;
  if (!inFront) {
    ndcX = -ndcX;
    ndcY = -ndcY;
  }
  const angle = Math.atan2(ndcY, ndcX);
  const margin = 56;
  const halfW = window.innerWidth / 2 - margin;
  const halfH = window.innerHeight / 2 - margin;

  const screenX = window.innerWidth / 2 + Math.cos(angle) * halfW;
  const screenY = window.innerHeight / 2 - Math.sin(angle) * halfH;

  arrowEl.style.display = 'flex';
  arrowEl.style.left = `${Math.max(24, Math.min(window.innerWidth - 68, screenX - 22))}px`;
  arrowEl.style.top = `${Math.max(24, Math.min(window.innerHeight - 68, screenY - 22))}px`;
  arrowEl.style.transform = `rotate(${-angle}rad)`;
}

function syncVisuals(timeSec) {
  if (!sim) return;

  // 1. Update Mây position & running/jumping/dashing animation
  mayMesh.group.position.set(sim.player.pos[0], sim.player.pos[1], sim.player.pos[2]);
  mayMesh.group.rotation.y = sim.player.facingYaw;

  if (sim.player.respawnWaitTicks > 0) {
    mayMesh.group.visible = false;
  } else if (sim.player.invulnTicks > 0) {
    mayMesh.group.visible = Math.floor(timeSec * 18) % 2 === 0;
  } else {
    mayMesh.group.visible = true;
  }

  const isMoving = Math.hypot(sim.currInput.move[0], sim.currInput.move[1]) > 0.05;
  const isAirborne = !sim.player.grounded;
  if (isAirborne) {
    mayMesh.leftArm.rotation.x = -0.9;
    mayMesh.rightArm.rotation.x = -0.9;
    mayMesh.leftLeg.rotation.x = 0.45;
    mayMesh.rightLeg.rotation.x = -0.35;
  } else if (isMoving) {
    const swing = Math.sin(timeSec * 14) * 0.65;
    mayMesh.leftArm.rotation.x = swing;
    mayMesh.rightArm.rotation.x = -swing;
    mayMesh.leftLeg.rotation.x = -swing;
    mayMesh.rightLeg.rotation.x = swing;
  } else {
    mayMesh.leftArm.rotation.x = 0;
    mayMesh.rightArm.rotation.x = 0;
    mayMesh.leftLeg.rotation.x = 0;
    mayMesh.rightLeg.rotation.x = 0;
  }

  // Orbiting carried fireflies
  while (mayMesh.orbitGroup.children.length < sim.player.carried) {
    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 8, 8),
      new THREE.MeshBasicMaterial({ color: PALETTE.moteCore })
    );
    mayMesh.orbitGroup.add(orb);
  }
  while (mayMesh.orbitGroup.children.length > sim.player.carried) {
    mayMesh.orbitGroup.remove(mayMesh.orbitGroup.children[mayMesh.orbitGroup.children.length - 1]);
  }
  mayMesh.orbitGroup.children.forEach((orb, idx) => {
    const a = timeSec * 3.2 + (idx * Math.PI * 2) / Math.max(1, sim.player.carried);
    orb.position.set(Math.cos(a) * 0.88, Math.sin(timeSec * 4 + idx) * 0.14, Math.sin(a) * 0.88);
  });

  // 2. Sync Lanterns & Exact Ambient Light Intensity Formula:
  // intensity = 0.15 + 0.55 * (litCount / totalLanterns)
  let litCount = 0;
  for (const l of sim.lanterns) {
    if (l.lit) litCount++;
    const v = lanternVisuals.get(l.id);
    if (!v) continue;

    if (l.lit) {
      v.coreMat.color.setHex(PALETTE.lanternCore);
      v.coreMat.emissive.setHex(PALETTE.lanternLit);
      v.coreMat.emissiveIntensity = 1.6 + Math.sin(timeSec * 4) * 0.18;
      v.light.intensity = 6.5;
      v.ringMat.opacity = 0.42 + Math.sin(timeSec * 3) * 0.1;
    } else {
      v.coreMat.color.setHex(PALETTE.lanternOff);
      v.coreMat.emissive.setHex(PALETTE.lanternOff);
      v.coreMat.emissiveIntensity = 0.2 + (l.deposited / CONTRACT.tuning.lantern_cost) * 0.6;
      v.light.intensity = (l.deposited / CONTRACT.tuning.lantern_cost) * 2.2;
      v.ringMat.opacity = 0.08;
    }
  }

  const ratio = litCount / Math.max(1, sim.lanterns.length);
  ambientLight.intensity = 0.15 + 0.55 * ratio;
  scene.fog.density = 0.015 - ratio * 0.008;

  // 3. Sync Motes (Core #FFF6C2 / Halo #FFE58A)
  const activeMoteIds = new Set();
  for (const m of sim.motes) {
    activeMoteIds.add(m.id);
    let mesh = moteVisuals.get(m.id);
    if (!mesh) {
      const g = new THREE.Group();
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 10, 10),
        new THREE.MeshBasicMaterial({ color: PALETTE.moteCore })
      );
      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(0.38, 10, 10),
        new THREE.MeshBasicMaterial({ color: PALETTE.moteHalo, transparent: true, opacity: 0.38 })
      );
      g.add(core, halo);
      scene.add(g);
      mesh = g;
      moteVisuals.set(m.id, mesh);
    }
    const hoverY = m.pos[1] + 0.65 + Math.sin(timeSec * 3.4 + m.pos[0]) * 0.22;
    mesh.position.set(m.pos[0], hoverY, m.pos[2]);
  }
  for (const [id, mesh] of moteVisuals.entries()) {
    if (!activeMoteIds.has(id)) {
      scene.remove(mesh);
      moteVisuals.delete(id);
    }
  }

  // 4. Sync Shades (Body #120A1A / Rim #7A3CFF / Stunned #3A3450)
  const activeShadeIds = new Set();
  for (const s of sim.shades) {
    activeShadeIds.add(s.id);
    let v = shadeVisuals.get(s.id);
    if (!v) {
      const group = new THREE.Group();
      const bodyMat = new THREE.MeshStandardMaterial({
        color: PALETTE.shadeBody,
        emissive: PALETTE.shadeRim,
        emissiveIntensity: 0.55,
        roughness: 0.4
      });
      const body = new THREE.Mesh(new THREE.ConeGeometry(0.75, 1.8, 12), bodyMat);
      body.position.y = 0.9;
      group.add(body);

      const stunRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.6, 0.06, 8, 20),
        new THREE.MeshBasicMaterial({ color: PALETTE.goldBorderAndScore })
      );
      stunRing.rotation.x = Math.PI / 2;
      stunRing.position.y = 2.0;
      stunRing.visible = false;
      group.add(stunRing);

      scene.add(group);
      v = { group, bodyMat, stunRing };
      shadeVisuals.set(s.id, v);
    }

    const surf = sim.getTerrainInfo(s.pos[0], s.pos[2]);
    const sy = surf.onIsland ? surf.y : s.pos[1];
    v.group.position.set(s.pos[0], sy, s.pos[2]);

    if (s.state === 'stunned') {
      v.bodyMat.color.setHex(PALETTE.shadeStunned);
      v.bodyMat.emissive.setHex(PALETTE.shadeStunned);
      v.stunRing.visible = true;
      v.stunRing.rotation.z = timeSec * 5;
    } else {
      v.bodyMat.color.setHex(PALETTE.shadeBody);
      v.bodyMat.emissive.setHex(PALETTE.shadeRim);
      v.stunRing.visible = false;
    }
  }
  for (const [id, v] of shadeVisuals.entries()) {
    if (!activeShadeIds.has(id)) {
      scene.remove(v.group);
      shadeVisuals.delete(id);
    }
  }

  // 5. Sync Drifters (Gió Lạc — #8FA3B8 silk ribbon)
  const activeDrifterIds = new Set();
  for (const d of sim.drifters) {
    activeDrifterIds.add(d.id);
    let v = drifterVisuals.get(d.id);
    if (!v) {
      const group = new THREE.Group();
      const ribbon = new THREE.Mesh(
        new THREE.TorusKnotGeometry(0.45, 0.1, 32, 8),
        new THREE.MeshStandardMaterial({
          color: PALETTE.drifter,
          emissive: PALETTE.drifter,
          emissiveIntensity: 0.4
        })
      );
      ribbon.position.y = 1.2;
      group.add(ribbon);
      scene.add(group);
      v = { group, ribbon };
      drifterVisuals.set(d.id, v);
    }
    v.group.position.set(d.pos[0], d.pos[1], d.pos[2]);
    v.ribbon.rotation.y = timeSec * 4;
  }
  for (const [id, v] of drifterVisuals.entries()) {
    if (!activeDrifterIds.has(id)) {
      scene.remove(v.group);
      drifterVisuals.delete(id);
    }
  }

  // 6. Sync Charms (Bùa Gió — #C8102E with #F2C14E border)
  for (const c of sim.charms) {
    const v = charmVisuals.get(c.id);
    if (v) {
      v.group.visible = c.available;
      v.group.rotation.y = timeSec * 2.5;
      v.group.position.y = c.pos[1] + 0.9 + Math.sin(timeSec * 3) * 0.15;
    }
  }

  // 7. Update Pulse rings & Guiding Trail
  for (let i = activePulses.length - 1; i >= 0; i--) {
    const p = activePulses[i];
    p.elapsed += DT;
    const t = p.elapsed / p.duration;
    if (t >= 1) {
      scene.remove(p.mesh);
      activePulses.splice(i, 1);
    } else {
      const scale = 1 + t * CONTRACT.tuning.pulse_radius * 2;
      p.mesh.scale.set(scale, scale, 1);
      p.mat.opacity = (1 - t) * 0.85;
    }
  }

  if (turtleRune) {
    turtleRune.rotation.y = timeSec * 2.2;
  }

  for (let i = guidingRibbonParticles.length - 1; i >= 0; i--) {
    const item = guidingRibbonParticles[i];
    item.life -= DT;
    if (item.life <= 0) {
      guideGroup.remove(item.mesh);
      guidingRibbonParticles.splice(i, 1);
    } else {
      item.mesh.position.y = item.baseY + Math.sin(timeSec * 5 + item.phase) * 0.16;
      item.mesh.material.opacity = Math.min(1, item.life * 0.5);
    }
  }

  // 8. Third-Person Camera follow
  const rad = (camYawDeg * Math.PI) / 180;
  const camDist = 11.5;
  const camHeight = 6.8;
  const targetCamX = sim.player.pos[0] + Math.sin(rad) * camDist;
  const targetCamZ = sim.player.pos[2] + Math.cos(rad) * camDist;
  camera.position.lerp(
    new THREE.Vector3(targetCamX, Math.max(-4, sim.player.pos[1]) + camHeight, targetCamZ),
    0.16
  );
  camera.lookAt(sim.player.pos[0], Math.max(-4, sim.player.pos[1]) + 1.2, sim.player.pos[2]);

  updateOffscreenLanternArrow();
}

function formatClock(sec) {
  const s = Math.max(0, Math.ceil(sec));
  const mm = String(Math.floor(s / 60)).padStart(2, '0');
  const ss = String(s % 60).padStart(2, '0');
  return `${mm}:${ss}`;
}

function updateHud() {
  if (!sim) return;

  document.getElementById('hud-night-name').textContent = NIGHT_CONFIGS[sim.night].name;

  const flamesStr =
    '🔥'.repeat(sim.player.flames) +
    '🖤'.repeat(Math.max(0, CONTRACT.tuning.flames - sim.player.flames));
  document.getElementById('hud-flames').textContent = flamesStr;

  // Clock mm:ss (turns red & blinks when <= 30s; plays countdown tick on last 10s)
  const clockEl = document.getElementById('hud-clock');
  clockEl.textContent = formatClock(sim.time_left_s);
  if (sim.time_left_s <= 30) {
    clockEl.classList.add('danger');
  } else {
    clockEl.classList.remove('danger');
  }
  const ceilSec = Math.ceil(sim.time_left_s);
  if (ceilSec <= 10 && ceilSec > 0 && ceilSec !== lastCountdownSec) {
    lastCountdownSec = ceilSec;
    sfx.playCountdownTick();
  }

  // Wind & Charm badges
  const charmBadge = document.getElementById('charm-badge');
  if (sim.player.charmTicks > 0) {
    charmBadge.style.display = 'inline-block';
    charmBadge.textContent = `🧧 Bùa Gió: ${(sim.player.charmTicks / 60).toFixed(1)}s`;
  } else {
    charmBadge.style.display = 'none';
  }

  const windBadge = document.getElementById('wind-badge');
  if (sim.wind.active) {
    windBadge.style.display = 'inline-block';
    windBadge.textContent = `🍃 Gió Mạnh (${Math.round(sim.wind.dir_deg)}°)`;
  } else if (sim.wind.warning) {
    windBadge.style.display = 'inline-block';
    windBadge.textContent = '🍃 Gió sắp thổi (2s)...';
    if (!wasWindWarning) {
      wasWindWarning = true;
      sfx.playWindWarning();
    }
  } else {
    windBadge.style.display = 'none';
    wasWindWarning = false;
  }

  // Lanterns k/n & Score
  const litCount = sim.lanterns.filter((l) => l.lit).length;
  document.getElementById('hud-lanterns').textContent = `${litCount}/${sim.lanterns.length}`;
  document.getElementById('hud-score').textContent = String(totalCampaignScore + sim.score);

  // 10-slot Firefly Bar
  document.getElementById('hud-mote-count').textContent = `${sim.player.carried}/10`;
  for (let i = 0; i < 10; i++) {
    if (i < sim.player.carried) {
      moteSlotEls[i].classList.add('filled');
    } else {
      moteSlotEls[i].classList.remove('filled');
    }
  }

  // Dash & Pulse Cooldown Widgets
  const dashBox = document.getElementById('cd-dash-box');
  const dashText = document.getElementById('cd-dash-text');
  if (sim.player.charmTicks > 0) {
    dashBox.classList.remove('on-cd');
    dashText.textContent = '0s (Bùa)';
  } else if (sim.player.dashCdTicks > 0) {
    dashBox.classList.add('on-cd');
    dashText.textContent = `${(sim.player.dashCdTicks / 60).toFixed(1)}s`;
  } else {
    dashBox.classList.remove('on-cd');
    dashText.textContent = 'Sẵn sàng';
  }

  const pulseBox = document.getElementById('cd-pulse-box');
  const pulseText = document.getElementById('cd-pulse-text');
  if (sim.player.pulseCdTicks > 0) {
    pulseBox.classList.add('on-cd');
    pulseText.textContent = `${(sim.player.pulseCdTicks / 60).toFixed(1)}s`;
  } else if (sim.player.carried < CONTRACT.tuning.pulse_cost) {
    pulseBox.classList.add('on-cd');
    pulseText.textContent = `${sim.player.carried}/3 đom đóm`;
  } else {
    pulseBox.classList.remove('on-cd');
    pulseText.textContent = 'Sẵn sàng';
  }

  // Required Prompt when near an unlit lantern: "E — Nạp ánh sáng (x/10)"
  let nearestUnlit = null;
  let nearestDist = Infinity;
  for (const l of sim.lanterns) {
    if (l.lit) continue;
    const d = distXZ(sim.player.pos, l.pos);
    if (d < nearestDist) {
      nearestDist = d;
      nearestUnlit = l;
    }
  }

  const promptEl = document.getElementById('action-prompt');
  if (nearestUnlit && nearestDist <= CONTRACT.tuning.interact_radius) {
    promptEl.style.opacity = '1';
    promptEl.textContent = `E — Nạp ánh sáng (${nearestUnlit.deposited}/${CONTRACT.tuning.lantern_cost})`;
  } else {
    promptEl.style.opacity = '0';
  }
}

function handleEvents(events) {
  for (const ev of events) {
    if (ev.name === 'mote_picked') {
      sfx.playPickup(ev.data.carried);
    } else if (ev.name === 'charm_picked') {
      sfx.playCharmPickup();
    } else if (ev.name === 'deposit') {
      sfx.playDeposit();
    } else if (ev.name === 'lantern_lit') {
      sfx.playLanternLit();
    } else if (ev.name === 'pulse') {
      sfx.playPulse();
      spawnPulseWaveEffect(sim.player.pos);
    } else if (ev.name === 'dash') {
      sfx.playDash();
    } else if (ev.name === 'shade_spawned') {
      sfx.playShadeSpawn();
    } else if (ev.name === 'player_hit') {
      sfx.playHit();
    } else if (ev.name === 'game_over') {
      const resScreen = document.getElementById('screen-result');
      const titleEl = document.getElementById('result-title');
      const descEl = document.getElementById('result-desc');
      const scoreEl = document.getElementById('result-score');
      const nextBtn = document.getElementById('btn-result-next');

      resScreen.classList.add('active');

      if (ev.data.result === 'won') {
        sfx.playWin();
        totalCampaignScore += sim.score;
        if (currentNight < 3) {
          titleEl.textContent = `🏮 ${NIGHT_CONFIGS[currentNight].name.toUpperCase()} BỪNG SÁNG!`;
          descEl.textContent =
            'Mây đã thắp sáng toàn bộ Đèn Lồng trên đảo này! Hãy chuẩn bị tiến sang hòn đảo tiếp theo.';
          scoreEl.textContent = `Điểm Đêm ${currentNight}: ${sim.score} · Tổng điểm: ${totalCampaignScore}`;
          nextBtn.style.display = 'inline-block';
          nextBtn.textContent = `Sang Đêm ${currentNight + 1} →`;
        } else {
          // Dawn Finale Screen after winning Night 3
          titleEl.textContent = '🌅 BÌNH MINH TRÊN ĐẢO ĐÈN LỒNG!';
          descEl.textContent =
            'Chúc mừng Mây! Cả Ba Hòn Đảo (Đảo Bến, Đảo Cau, Đảo Chuông) đã rực sáng, xua tan vĩnh viễn màn sương đen!';
          scoreEl.textContent = `Điểm Đêm 3: ${sim.score} · TỔNG ĐIỂM HÀNH TRÌNH: ${totalCampaignScore}`;
          nextBtn.style.display = 'inline-block';
          nextBtn.textContent = 'Về Menu Chính';
        }
      } else {
        sfx.playLose();
        titleEl.textContent = '🌑 SƯƠNG ĐEN BAO PHỦ...';
        descEl.textContent =
          ev.data.reason === 'no_flames'
            ? 'Ngọn Lửa hộ mệnh của Mây đã tắt hết. Hãy chơi lại Đêm này nhé!'
            : 'Bình minh đã tới trước khi Mây kịp thắp sáng toàn bộ Đèn Lồng.';
        scoreEl.textContent = `Điểm Đêm ${currentNight}: ${sim.score}`;
        nextBtn.style.display = 'none';
      }
    }
  }
}

// Start directly in Night 1 gameplay so automated browser checks and players can play right away,
// while also providing full access to Main Menu / Pause Menu via Esc / P!
startNightGameplay(1, 2026);

let lastTime = performance.now();
let accumulator = 0;

function animate(now) {
  requestAnimationFrame(animate);

  const deltaSec = Math.min(0.1, (now - lastTime) / 1000);
  lastTime = now;

  if (sim && sim.state === 'playing') {
    accumulator += deltaSec;
    while (accumulator >= DT) {
      const frame = buildInputFrame();
      if (frame.jump && sim.player.grounded && sim.player.dashTicksLeft === 0) {
        sfx.playJump();
      }
      const events = sim.step(frame);
      if (events.length > 0) {
        handleEvents(events);
      }
      accumulator -= DT;
      if (sim.state !== 'playing') break;
    }
    updateHud();
  }

  syncVisuals(now / 1000);
  renderer.render(scene, camera);
}

requestAnimationFrame(animate);
