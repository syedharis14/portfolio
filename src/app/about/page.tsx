import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { VoxelPlayground } from "@/components/three/VoxelPlayground";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";

export const metadata: Metadata = {
  title: "About",
  description: profile.subhead,
};

const numbers = [
  { value: "8+", label: "industries shipped to" },
  { value: "10+", label: "production systems" },
  { value: "3", label: "platforms — web, mobile, AI" },
  { value: "1", label: "published npm package" },
];

export default function AboutPage() {
  return (
    <div className="pb-24 pt-32">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="label text-grass">About {profile.shortName}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
                I turn fuzzy product ideas into <span className="text-gradient">systems that run</span> in the real world.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-dim">
                <p>
                  I&apos;m {profile.name} — a Toptal-vetted Principal Software Engineer (part of
                  the network&apos;s top 3% of global talent). My happy place is the whole stack: a
                  clean, domain-driven backend; a fast, considered frontend; a mobile app that feels
                  native; and the integrations, queues and pipelines that hold it all together in
                  production.
                </p>
                <p>
                  Over the last few years I&apos;ve built and shipped software across very different
                  worlds — a multi-tenant SaaS that US car dealerships run their day on, a healthcare
                  platform handling sensitive patient workflows, an AI fitness app on the app stores,
                  a fleet-discount car marketplace with Stripe Connect payouts, and AI tools that read
                  documents and reason with guardrails. Different domains, same discipline.
                </p>
                <p>
                  I care about architecture that survives contact with real users, and about the
                  unglamorous details — validation, idempotency, access control, timezones — that
                  decide whether a system is trustworthy. And yes, I think great software can have a
                  bit of personality.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="primary" icon="arrow-right">Work with me</Button>
                <a href={profile.resumeUrl} className="inline-flex items-center gap-1.5 text-sm text-ink-dim hover:text-ink">
                  <Icon name="external-link" size={14} /> Download résumé
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4 text-xs text-ink-faint">
                <span className="inline-flex items-center gap-2 text-gold"><Icon name="trophy" size={13} /> {profile.badge}</span>
                <span className="inline-flex items-center gap-2"><Icon name="map-pin" size={13} /> {profile.location}</span>
                <span className="inline-flex items-center gap-2 text-emerald">
                  <span className="h-1.5 w-1.5 animate-pulse-glow bg-emerald" /> {profile.availability}
                </span>
              </div>
            </Reveal>
          </div>

          {/* interactive voxel plot */}
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <VoxelPlayground />
            </Reveal>
          </div>
        </div>
      </section>

      {/* numbers */}
      <section className="mx-auto mt-24 max-w-7xl px-5 sm:px-8">
        <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden border border-line-2 bg-line-2 sm:grid-cols-4">
          {numbers.map((n) => (
            <RevealItem key={n.label}>
              <div className="bg-panel/80 p-6 text-center">
                <p className="font-display text-3xl font-semibold text-ink">{n.value}</p>
                <p className="mt-1.5 font-mono text-[11px] leading-tight text-ink-faint">{n.label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* experience */}
      <ExperienceTimeline />

      {/* principles */}
      <section className="mx-auto mt-24 max-w-7xl px-5 sm:px-8">
        <SectionHeading kicker="How I Work" title={<>Principles I build by</>} />
        <RevealGroup className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-line-2 bg-line-2 md:grid-cols-2">
          {profile.values.map((v) => (
            <RevealItem key={v.title}>
              <div className="group h-full bg-panel/80 p-8 transition-colors hover:bg-panel-2">
                <span className="grid h-12 w-12 place-items-center voxel-edge bg-grass/10 text-grass transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon name={v.icon} size={22} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">{v.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-dim">{v.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* skills */}
      <section className="mx-auto mt-24 max-w-7xl px-5 sm:px-8">
        <SectionHeading kicker="Toolkit" title={<>What I reach for</>} />
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((g) => (
            <Reveal key={g.label}>
              <p className="label mb-3 text-grass">{g.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span key={s} className="border border-line/70 bg-panel/50 px-2.5 py-1 font-mono text-[11px] text-ink-dim transition-colors hover:border-grass/50 hover:text-grass">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
