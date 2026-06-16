"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Industry, Project } from "@/content/types";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/cn";

export function WorkExplorer({
  projects,
  industries,
}: {
  projects: Project[];
  industries: Industry[];
}) {
  const [filter, setFilter] = useState<string>("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.industryId === filter);

  const chips = [{ id: "all", name: "All work" }, ...industries.map((i) => ({ id: i.id, name: i.name }))];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => {
          const active = filter === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={cn(
                "border px-3.5 py-2 font-mono text-[12px] transition-colors",
                active
                  ? "border-grass/60 bg-grass/10 text-grass"
                  : "border-line-2 text-ink-dim hover:border-line-2 hover:text-ink",
              )}
            >
              {c.name}
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="h-full"
            >
              <ProjectCard project={p} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
