import * as THREE from 'three';
import { GameSimulation, TICK_RATE, DT, distXZ } from '../core/simulation.js';
import { CONTRACT } from '../core/config.js';
import { SoundEffects } from './sound.js';

const canvas = document.getElementById('game-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x070512);
scene.fog = new THREE.FogExp2(0x090616, 0.022);

const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 220);

const sfx = new SoundEffects();

// Lighting
const hemiLight = new THREE.HemisphereLight(0x3b2d66, 0x120d24, 0.55);
scene.add(hemiLight);

const moonLight = new THREE.DirectionalLight(0x8b9bb4, 0.5);
moonLight.position.set(-25, 45, -20);
moonLight.castShadow = true;
moonLight.shadow.mapSize.set(1024, 1024);
scene.add(moonLight);

// Environment Group
const envGroup = new THREE.Group();
scene.add(envGroup);

function buildIslandEnvironment() {
  // Main Circular Island (Đảo Bến, radius 45m, top at Y = 0)
  const islandGeo = new THREE.CylinderGeometry(45, 38, 6, 48);
  const islandMat = new THREE.MeshStandardMaterial({
    color: 0x1c2b24,
    roughness: 0.88,
    metalness: 0.05
  });
  const islandMesh = new THREE.Mesh(islandGeo, islandMat);
  islandMesh.position.y = -3;
  islandMesh.receiveShadow = true;
  envGroup.add(islandMesh);

  // Stone Cobble Center Plaza
  const plazaGeo = new THREE.CylinderGeometry(5.5, 5.8, 0.12, 32);
  const plazaMat = new THREE.MeshStandardMaterial({ color: 0x3b3648, roughness: 0.75 });
  const plaza = new THREE.Mesh(plazaGeo, plazaMat);
  plaza.position.y = 0.04;
  plaza.receiveShadow = true;
  envGroup.add(plaza);

  // Radial paths to the 5 Great Lanterns
  for (let i = 0; i < 5; i++) {
    const angle = (i * Math.PI * 2) / 5;
    const pathGeo = new THREE.BoxGeometry(1.6, 0.06, 24);
    const pathMat = new THREE.MeshStandardMaterial({ color: 0x302b3d, roughness: 0.85 });
    const pathMesh = new THREE.Mesh(pathGeo, pathMat);
    pathMesh.position.set(Math.sin(angle) * 12.5, 0.02, Math.cos(angle) * 12.5);
    pathMesh.rotation.y = angle;
    pathMesh.receiveShadow = true;
    envGroup.add(pathMesh);
  }

  // Sea of Clouds around the island
  const cloudMat = new THREE.MeshStandardMaterial({
    color: 0x191330,
    roughness: 1,
    transparent: true,
    opacity: 0.72
  });
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    const r = 52 + (i % 3) * 8;
    const puff = new THREE.Mesh(new THREE.SphereGeometry(7 + (i % 4) * 2.5, 16, 12), cloudMat);
    puff.position.set(Math.cos(a) * r, -3.5 + (i % 2) * 0.8, Math.sin(a) * r);
    puff.scale.y = 0.45;
    envGroup.add(puff);
  }

  // Stylized low-poly trees around the island
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3d2817, roughness: 0.9 });
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x16382b, roughness: 0.8 });
  const treeCoords = [
    [10, 12], [-12, 10], [15, -8], [-14, -12], [0, -14],
    [28, 18], [-28, 16], [30, -15], [-26, -22], [8, 33], [-10, 32]
  ];
  for (const [tx, tz] of treeCoords) {
    const tree = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.4, 2.2, 8), trunkMat);
    trunk.position.y = 1.1;
    tree.add(trunk);

    const crown1 = new THREE.Mesh(new THREE.ConeGeometry(1.6, 2.6, 8), leafMat);
    crown1.position.y = 2.8;
    tree.add(crown1);

    const crown2 = new THREE.Mesh(new THREE.ConeGeometry(1.2, 2.0, 8), leafMat);
    crown2.position.y = 4.0;
    tree.add(crown2);

    tree.position.set(tx, 0, tz);
    envGroup.add(tree);
  }

  // Creative Extension ("Sáng tạo của tôi"): Cụ Rùa Đá Giữ Bến & Chuông Gió Cổ Đại at [3.8, 0, 3.8]
  const turtleGroup = new THREE.Group();
  const shellMat = new THREE.MeshStandardMaterial({
    color: 0x2e4c3e,
    emissive: 0x0f291e,
    roughness: 0.65
  });
  const shell = new THREE.Mesh(new THREE.SphereGeometry(1.1, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.55), shellMat);
  shell.scale.set(1.2, 0.85, 1.0);
  turtleGroup.add(shell);

  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.38, 12, 10),
    new THREE.MeshStandardMaterial({ color: 0x495851 })
  );
  head.position.set(-1.15, 0.32, 0);
  turtleGroup.add(head);

  // Small glowing rune crystal on Cụ Rùa's back
  const runeMat = new THREE.MeshBasicMaterial({ color: 0x6ee7b7 });
  const rune = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 0), runeMat);
  rune.position.set(0, 1.15, 0);
  turtleGroup.add(rune);

  turtleGroup.position.set(3.8, 0, 3.8);
  envGroup.add(turtleGroup);
  return { turtleRune: rune };
}

