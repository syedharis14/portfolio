/**
 * Chest SFX. Default is a Web Audio synth (no asset, no copyright) that mimics a
 * wooden chest: latch click → creak → low thunk. If you drop a real sound at
 * public/sounds/chest-open.mp3 it's used automatically instead.
 */
import { asset } from "./asset";

let ctx: AudioContext | null = null;
let preferFile = true;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const w = window as unknown as {
      AudioContext?: typeof AudioContext;
      webkitAudioContext?: typeof AudioContext;
    };
    const AC = w.AudioContext ?? w.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function noise(ac: AudioContext, dur: number) {
  const len = Math.floor(ac.sampleRate * dur);
  const buf = ac.createBuffer(1, len, ac.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  return buf;
}

function synthChest(reverse = false) {
  const ac = getCtx();
  if (!ac) return;
  const t = ac.currentTime;
  const master = ac.createGain();
  master.gain.value = reverse ? 0.35 : 0.5;
  master.connect(ac.destination);

  // latch click — short filtered noise burst
  const n = ac.createBufferSource();
  n.buffer = noise(ac, 0.05);
  const bp = ac.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = 1800;
  bp.Q.value = 1.2;
  const ng = ac.createGain();
  ng.gain.setValueAtTime(0.0001, t);
  ng.gain.exponentialRampToValueAtTime(0.45, t + 0.005);
  ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
  n.connect(bp).connect(ng).connect(master);
  n.start(t);
  n.stop(t + 0.06);

  // wooden creak — sawtooth sweep through a lowpass
  const o = ac.createOscillator();
  o.type = "sawtooth";
  const f0 = reverse ? 330 : 190;
  const f1 = reverse ? 190 : 330;
  o.frequency.setValueAtTime(f0, t + 0.04);
  o.frequency.exponentialRampToValueAtTime(f1, t + 0.22);
  const lp = ac.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 900;
  lp.Q.value = 4;
  const og = ac.createGain();
  og.gain.setValueAtTime(0.0001, t + 0.04);
  og.gain.exponentialRampToValueAtTime(0.2, t + 0.09);
  og.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
  o.connect(lp).connect(og).connect(master);
  o.start(t + 0.04);
  o.stop(t + 0.28);

  // low thunk
  const s = ac.createOscillator();
  s.type = "sine";
  s.frequency.setValueAtTime(120, t);
  const sg = ac.createGain();
  sg.gain.setValueAtTime(0.0001, t);
  sg.gain.exponentialRampToValueAtTime(0.28, t + 0.02);
  sg.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
  s.connect(sg).connect(master);
  s.start(t);
  s.stop(t + 0.2);
}

export function playChestOpen() {
  if (preferFile && typeof window !== "undefined") {
    try {
      const a = new Audio(asset("/sounds/chest-open.mp3"));
      a.volume = 0.5;
      a.play().catch(() => {
        preferFile = false;
        synthChest(false);
      });
      return;
    } catch {
      preferFile = false;
    }
  }
  synthChest(false);
}

export function playChestClose() {
  synthChest(true);
}
