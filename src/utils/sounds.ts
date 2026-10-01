let ctx: AudioContext | null = null;
let initialized = false;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    try {
      ctx = new AudioContext();
    } catch {
      return null;
    }
  }
  if (ctx.state === "suspended") {
    ctx.resume().catch(() => {});
  }
  return ctx;
}

/** Called on first user interaction to unlock audio */
export function initAudio() {
  if (initialized) return;
  initialized = true;
  getCtx();
}

/** Short high-pitched tick — typewriter character */
export function playTick(volume = 0.04) {
  const c = getCtx();
  if (!c || c.state !== "running") return;

  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.connect(gain);
  gain.connect(c.destination);

  osc.type = "sine";
  osc.frequency.setValueAtTime(900 + Math.random() * 200, c.currentTime);

  gain.gain.setValueAtTime(volume, c.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.06);

  osc.start(c.currentTime);
  osc.stop(c.currentTime + 0.06);
}

/** Upward glide — skill tag hover */
export function playHover(volume = 0.025) {
  const c = getCtx();
  if (!c || c.state !== "running") return;

  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.connect(gain);
  gain.connect(c.destination);

  osc.type = "sine";
  osc.frequency.setValueAtTime(350, c.currentTime);
  osc.frequency.exponentialRampToValueAtTime(700, c.currentTime + 0.12);

  gain.gain.setValueAtTime(volume, c.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.18);

  osc.start(c.currentTime);
  osc.stop(c.currentTime + 0.18);
}

/** Soft low sweep — card or dot entering view */
export function playSweep(volume = 0.02) {
  const c = getCtx();
  if (!c || c.state !== "running") return;

  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.connect(gain);
  gain.connect(c.destination);

  osc.type = "sine";
  osc.frequency.setValueAtTime(180, c.currentTime);
  osc.frequency.exponentialRampToValueAtTime(420, c.currentTime + 0.25);

  gain.gain.setValueAtTime(0, c.currentTime);
  gain.gain.linearRampToValueAtTime(volume, c.currentTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.3);

  osc.start(c.currentTime);
  osc.stop(c.currentTime + 0.3);
}