const { turtleRune } = buildIslandEnvironment();

// Build Mây (Player Character: adventurous crimson vest, indigo shorts, straw-golden nón lá with crimson ribbon + hanging mini-lantern)
function createMayCharacter() {
  const group = new THREE.Group();

  const skinMat = new THREE.MeshStandardMaterial({ color: 0xfde68a, roughness: 0.6 });
  const vestMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.65 });
  const shortsMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.75 });
  const sashMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.6 });
  const hairMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.8 });

  // Articulated Legs
  const leftLeg = new THREE.Group();
  leftLeg.position.set(-0.2, 0.55, 0);
  const lShort = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.13, 0.32, 12), shortsMat);
  lShort.position.y = -0.12;
  const lCuff = new THREE.Mesh(
    new THREE.CylinderGeometry(0.15, 0.15, 0.07, 12),
    new THREE.MeshStandardMaterial({ color: 0xf8fafc })
  );
  lCuff.position.y = -0.27;
  const lCalf = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.26, 12), skinMat);
  lCalf.position.y = -0.4;
  const lSandal = new THREE.Mesh(
    new THREE.BoxGeometry(0.22, 0.07, 0.32),
    new THREE.MeshStandardMaterial({ color: 0x78350f })
  );
  lSandal.position.set(0, -0.52, 0.04);
  leftLeg.add(lShort, lCuff, lCalf, lSandal);
  group.add(leftLeg);

  const rightLeg = leftLeg.clone();
  rightLeg.position.set(0.2, 0.55, 0);
  group.add(rightLeg);

  // Torso (Crimson Explorer Vest + Yellow Waist Sash)
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.36, 0.68, 16), vestMat);
  torso.position.y = 0.88;
  torso.castShadow = true;
  group.add(torso);

  const sash = new THREE.Mesh(new THREE.CylinderGeometry(0.37, 0.37, 0.13, 16), sashMat);
  sash.position.y = 0.58;
  group.add(sash);

  // Gold buttons on vest front
  const btnMat = new THREE.MeshBasicMaterial({ color: 0xfde047 });
  for (const by of [0.78, 0.96]) {
    const btn = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), btnMat);
    btn.position.set(0.06, by, 0.33);
    group.add(btn);
  }

  // Articulated Arms
  const leftArm = new THREE.Group();
  leftArm.position.set(-0.42, 1.12, 0);
  const lShoulder = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.11, 0.2, 10), vestMat);
  lShoulder.position.y = -0.06;
  const lForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.34, 10), skinMat);
  lForearm.position.y = -0.26;
  const lFist = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 10), skinMat);
  lFist.position.y = -0.45;
  leftArm.add(lShoulder, lForearm, lFist);
  group.add(leftArm);

  const rightArm = leftArm.clone();
  rightArm.position.set(0.42, 1.12, 0);
  group.add(rightArm);

  // Head & Expressive Face
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.31, 16, 16), skinMat);
  head.position.y = 1.46;
  head.castShadow = true;
  group.add(head);

  // Dark unruly hair rim under the nón lá
  const hairCrown = new THREE.Mesh(new THREE.SphereGeometry(0.325, 14, 12), hairMat);
  hairCrown.position.set(0, 1.5, -0.04);
  group.add(hairCrown);

  // Eyes
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0x09090b });
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 8), eyeMat);
  const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 8), eyeMat);
  eyeL.position.set(-0.1, 1.48, 0.28);
  eyeR.position.set(0.1, 1.48, 0.28);
  group.add(eyeL, eyeR);

  // Straw-golden Nón Lá (Conical Hat) with Crimson Ribbon Band
  const hatGroup = new THREE.Group();
  hatGroup.position.y = 1.76;
  hatGroup.rotation.x = -0.06;

  const hatCone = new THREE.Mesh(
    new THREE.ConeGeometry(0.82, 0.44, 28),
    new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.6 })
  );
  hatGroup.add(hatCone);

  // Crimson Ribbon around the Nón Lá crown
  const ribbon = new THREE.Mesh(
    new THREE.CylinderGeometry(0.42, 0.56, 0.09, 24, 1, true),
    new THREE.MeshStandardMaterial({ color: 0xdc2626, side: THREE.DoubleSide, roughness: 0.5 })
  );
  ribbon.position.y = -0.06;
  hatGroup.add(ribbon);

  group.add(hatGroup);

  // Mini Lantern hanging from the front brim of Mây's Nón lá
  const cord = new THREE.Mesh(
    new THREE.CylinderGeometry(0.016, 0.016, 0.26, 6),
    new THREE.MeshBasicMaterial({ color: 0x78350f })
  );
  cord.position.set(0, 1.45, 0.72);
  group.add(cord);

  const miniLantern = new THREE.Mesh(
    new THREE.SphereGeometry(0.13, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xffedd5 })
  );
  miniLantern.position.set(0, 1.3, 0.72);
  group.add(miniLantern);

  // Warm Personal PointLight attached to Mây's mini-lantern
  const playerLight = new THREE.PointLight(0xffaa33, 2.5, 16, 1.6);
  playerLight.position.set(0, 1.4, 0.72);
  playerLight.castShadow = true;
  group.add(playerLight);

  // Orbiting carried fireflies indicator group
  const orbitGroup = new THREE.Group();
  orbitGroup.position.y = 1.1;
  group.add(orbitGroup);

  return { group, miniLantern, playerLight, orbitGroup, leftArm, rightArm, leftLeg, rightLeg };
}

