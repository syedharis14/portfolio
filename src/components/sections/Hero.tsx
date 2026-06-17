"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/content/profile";
import { asset } from "@/lib/asset";
import { VoxelHero } from "../three/VoxelHero";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";

const stats = [
  { value: "8+", label: "industries shipped" },
  { value: "10+", label: "production systems" },
  { value: "Web · Mobile · AI", label: "full stack" },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* scanline accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 right-0 top-0 h-px animate-scan bg-gradient-to-r from-transparent via-grass/40 to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
        {/* Left: copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 px-3 py-1.5">
              <Icon name="trophy" size={13} className="text-gold" />
              <span className="label text-gold">{profile.badge}</span>
            </span>
            <span className="inline-flex items-center gap-2 border border-line-2 bg-panel/60 px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse-glow bg-emerald" />
              <span className="label text-emerald">{profile.availability}</span>
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            <span className="block">I build &amp; ship</span>
            <span className="text-gradient block">production systems</span>
            <span className="mt-2 flex h-[1.2em] items-center gap-3 text-2xl sm:text-3xl lg:text-4xl">
              <span className="text-ink-faint">as a</span>
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={i}
                    initial={{ y: "60%", opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: "-60%", opacity: 0, filter: "blur(6px)" }}
                    transition={{ duration: 0.4 }}
                    className="inline-block text-grass"
                  >
                    {profile.roles[i]}
                  </motion.span>
                </AnimatePresence>
                <span className="ml-0.5 inline-block h-[1em] w-[3px] translate-y-0.5 animate-blink bg-grass align-middle" />
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg"
          >
            {profile.subhead} I take products from data model to deploy pipeline — clean
            architecture on the backend, polished web &amp; mobile on the front.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="/contact" variant="primary" icon="arrow-right">
              Start a project
            </Button>
            <Button href="/work" variant="block" icon="boxes">
              View the work
            </Button>
            <a
              href={asset(profile.resumeUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-1.5 text-sm text-ink-dim underline-offset-4 hover:text-ink hover:underline"
            >
              <Icon name="external-link" size={14} /> Résumé
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line/60 pt-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-xl font-semibold text-ink sm:text-2xl">{s.value}</p>
                <p className="mt-1 font-mono text-[11px] leading-tight text-ink-faint">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D voxels */}
        <div className="relative h-[340px] w-full sm:h-[440px] lg:h-[560px]">
          <div className="absolute inset-0">
            <VoxelHero />
          </div>
          <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[10px] text-ink-faint">
            drag to orbit · built with three.js
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint md:flex"
      >
        <span className="label">scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-8 w-px bg-gradient-to-b from-grass to-transparent"
        />
      </motion.div>
    </section>
  );
}
