import { profile } from "@/content/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { Icon } from "../ui/Icon";
import { Marquee } from "../ui/Marquee";
import { OpenInventoryButton } from "../ui/OpenInventoryButton";

export function Approach() {
  const allTech = profile.skills.flatMap((g) => g.items);
  const total = allTech.length;

  return (
    <section className="relative overflow-hidden pt-0 pb-16 sm:pb-20">
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

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8">
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

        {/* toolkit → opens the inventory chest */}
        <Reveal>
          <div className="mt-10 flex flex-col items-start gap-5 glass border border-line-2 p-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center voxel-edge bg-grass/10 text-grass">
                <Icon name="boxes" size={22} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                  A full-stack toolkit — {total}+ technologies
                </h3>
                <p className="mt-1 max-w-lg text-sm leading-relaxed text-ink-dim">
                  Backend, web, mobile, AI and the integrations that tie them together. The full stack
                  lives in the inventory chest.
                </p>
              </div>
            </div>
            <OpenInventoryButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