const mayMesh = createMayCharacter();
scene.add(mayMesh.group);

// Build Great Lantern Mesh (L1..L5)
function createLanternMesh(lanternData) {
  const group = new THREE.Group();
  group.position.set(lanternData.pos[0], lanternData.pos[1], lanternData.pos[2]);

  // Stone pedestal
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.35, 0.6, 12),
    new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.85 })
  );
  base.position.y = 0.3;
  group.add(base);

  // Wooden pillar
  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.22, 0.28, 3.2, 10),
    new THREE.MeshStandardMaterial({ color: 0x5c2d16, roughness: 0.8 })
  );
  pole.position.y = 2.1;
  group.add(pole);

  // Lantern chamber
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    emissive: 0x1e1b4b,
    emissiveIntensity: 0.3,
    roughness: 0.4
  });
  const core = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.5, 1.1, 8), coreMat);
  core.position.y = 4.0;
  group.add(core);

  // Pagoda roof cap
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(1.15, 0.65, 8),
    new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.7 })
  );
  roof.position.y = 4.85;
  group.add(roof);

  // Lantern PointLight (off when unlit, bright warm gold when lit)
  const light = new THREE.PointLight(0xffa928, 0, 26, 1.4);
  light.position.y = 4.0;
  group.add(light);

  // Safe radius ring on ground (5.0m)
  const ringGeo = new THREE.RingGeometry(
    CONTRACT.tuning.safe_radius - 0.12,
    CONTRACT.tuning.safe_radius,
    48
  );
  ringGeo.rotateX(-Math.PI / 2);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xfbbf24,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.12
  });
  const safeRing = new THREE.Mesh(ringGeo, ringMat);
  safeRing.position.y = 0.06;
  group.add(safeRing);

  // 3 small deposit slot pips floating around the pillar
  const pips = [];
  for (let i = 0; i < CONTRACT.tuning.lantern_cost; i++) {
    const pipMat = new THREE.MeshBasicMaterial({ color: 0x334155 });
    const pip = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 10), pipMat);
    const a = (i * Math.PI * 2) / CONTRACT.tuning.lantern_cost;
    pip.position.set(Math.cos(a) * 0.9, 2.2, Math.sin(a) * 0.9);
    group.add(pip);
    pips.push(pip);
  }

  scene.add(group);
  return { group, core, coreMat, light, safeRing, ringMat, pips };
}

