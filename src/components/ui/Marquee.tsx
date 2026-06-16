"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Seamless infinite marquee (two copies translated -50%). */
export function Marquee({
  children,
  speed = 28,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <motion.div
        className="flex shrink-0 items-center gap-10 pr-10"
        animate={reduce ? undefined : { x: ["0%", "-100%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        className="flex shrink-0 items-center gap-10 pr-10"
        animate={reduce ? undefined : { x: ["0%", "-100%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
