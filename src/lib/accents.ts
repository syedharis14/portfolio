import type { AccentKey } from "@/content/types";

/** Raw hex per accent — used for inline styles, glows and the 3D scene. */
export const accentHex: Record<AccentKey, string> = {
  grass: "#6cdf6c",
  emerald: "#2ee59d",
  diamond: "#58e0e6",
  gold: "#ffc83a",
  redstone: "#ff5d5d",
  amethyst: "#b388ff",
};

/* Static class strings (listed literally so Tailwind's scanner keeps them). */
export const accentText: Record<AccentKey, string> = {
  grass: "text-grass",
  emerald: "text-emerald",
  diamond: "text-diamond",
  gold: "text-gold",
  redstone: "text-redstone",
  amethyst: "text-amethyst",
};

export const accentBorder: Record<AccentKey, string> = {
  grass: "border-grass/40",
  emerald: "border-emerald/40",
  diamond: "border-diamond/40",
  gold: "border-gold/40",
  redstone: "border-redstone/40",
  amethyst: "border-amethyst/40",
};

/** Build a soft glow box-shadow from an accent hex. */
export function accentGlow(hex: string, strength = 0.5) {
  return `0 0 0 1px ${hex}22, 0 12px 40px -12px ${hex}${Math.round(strength * 99)
    .toString()
    .padStart(2, "0")}`;
}