// Dynamic Entity Visual Maps
const lanternVisuals = new Map();
const moteVisuals = new Map();
const shadeVisuals = new Map();
const activePulses = [];
const guidingRibbonParticles = [];

// Creative guiding trail group
const guideGroup = new THREE.Group();
scene.add(guideGroup);

function triggerGuideTrail(sim) {
  sfx.playChimeGuide();
  // Find nearest unlit lantern
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

  // Clear old particles
  while (guideGroup.children.length > 0) {
    guideGroup.remove(guideGroup.children[0]);
  }
  guidingRibbonParticles.length = 0;

  const steps = 18;
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const px = sim.player.pos[0] + (nearest.pos[0] - sim.player.pos[0]) * t;
    const pz = sim.player.pos[2] + (nearest.pos[2] - sim.player.pos[2]) * t;
    const py = 0.6 + Math.sin(t * Math.PI) * 1.6;

    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(0.14, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xfde047, transparent: true, opacity: 0.95 })
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
    color: 0xfbbf24,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(pos[0], 0.25, pos[2]);
  scene.add(mesh);
  activePulses.push({ mesh, mat, elapsed: 0, duration: 0.45 });
}

// Simulation Instance & Game State
let sim = null;
let camYawDeg = 0;
let keys = {};
let queuedInteract = false;
let queuedPulse = false;
let queuedJump = false;

function initGame(seed = 2026) {
  // Clean up previous visuals
  for (const v of lanternVisuals.values()) scene.remove(v.group);
  lanternVisuals.clear();
  for (const mesh of moteVisuals.values()) scene.remove(mesh);
  moteVisuals.clear();
  for (const v of shadeVisuals.values()) scene.remove(v.group);
  shadeVisuals.clear();

  sim = new GameSimulation({ seed, night: 1 });

  for (const l of sim.lanterns) {
    lanternVisuals.set(l.id, createLanternMesh(l));
  }

  document.getElementById('modal-overlay').classList.remove('active');
  updateHud();
}

// Input Listeners
window.addEventListener('keydown', (e) => {
  const code = e.code;
  keys[code] = true;
  if (code === 'KeyE') queuedInteract = true;
  if (code === 'KeyF' || code === 'KeyK') queuedPulse = true;
  if (code === 'Space') queuedJump = true;
  if (code === 'KeyG' && sim && sim.state === 'playing') {
    triggerGuideTrail(sim);
  }
  if (code === 'KeyR') {
    initGame(Math.floor(performance.now()) % 100000);
  }
});

window.addEventListener('keyup', (e) => {
  keys[e.code] = false;
});

// Mouse drag camera rotation
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
    camYawDeg = (camYawDeg + dx * 0.35) % 360;
  }
});

