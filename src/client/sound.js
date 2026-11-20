/**
 * Procedural Web Audio API Synthesizer (Pentatonic Fairy-Tale Soundscape)
 * Zero external assets required; works across all modern browsers.
 */
export class SoundEffects {
  constructor() {
    this.ctx = null;
    this.muted = false;
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

  playTone(freq, duration = 0.25, type = 'sine', gainVal = 0.12, delay = 0) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(gainVal, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  playPickup(carriedCount = 1) {
    const pentatonic = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];
    const freq = pentatonic[(carriedCount - 1) % pentatonic.length];
    this.playTone(freq, 0.22, 'sine', 0.14, 0);
    this.playTone(freq * 1.5, 0.18, 'triangle', 0.06, 0.04);
  }

  playDeposit() {
    this.playTone(440, 0.18, 'triangle', 0.12, 0);
    this.playTone(587.33, 0.24, 'sine', 0.12, 0.07);
  }

  playLanternLit() {
    const chord = [523.25, 659.25, 783.99, 1046.5];
    chord.forEach((f, idx) => {
      this.playTone(f, 0.7, 'triangle', 0.14, idx * 0.08);
    });
  }

  playPulse() {
    this.playTone(329.63, 0.35, 'sine', 0.18, 0);
    this.playTone(659.25, 0.45, 'triangle', 0.15, 0.05);
  }

  playHit() {
    this.playTone(130.81, 0.35, 'sawtooth', 0.16, 0);
    this.playTone(98.0, 0.4, 'sawtooth', 0.16, 0.08);
  }

  playChimeGuide() {
    this.playTone(783.99, 0.35, 'sine', 0.1, 0);
    this.playTone(1046.5, 0.45, 'sine', 0.09, 0.1);
  }

  playWin() {
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    notes.forEach((f, i) => this.playTone(f, 0.6, 'triangle', 0.15, i * 0.1));
  }

  playLose() {
    const notes = [392.0, 349.23, 311.13, 261.63];
    notes.forEach((f, i) => this.playTone(f, 0.5, 'sine', 0.14, i * 0.14));
  }
}
