"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/content/profile";
import { Icon } from "./Icon";
import { playChestOpen, playChestClose } from "@/lib/sound";

const PIPS = ["#6cdf6c", "#58e0e6", "#ffc83a", "#ff5d5d", "#b388ff", "#2ee59d"];

/** Floating double-chest → opens a Minecraft-style inventory of all skills. */
export function SkillsChest() {
  const [open, setOpen] = useState(false);

  // allow other components (e.g. the home "Open inventory" button) to open it
  useEffect(() => {
    const openIt = () => {
      playChestOpen();
      setOpen(true);
    };
    window.addEventListener("open-skills", openIt);
    return () => window.removeEventListener("open-skills", openIt);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        playChestClose();
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* floating chest button */}
      <button
        onClick={() => {
          playChestOpen();
          setOpen(true);
        }}
        aria-label="Open skill inventory"
        data-cursor
        className="group fixed bottom-5 right-5 z-40 flex flex-col items-center gap-1.5"
      >
        <span className="relative block h-[60px] w-[88px] animate-float-slow transition-transform duration-200 group-hover:-translate-y-1">
          <Chest />
          {/* hover tooltip */}
          <span className="pointer-events-none absolute -top-9 right-0 whitespace-nowrap border border-line-2 bg-void/90 px-2.5 py-1 font-mono text-[10px] text-ink-dim opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
            open skill inventory
          </span>
        </span>
        <span className="label text-[8px] text-ink-faint transition-colors group-hover:text-grass">Skills</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-void/85 backdrop-blur-md"
              onClick={() => {
                playChestClose();
                setOpen(false);
              }}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Skill inventory"
              initial={{ scale: 0.94, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 8 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="relative z-10 flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden border border-line-2 bg-deep voxel-edge"
            >
              {/* title bar */}
              <div className="flex items-center justify-between border-b border-line-2 bg-panel-2 px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <span className="relative block h-7 w-10"><Chest /></span>
                  <h2 className="font-pixel text-[11px] text-ink">Skill Inventory</h2>
                </div>
                <button
                  onClick={() => {
                    playChestClose();
                    setOpen(false);
                  }}
                  aria-label="Close"
                  className="grid h-8 w-8 place-items-center border border-line-2 text-ink-dim transition-colors hover:border-redstone/60 hover:text-redstone"
                >
                  <Icon name="close" size={16} />
                </button>
              </div>

              {/* slots */}
              <div className="overflow-y-auto px-5 py-6">
                <div className="space-y-7">
                  {profile.skills.map((group, gi) => (
                    <div key={group.label}>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 voxel-edge" style={{ background: PIPS[gi % PIPS.length] }} />
                        <p className="label text-ink-dim">{group.label}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 bg-[#0b1310] px-3 py-2.5 shadow-[inset_2px_2px_0_#00000066,inset_-2px_-2px_0_#ffffff0d]"
                          >
                            <span
                              className="h-2 w-2 shrink-0 voxel-edge"
                              style={{ background: PIPS[gi % PIPS.length] }}
                            />
                            <span className="truncate text-[13px] text-ink-dim">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* footer hint */}
              <div className="border-t border-line-2 bg-panel/60 px-5 py-2.5 text-center font-mono text-[10px] text-ink-faint">
                {profile.skills.reduce((n, g) => n + g.items.length, 0)} items · press Esc or click outside to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Pixel-art Minecraft chest (SVG). */
function Chest() {
  return (
    <svg viewBox="0 0 36 28" className="h-full w-full" shapeRendering="crispEdges" aria-hidden>
      {/* dark outline */}
      <rect x="0" y="1" width="36" height="27" fill="#231908" />
      {/* lid */}
      <rect x="2" y="2" width="32" height="10" fill="#8a5d2b" />
      <rect x="2" y="2" width="32" height="2" fill="#a97e41" />
      <rect x="2" y="11" width="32" height="1" fill="#5a3d1d" />
      {/* base */}
      <rect x="2" y="13" width="32" height="13" fill="#7a522a" />
      <rect x="2" y="13" width="32" height="1" fill="#946233" />
      <rect x="2" y="22" width="32" height="4" fill="#5a3d1d" />
      {/* edge bevels */}
      <rect x="2" y="2" width="1" height="24" fill="#a97e41" />
      <rect x="33" y="2" width="1" height="24" fill="#4d3416" />
      {/* plank seams (double-chest) */}
      <rect x="12" y="2" width="1" height="24" fill="#00000038" />
      <rect x="24" y="2" width="1" height="24" fill="#00000038" />
      {/* iron latch */}
      <rect x="15" y="8" width="6" height="10" fill="#d3ccbc" />
      <rect x="15" y="8" width="6" height="2" fill="#ece6d8" />
      <rect x="19" y="8" width="2" height="10" fill="#a8a191" />
      <rect x="15" y="16" width="6" height="2" fill="#a8a191" />
      {/* keyhole */}
      <rect x="17" y="11" width="2" height="4" fill="#33301f" />
    </svg>
  );
}