document.getElementById('btn-guide').addEventListener('click', () => {
  if (sim && sim.state === 'playing') triggerGuideTrail(sim);
});
document.getElementById('btn-pulse').addEventListener('click', () => {
  queuedPulse = true;
});
document.getElementById('btn-restart').addEventListener('click', () => {
  initGame(Math.floor(performance.now()) % 100000);
});
document.getElementById('btn-modal-restart').addEventListener('click', () => {
  initGame(Math.floor(performance.now()) % 100000);
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function buildInputFrame() {
  if (keys['KeyQ']) camYawDeg -= 1.8;

  let mx = 0;
  let mz = 0;
  // Standard third-person mapping: W moves forward along camera look direction (-Z relative to camera at yaw=0)
  if (keys['KeyW'] || keys['ArrowUp']) mz -= 1;
  if (keys['KeyS'] || keys['ArrowDown']) mz += 1;
  if (keys['KeyA'] || keys['ArrowLeft']) mx -= 1;
  if (keys['KeyD'] || keys['ArrowRight']) mx += 1;

  const frame = {
    move: [mx, mz],
    cam_yaw_deg: camYawDeg,
    jump: Boolean(queuedJump || keys['Space']),
    interact: Boolean(queuedInteract),
    pulse: Boolean(queuedPulse)
  };

  queuedInteract = false;
  queuedPulse = false;
  queuedJump = false;
  return frame;
}

function syncVisuals(timeSec) {
  if (!sim) return;

  // 1. Update Mây position & running/jumping limb animation
  mayMesh.group.position.set(sim.player.pos[0], sim.player.pos[1], sim.player.pos[2]);
  mayMesh.group.rotation.y = sim.player.facingYaw;

  const isMoving = Math.hypot(sim.currInput.move[0], sim.currInput.move[1]) > 0.05;
  const isAirborne = sim.player.pos[1] > 0.05;
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
    const idleSwing = Math.sin(timeSec * 2.5) * 0.06;
    mayMesh.leftArm.rotation.x = idleSwing;
    mayMesh.rightArm.rotation.x = -idleSwing;
    mayMesh.leftLeg.rotation.x = 0;
    mayMesh.rightLeg.rotation.x = 0;
  }

  // Invulnerability blink
  if (sim.player.invulnTimer > 0) {
    mayMesh.group.visible = Math.floor(timeSec * 16) % 2 === 0;
  } else {
    mayMesh.group.visible = true;
  }

  // Carried fireflies orbiting Mây
  while (mayMesh.orbitGroup.children.length < sim.player.carried) {
    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xffd166 })
    );
    mayMesh.orbitGroup.add(orb);
  }
  while (mayMesh.orbitGroup.children.length > sim.player.carried) {
    mayMesh.orbitGroup.remove(mayMesh.orbitGroup.children[mayMesh.orbitGroup.children.length - 1]);
  }
  mayMesh.orbitGroup.children.forEach((orb, idx) => {
    const a = timeSec * 3.0 + (idx * Math.PI * 2) / Math.max(1, sim.player.carried);
    orb.position.set(Math.cos(a) * 0.85, Math.sin(timeSec * 4 + idx) * 0.15, Math.sin(a) * 0.85);
  });

  // 2. Sync Lanterns & Progressive Island Brightening ("Đảo sáng dần lên khi thắp đèn")
  let litCount = 0;
  for (const l of sim.lanterns) {
    if (l.lit) litCount++;
    const v = lanternVisuals.get(l.id);
    if (!v) continue;

    v.pips.forEach((pip, idx) => {
      pip.material.color.setHex(idx < l.deposited ? 0xfbbf24 : 0x334155);
    });

    if (l.lit) {
      v.coreMat.color.setHex(0xffedd5);
      v.coreMat.emissive.setHex(0xf59e0b);
      v.coreMat.emissiveIntensity = 1.6 + Math.sin(timeSec * 4) * 0.2;
      v.light.intensity = 6.5;
      v.ringMat.opacity = 0.42 + Math.sin(timeSec * 3) * 0.1;
    } else {
      v.coreMat.color.setHex(0x334155);
      v.coreMat.emissive.setHex(0x1e1b4b);
      v.coreMat.emissiveIntensity = 0.25;
      v.light.intensity = l.deposited * 0.8;
      v.ringMat.opacity = 0.08;
    }
  }

  // Island brightens as more lanterns are lit (0..5)
  const progress = litCount / Math.max(1, sim.lanterns.length);
  scene.fog.density = 0.022 - progress * 0.014;
  hemiLight.intensity = 0.55 + progress * 0.85;

  // 3. Sync Motes (Fireflies)
  const activeMoteIds = new Set();
  for (const m of sim.motes) {
    activeMoteIds.add(m.id);
    let mesh = moteVisuals.get(m.id);
    if (!mesh) {
      const g = new THREE.Group();
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.22, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xffb703 })
      );
      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(0.42, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xfb8500, transparent: true, opacity: 0.35 })
      );
      g.add(core);
      g.add(halo);
      scene.add(g);
      mesh = g;
      moteVisuals.set(m.id, mesh);
    }
    const hoverY = 0.75 + Math.sin(timeSec * 3.2 + m.pos[0]) * 0.28;
    mesh.position.set(m.pos[0], hoverY, m.pos[2]);
  }
  for (const [id, mesh] of moteVisuals.entries()) {
    if (!activeMoteIds.has(id)) {
      scene.remove(mesh);
      moteVisuals.delete(id);
    }
  }

  // 4. Sync Shades (Bóng Mực — dark purple-black creatures)
  const activeShadeIds = new Set();
  for (const s of sim.shades) {
    activeShadeIds.add(s.id);
    let v = shadeVisuals.get(s.id);
    if (!v) {
      const group = new THREE.Group();
      const bodyMat = new THREE.MeshStandardMaterial({
        color: 0x1a062b,
        emissive: 0x4c1d95,
        emissiveIntensity: 0.7,
        roughness: 0.4
      });
      const body = new THREE.Mesh(new THREE.ConeGeometry(0.75, 1.8, 12), bodyMat);
      body.position.y = 0.9;
      group.add(body);

      // Glowing eyes
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0xe879f9 });
      const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), eyeMat);
      const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), eyeMat);
      eyeL.position.set(-0.22, 1.15, 0.52);
      eyeR.position.set(0.22, 1.15, 0.52);
      group.add(eyeL, eyeR);

      // Stun halo ring
      const stunRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.6, 0.06, 8, 20),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
      );
      stunRing.rotation.x = Math.PI / 2;
      stunRing.position.y = 2.0;
      stunRing.visible = false;
      group.add(stunRing);

      scene.add(group);
      v = { group, bodyMat, stunRing };
      shadeVisuals.set(s.id, v);
    }

    v.group.position.set(s.pos[0], 0, s.pos[2]);
    const angleToPlayer = Math.atan2(
      sim.player.pos[0] - s.pos[0],
      sim.player.pos[2] - s.pos[2]
    );
    v.group.rotation.y = angleToPlayer;

    if (s.state === 'stunned') {
      v.bodyMat.emissive.setHex(0x0284c7);
      v.stunRing.visible = true;
      v.stunRing.rotation.z = timeSec * 5;
    } else {
      v.bodyMat.emissive.setHex(0x581c87);
      v.stunRing.visible = false;
    }
  }
  for (const [id, v] of shadeVisuals.entries()) {
    if (!activeShadeIds.has(id)) {
      scene.remove(v.group);
      shadeVisuals.delete(id);
    }
  }

  // 5. Update Pulse shockwaves
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

  // 6. Update Guiding Ribbon particles & Cụ Rùa rune animation
  turtleRune.rotation.y = timeSec * 2.2;
  turtleRune.position.y = 1.15 + Math.sin(timeSec * 3) * 0.1;

  for (let i = guidingRibbonParticles.length - 1; i >= 0; i--) {
    const item = guidingRibbonParticles[i];
    item.life -= DT;
    if (item.life <= 0) {
      guideGroup.remove(item.mesh);
      guidingRibbonParticles.splice(i, 1);
    } else {
      item.mesh.position.y = item.baseY + Math.sin(timeSec * 5 + item.phase) * 0.18;
      item.mesh.material.opacity = Math.min(1, item.life * 0.5);
    }
  }

  // 7. Third-Person Camera follow
  const rad = (camYawDeg * Math.PI) / 180;
  const camDist = 11.5;
  const camHeight = 6.8;
  const targetCamX = sim.player.pos[0] + Math.sin(rad) * camDist;
  const targetCamZ = sim.player.pos[2] + Math.cos(rad) * camDist;
  camera.position.lerp(new THREE.Vector3(targetCamX, sim.player.pos[1] + camHeight, targetCamZ), 0.15);
  camera.lookAt(sim.player.pos[0], sim.player.pos[1] + 1.2, sim.player.pos[2]);
}

