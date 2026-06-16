"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

/**
 * Custom magnetic cursor: a precise dot + a lagging ring that grows and
 * tints when hovering interactive elements. Disabled on touch / reduced motion.
 */
export function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add("cursor-ready");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHover(!!t?.closest("a, button, [data-cursor]"));
    };
    const dn = () => setDown(true);
    const up = () => setDown(false);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", dn);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", dn);
      window.removeEventListener("pointerup", up);
      document.body.classList.remove("cursor-ready");
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-grass"
        style={{ x, y, borderRadius: 2 }}
        animate={{ scale: down ? 0.6 : 1 }}
        transition={{ duration: 0.12 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] -translate-x-1/2 -translate-y-1/2 border"
        style={{ x: ringX, y: ringY, borderRadius: 3 }}
        animate={{
          width: hover ? 52 : 30,
          height: hover ? 52 : 30,
          borderColor: hover ? "#58e0e6" : "#2a3a31",
          // zero-alpha hex instead of the `transparent` keyword (motion can't animate keywords)
          backgroundColor: hover ? "#58e0e615" : "#58e0e600",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
      />
    </>
  );
}
