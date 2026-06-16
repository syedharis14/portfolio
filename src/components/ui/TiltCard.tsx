"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion, useTransform } from "motion/react";
import { cn } from "@/lib/cn";

/** 3D tilt-on-hover card with a moving spotlight glow. */
export function TiltCard({
  children,
  className,
  glow = "#6cdf6c",
}: {
  children: ReactNode;
  className?: string;
  glow?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rx = useSpring(useTransform(py, [0, 1], [6, -6]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(px, [0, 1], [-6, 6]), { stiffness: 200, damping: 18 });
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function reset() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: reduce ? 0 : rx, rotateY: reduce ? 0 : ry, transformPerspective: 900 }}
      className={cn("group/tilt relative [transform-style:preserve-3d]", className)}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
        style={{
          background: useTransform(
            [gx, gy],
            ([x, y]) => `radial-gradient(220px 220px at ${x} ${y}, ${glow}22, transparent 70%)`,
          ),
        }}
      />
      {children}
    </motion.div>
  );
}
