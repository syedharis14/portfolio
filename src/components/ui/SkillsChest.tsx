"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/content/profile";
import { Icon } from "./Icon";

const PIPS = ["#6cdf6c", "#58e0e6", "#ffc83a", "#ff5d5d", "#b388ff", "#2ee59d"];

/** Floating double-chest → opens a Minecraft-style inventory of all skills. */
export function SkillsChest() {
  const [open, setOpen] = useState(false);

  // allow other components (e.g. the home "Open inventory" button) to open it
  useEffect(() => {
    const openIt = () => setOpen(true);
    window.addEventListener("open-skills", openIt);
    return () => window.removeEventListener("open-skills", openIt);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
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
        onClick={() => setOpen(true)}
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
            <div className="absolute inset-0 bg-void/85 backdrop-blur-md" onClick={() => setOpen(false)} />

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
                  onClick={() => setOpen(false)}
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

/** CSS voxel double-chest. */
function Chest() {
  return (
    <>
      <span className="absolute inset-0 bg-[#7a4f25] voxel-edge" />
      <span className="absolute inset-x-0 top-0 h-[34%] bg-[#8c5d2c] voxel-edge" />
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/40" />
      <span className="absolute left-1/2 top-[26%] h-[34%] w-[14%] -translate-x-1/2 bg-[#d2cabb] voxel-edge" />
    </>
  );
}
