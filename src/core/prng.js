/**
 * Deterministic Seeded PRNG (Mulberry32)
 * Never use Math.random() in core simulation.
 */
export class SeededRNG {
  constructor(seed = 1) {
    this.state = (Number(seed) | 0) >>> 0;
    if (this.state === 0) this.state = 0x6d2b79f5;
  }

  next() {
    let t = (this.state += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  range(min, max) {
    return min + this.next() * (max - min);
  }

  int(min, max) {
    return Math.floor(this.range(min, max + 1));
  }
}
