// High-end ambient audio engine: Soft cinematic chords and delicate glass chimes

class AcousticEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private loopTimer: any = null;
  private masterGain: GainNode | null = null;

  private init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.28, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Delicate crystal chime on card flip / interactions
  playChime() {
    try {
      this.init();
      if (!this.ctx || !this.masterGain) return;
      const now = this.ctx.currentTime;
      const notes = [659.25, 830.61, 987.77, 1318.51]; // E5, G#5, B5, E6 (Dreamy major 7th)

      notes.forEach((freq, i) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.07);

        gain.gain.setValueAtTime(0.001, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.12, now + i * 0.07 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.07 + 1.2);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now + i * 0.07);
        osc.stop(now + i * 0.07 + 1.3);
      });
    } catch {
      // Audio not permitted
    }
  }

  // Soft sparkle on hover/tap
  playSparkle() {
    try {
      this.init();
      if (!this.ctx || !this.masterGain) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1174.66, now); // D6
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.25); // A6

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch {
      // ignore
    }
  }

  // Soft breath/wind for candle blow followed by warm harp arpeggio
  playCandleBlow() {
    try {
      this.init();
      if (!this.ctx || !this.masterGain) return;
      const now = this.ctx.currentTime;

      // Soft white noise puff
      const bufSize = this.ctx.sampleRate * 0.45;
      const buffer = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.15));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, now);
      filter.frequency.linearRampToValueAtTime(150, now + 0.4);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.2, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.masterGain);
      noise.start(now);

      // Warm cinematic harp sweep
      const sweep = [440, 554.37, 659.25, 880, 1108.73, 1318.51];
      sweep.forEach((f, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + 0.25 + idx * 0.08);

        gain.gain.setValueAtTime(0.001, now + 0.25 + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.12, now + 0.25 + idx * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25 + idx * 0.08 + 1.6);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now + 0.25 + idx * 0.08);
        osc.stop(now + 0.25 + idx * 0.08 + 1.8);
      });
    } catch {
      // ignore
    }
  }

  // Soft Ambient Film Soundtrack (Gentle cinematic piano / harp chords)
  toggleAmbient(cb?: (active: boolean) => void) {
    this.init();
    if (!this.ctx) return false;

    if (this.isPlaying) {
      if (this.loopTimer) clearInterval(this.loopTimer);
      this.isPlaying = false;
      cb?.(false);
      return false;
    }

    this.isPlaying = true;
    cb?.(true);

    // Warm Romantic Progression: Amaj7 -> C#m7 -> F#m9 -> Bsus4
    const chords = [
      [220.00, 277.18, 329.63, 415.30], // A3, C#4, E4, G#4
      [277.18, 329.63, 415.30, 493.88], // C#4, E4, G#4, B4
      [185.00, 220.00, 277.18, 329.63, 415.30], // F#3, A3, C#4, E4, G#4
      [246.94, 329.63, 369.99, 440.00], // B3, E4, F#4, A4
    ];

    let chordIdx = 0;

    const playStep = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      const now = this.ctx.currentTime;
      const current = chords[chordIdx % chords.length];

      current.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.18);

        gain.gain.setValueAtTime(0.0001, now + idx * 0.18);
        gain.gain.exponentialRampToValueAtTime(0.06, now + idx * 0.18 + 0.35);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.18 + 4.2);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now + idx * 0.18);
        osc.stop(now + idx * 0.18 + 4.5);
      });

      chordIdx++;
    };

    playStep();
    this.loopTimer = setInterval(playStep, 4200);
    return true;
  }
}

export const sound = new AcousticEngine();
