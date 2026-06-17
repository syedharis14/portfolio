import { experience, education } from "@/content/experience";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";

export function ExperienceTimeline() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-5 sm:px-8">
      <SectionHeading
        kicker="Career"
        title={<>Where I&apos;ve <span className="text-gradient">shipped</span></>}
      />

      <div className="mt-12 max-w-3xl space-y-8">
        {experience.map((exp) => (
          <Reveal key={exp.company}>
            <div className="flex gap-5">
              {/* rail */}
              <div className="flex flex-col items-center pt-1">
                <span className="h-4 w-4 shrink-0 voxel-edge bg-grass" />
                <span className="mt-2 w-px flex-1 bg-line-2" />
              </div>
              {/* content */}
              <div className="flex-1 pb-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-xl font-semibold text-ink">{exp.company}</h3>
                  {exp.url && (
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-grass">
                      <Icon name="arrow-up-right" size={14} />
                    </a>
                  )}
                </div>
                <div className="mt-4 space-y-6">
                  {exp.roles.map((r) => (
                    <div key={r.title}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <p className="font-medium text-ink">{r.title}</p>
                        <p className="font-mono text-[11px] text-ink-faint">{r.period}</p>
                      </div>
                      <ul className="mt-2 space-y-1.5">
                        {r.bullets.map((b) => (
                          <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink-dim">
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-grass/60" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        {/* education */}
        <Reveal>
          <div className="flex gap-5">
            <div className="flex flex-col items-center pt-1">
              <span className="h-4 w-4 shrink-0 voxel-edge bg-diamond" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-ink">{education.degree}</p>
              <p className="text-sm text-ink-dim">{education.school}</p>
              <p className="mt-0.5 font-mono text-[11px] text-ink-faint">{education.period}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