function updateHud() {
  if (!sim) return;

  const flamesStr = '🔥'.repeat(sim.player.flames) + '🖤'.repeat(Math.max(0, CONTRACT.tuning.flames - sim.player.flames));
  document.getElementById('hud-flames').textContent = flamesStr;
  document.getElementById('hud-carried').textContent = `${sim.player.carried} / ${CONTRACT.tuning.carry_capacity}`;

  const litCount = sim.lanterns.filter((l) => l.lit).length;
  document.getElementById('hud-lanterns').textContent = `${litCount} / ${sim.lanterns.length}`;
  document.getElementById('hud-time').textContent = `${Math.ceil(sim.time_left_s)}s`;
  document.getElementById('hud-score').textContent = String(sim.score);

  // Nearest unlit lantern hint & interact prompt
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

  const hintEl = document.getElementById('nearest-lantern-hint');
  const promptEl = document.getElementById('action-prompt');
  if (nearestUnlit) {
    const needed = CONTRACT.tuning.lantern_cost - nearestUnlit.deposited;
    hintEl.textContent = `Đèn gần nhất: ${nearestUnlit.id} (${nearestDist.toFixed(1)}m — cần thêm ${needed} đom đóm)`;
    if (nearestDist <= CONTRACT.tuning.interact_radius) {
      promptEl.style.opacity = '1';
      promptEl.textContent =
        sim.player.carried > 0
          ? `[E] Nạp đom đóm vào ${nearestUnlit.id} (${nearestUnlit.deposited}/${CONTRACT.tuning.lantern_cost})`
          : `${nearestUnlit.id} cần thêm ${needed} đom đóm — Hãy đi nhặt đom đóm vàng cam!`;
    } else {
      promptEl.style.opacity = '0';
    }
  } else {
    hintEl.textContent = 'Tất cả Đèn Lồng Lớn đã bừng sáng!';
    promptEl.style.opacity = '0';
  }

  // Cụ Rùa Giữ Bến contextual lore whispers ("Sáng tạo của tôi")
  const turtleDist = distXZ(sim.player.pos, [3.8, 0, 3.8]);
  const loreEl = document.getElementById('lore-whisper');
  if (turtleDist <= 6.0) {
    const whispers = [
      '🐢 Cụ Rùa Giữ Bến: "Đêm nay sương đen dày quá... Cháu hãy gom 3 đom đóm cho mỗi Đèn Lồng Lớn, hoặc bấm [G] để chuông gió dẫn lối!"',
      '🐢 Cụ Rùa Giữ Bến: "Đèn đầu tiên đã sáng rồi! Vùng sáng vàng cam quanh đèn là nơi Bóng Mực không dám bước vào đâu."',
      '🐢 Cụ Rùa Giữ Bến: "Hai ngọn đèn đã thức giấc, sương đen trên Đảo Bến đang tan dần rồi đó Mây ơi!"',
      '🐢 Cụ Rùa Giữ Bến: "Đã quá nửa chặng đường! Nếu Bóng Mực tới gần, hãy bấm [F] Tỏa Sáng để làm choáng chúng!"',
      '🐢 Cụ Rùa Giữ Bến: "Chỉ còn 1 chiếc Đèn Lồng Lớn cuối cùng thôi! Cả biển mây đang chờ ánh sáng của cháu!"'
    ];
    loreEl.textContent = whispers[Math.min(litCount, whispers.length - 1)];
    loreEl.style.opacity = '1';
  } else {
    loreEl.style.opacity = '0.75';
  }
}

