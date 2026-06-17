"use client";

import Link from "next/link";
import { TiltCard } from "../ui/TiltCard";
import { Badge } from "../ui/Badge";
import { Icon } from "../ui/Icon";
import { accentHex, accentText } from "@/lib/accents";
import type { Project } from "@/content/types";

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  const hex = accentHex[project.accent];
  return (
    <TiltCard glow={hex} className="h-full">
      <Link
        href={`/work/${project.slug}`}
        className="relative flex h-full flex-col overflow-hidden border border-line-2 bg-panel/60 p-6 transition-colors duration-300 hover:border-line-2 [transform:translateZ(0)]"
        style={{ boxShadow: `inset 0 1px 0 0 #ffffff0a` }}
      >
        {/* top accent bar */}
        <span className="absolute inset-x-0 top-0 h-0.5" style={{ background: hex }} />

        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="grid h-11 w-11 place-items-center voxel-edge"
              style={{ background: `${hex}1f`, color: hex }}
            >
              <Icon name={industryIcon(project.industryId)} size={20} />
            </span>
            <div>
              {typeof index === "number" && (
                <span className="font-mono text-[11px] text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
              <p className={`font-mono text-[11px] ${accentText[project.accent]}`}>{project.industry}</p>
            </div>
          </div>
          {project.confidential ? (
            <Badge tone="accent"><Icon name="lock" size={11} /> Under NDA</Badge>
          ) : project.status === "Live in production" ? (
            <Badge tone="live">Live</Badge>
          ) : (
            <Badge>{project.status}</Badge>
          )}
        </div>

        <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-dim">{project.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="border border-line/70 px-2 py-0.5 font-mono text-[10px] text-ink-faint">
              {s}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2 py-0.5 font-mono text-[10px] text-ink-faint">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="font-mono text-[11px] text-ink-faint">{project.role}</span>
          <span
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group-hover:gap-2.5"
            style={{ color: hex }}
          >
            {project.confidential ? "Details on request" : "Case study"} <Icon name="arrow-up-right" size={15} />
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}

function industryIcon(id: string) {
  const map: Record<string, string> = {
    healthcare: "heart-pulse",
    automotive: "car",
    fitness: "dumbbell",
    fintech: "landmark",
    proptech: "building-2",
    "sports-ai": "trophy",
    travel: "ship",
    devtools: "terminal",
    confidential: "lock",
  };
  return map[id] ?? "boxes";
}
