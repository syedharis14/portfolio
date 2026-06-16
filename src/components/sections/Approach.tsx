import { profile } from "@/content/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { Icon } from "../ui/Icon";
import { Marquee } from "../ui/Marquee";

export function Approach() {
  const allTech = profile.skills.flatMap((g) => g.items);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* tech marquee strip */}
      <Reveal>
        <div className="border-y border-line/70 bg-deep/60 py-4">
          <Marquee speed={34}>
            {allTech.map((t, i) => (
              <span key={`${t}-${i}`} className="flex items-center gap-3 font-mono text-sm text-ink-faint">
                {t} <span className="text-grass/50">◆</span>
              </span>
            ))}
          </Marquee>
        </div>
      </Reveal>

      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="How I Build"
          title={<>Principles I <span className="text-gradient">don&apos;t compromise</span> on</>}
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-line-2 bg-line-2 md:grid-cols-2">
          {profile.values.map((v) => (
            <RevealItem key={v.title}>
              <div className="group h-full bg-panel/80 p-8 transition-colors hover:bg-panel-2">
                <span className="grid h-12 w-12 place-items-center voxel-edge bg-grass/10 text-grass transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon name={v.icon} size={22} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-dim">{v.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* skills */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
              A full-stack toolkit
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-dim">
              From database schema to deploy pipeline — backend, web, mobile, AI and the
              integrations that tie them together.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-8">
            {profile.skills.map((g) => (
              <Reveal key={g.label}>
                <p className="label mb-3 text-grass">{g.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="border border-line/70 bg-panel/50 px-2.5 py-1 font-mono text-[11px] text-ink-dim transition-colors hover:border-grass/50 hover:text-grass"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