function handleEvents(events) {
  for (const ev of events) {
    if (ev.name === 'mote_picked') {
      sfx.playPickup(ev.data.carried);
    } else if (ev.name === 'deposit') {
      sfx.playDeposit();
    } else if (ev.name === 'lantern_lit') {
      sfx.playLanternLit();
    } else if (ev.name === 'pulse') {
      sfx.playPulse();
      spawnPulseWaveEffect(sim.player.pos);
    } else if (ev.name === 'player_hit') {
      sfx.playHit();
    } else if (ev.name === 'game_over') {
      const modal = document.getElementById('modal-overlay');
      const title = document.getElementById('modal-title');
      const desc = document.getElementById('modal-desc');
      const scoreEl = document.getElementById('modal-score');

      modal.classList.add('active');
      scoreEl.textContent = `Tổng điểm: ${sim.score}`;

      if (ev.data.result === 'won') {
        sfx.playWin();
        title.textContent = '🏮 ĐẢO ĐÈN LỒNG BỪNG SÁNG!';
        desc.textContent =
          'Chúc mừng Mây! Cả 5 chiếc Đèn Lồng Lớn trên Đảo Bến đã được thắp sáng, xua tan màn sương đen và Bóng Mực!';
      } else {
        sfx.playLose();
        title.textContent = '🌑 SƯƠNG ĐEN BAO PHỦ...';
        desc.textContent =
          ev.data.reason === 'no_flames'
            ? 'Ngọn lửa hộ mệnh của Mây đã tắt vì Bóng Mực. Hãy thử lại và dùng [F] Tỏa Sáng hoặc nấp vào vùng sáng của đèn nhé!'
            : 'Bình minh đã tới trước khi Mây kịp thắp sáng hết 5 Đèn Lồng Lớn.';
      }
    }
  }
}

// Fixed 60Hz timestep accumulator loop
let lastTime = performance.now();
let accumulator = 0;

initGame(2026);

function animate(now) {
  requestAnimationFrame(animate);

  const deltaSec = Math.min(0.1, (now - lastTime) / 1000);
  lastTime = now;

  if (sim && sim.state === 'playing') {
    accumulator += deltaSec;
    while (accumulator >= DT) {
      const frame = buildInputFrame();
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
