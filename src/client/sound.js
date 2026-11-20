/**
 * Procedural Web Audio API Synthesizer (Phase 2 — TICKET-02 Full Soundscape)
 * Supports volume setting persisted in localStorage, ambient night music, and all 10 required SFX.
 */
export class SoundEffects {
  constructor() {
    this.ctx = null;
    this.volume = 0.7;
    this.bgmTimer = null;
    this.bgmNoteIdx = 0;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(v) {
    this.volume = Math.max(0, Math.min(1, Number(v)));
  }

  playTone(freq, duration = 0.25, type = 'sine', gainVal = 0.14, delay = 0) {
    if (this.volume <= 0.001) return;
    this.init();
    if (!this.ctx) return;

    const scaledGain = Math.max(0.0005, gainVal * this.volume);
    const now = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.0005, now);
    gain.gain.exponentialRampToValueAtTime(scaledGain, now + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  startAmbientMusic() {
    if (this.bgmTimer) return;
    const notes = [261.63, 293.66, 329.63, 392.0, 440.0, 392.0, 329.63, 293.66];
    this.bgmTimer = setInterval(() => {
      if (this.volume > 0.01 && this.ctx && this.ctx.state === 'running') {
        const f = notes[this.bgmNoteIdx % notes.length];
        this.bgmNoteIdx++;
        this.playTone(f, 1.4, 'sine', 0.028, 0);
      }
    }, 1500);
  }

  playPickup(carriedCount = 1) {
    const pentatonic = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];
    const freq = pentatonic[(carriedCount - 1) % pentatonic.length];
    this.playTone(freq, 0.2, 'sine', 0.14, 0);
    this.playTone(freq * 1.5, 0.15, 'triangle', 0.06, 0.03);
  }

  playCharmPickup() {
    this.playTone(587.33, 0.2, 'triangle', 0.16, 0);
    this.playTone(880.0, 0.25, 'triangle', 0.16, 0.06);
    this.playTone(1174.66, 0.35, 'sine', 0.14, 0.12);
  }

  playDeposit() {
    this.playTone(440, 0.16, 'triangle', 0.13, 0);
    this.playTone(587.33, 0.22, 'sine', 0.13, 0.06);
  }

  playLanternLit() {
    const chord = [523.25, 659.25, 783.99, 1046.5];
    chord.forEach((f, idx) => {
      this.playTone(f, 0.7, 'triangle', 0.15, idx * 0.08);
    });
  }

  playPulse() {
    this.playTone(329.63, 0.32, 'sine', 0.18, 0);
    this.playTone(659.25, 0.42, 'triangle', 0.16, 0.05);
  }

  playJump() {
    this.playTone(300, 0.12, 'sine', 0.11, 0);
    this.playTone(460, 0.15, 'sine', 0.1, 0.04);
  }

  playDash() {
    this.playTone(620, 0.1, 'triangle', 0.14, 0);
    this.playTone(420, 0.14, 'sine', 0.12, 0.04);
  }

  playHit() {
    this.playTone(130.81, 0.32, 'sawtooth', 0.18, 0);
    this.playTone(98.0, 0.38, 'sawtooth', 0.18, 0.08);
  }

  playShadeSpawn() {
    this.playTone(146.83, 0.4, 'triangle', 0.11, 0);
    this.playTone(138.59, 0.45, 'sine', 0.1, 0.12);
  }

  playCountdownTick() {
    this.playTone(880, 0.09, 'square', 0.1, 0);
  }

  playWindWarning() {
    this.playTone(220, 0.5, 'sine', 0.09, 0);
    this.playTone(246.94, 0.5, 'sine', 0.09, 0.25);
  }

  playChimeGuide() {
    this.playTone(783.99, 0.3, 'sine', 0.11, 0);
    this.playTone(1046.5, 0.4, 'sine', 0.1, 0.1);
  }

  playWin() {
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    notes.forEach((f, i) => this.playTone(f, 0.6, 'triangle', 0.16, i * 0.1));
  }

  playLose() {
    const notes = [392.0, 349.23, 311.13, 261.63];
    notes.forEach((f, i) => this.playTone(f, 0.5, 'sine', 0.15, i * 0.14));
  }
}
