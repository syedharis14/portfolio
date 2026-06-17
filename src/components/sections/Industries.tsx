import Link from "next/link";
import { industries } from "@/content/industries";
import { projects } from "@/content/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { Icon } from "../ui/Icon";
import { accentHex } from "@/lib/accents";

export function Industries() {
  return (
    <section id="industries" className="relative pt-16 pb-16 sm:pt-20 sm:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Biomes / Niches"
          title={<>Depth across <span className="text-gradient">every industry</span> I touch</>}
          lede="I don't bounce between throwaway projects. Each vertical below is a system that shipped — with its own domain model, compliance shape, and integration surface."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line-2 bg-line-2 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => {
            const hex = accentHex[ind.accent];
            const count = projects.filter((p) => p.industryId === ind.id).length;
            const first = ind.projectSlugs[0];
            return (
              <RevealItem key={ind.id}>
                <Link
                  href={`/work/${first}`}
                  className="group relative flex h-full flex-col bg-panel/80 p-6 transition-colors duration-300 hover:bg-panel-2"
                >
                  <span
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    style={{ background: hex }}
                  />
                  <div className="flex items-center justify-between">
                    <span
                      className="grid h-12 w-12 place-items-center voxel-edge transition-transform duration-300 group-hover:-translate-y-0.5"
                      style={{ background: `${hex}1c`, color: hex }}
                    >
                      <Icon name={ind.icon} size={22} />
                    </span>
                    <span className="font-mono text-[11px] text-ink-faint">
                      {count} {count === 1 ? "build" : "builds"}
                    </span>
                  </div>
                  <p className="mt-5 label" style={{ color: hex }}>{ind.biome}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-ink">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">{ind.blurb}</p>
                  <span className="mt-auto pt-5 inline-flex items-center gap-1.5 font-mono text-[11px] text-ink-faint transition-colors group-hover:text-ink">
                    explore <Icon name="arrow-right" size={13} />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
