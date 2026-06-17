import Link from "next/link";
import type { Project } from "@/content/types";
import { accentHex } from "@/lib/accents";
import { Reveal } from "../ui/Reveal";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";

function BulletList({ items, hex }: { items: string[]; hex: string }) {
  return (
    <ul className="mt-5 space-y-3.5">
      {items.map((t) => (
        <li key={t} className="flex gap-3.5">
          <span className="mt-2 h-2 w-2 shrink-0 voxel-edge" style={{ background: hex }} />
          <span className="text-[15px] leading-relaxed text-ink-dim">{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="border-t border-line/70 py-9">
      <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{title}</h2>
      {children}
    </Reveal>
  );
}

export function CaseStudy({ project, next }: { project: Project; next: Project }) {
  const hex = accentHex[project.accent];

  return (
    <article className="relative pt-28">
      {/* ambient accent glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96"
        style={{ background: `radial-gradient(60% 100% at 50% 0%, ${hex}1a, transparent 70%)` }}
      />

      {/* Hero */}
      <header className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <Link href="/work" className="inline-flex items-center gap-1.5 font-mono text-[11px] text-ink-faint hover:text-grass">
            <Icon name="arrow-right" size={13} className="rotate-180" /> all work
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="label" style={{ color: hex }}>{project.industry}</span>
            {project.status === "Live in production" ? (
              <Badge tone="live">Live in production</Badge>
            ) : (
              <Badge tone="accent">{project.status}</Badge>
            )}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            {project.name}
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-dim">{project.tagline}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-line-2 bg-line-2 sm:grid-cols-4">
            {[
              { k: "Role", v: project.role },
              { k: "Timeline", v: project.period },
              { k: "Status", v: project.status },
              { k: "Client", v: project.client ?? "Personal" },
            ].map((row) => (
              <div key={row.k} className="bg-panel/80 p-4">
                <dt className="label text-ink-faint">{row.k}</dt>
                <dd className="mt-1.5 text-sm text-ink">{row.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {project.links && project.links.length > 0 && (
          <Reveal delay={0.25}>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <Button key={l.url} href={l.url} external variant="block" icon="external-link">
                  {l.label}
                </Button>
              ))}
            </div>
          </Reveal>
        )}
      </header>

      {/* metrics */}
      {project.metrics && (
        <div className="mx-auto mt-12 max-w-4xl px-5 sm:px-8">
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-line-2 bg-line-2 sm:grid-cols-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="bg-panel/80 p-5 text-center">
                  <p className="font-display text-2xl font-semibold" style={{ color: hex }}>{m.value}</p>
                  <p className="mt-1.5 font-mono text-[11px] leading-tight text-ink-faint">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      )}

      {/* Body — fixed 8-section structure */}
      <div className="mx-auto mt-10 max-w-4xl px-5 sm:px-8">
        <Reveal as="section" className="py-9">
          <p className="label mb-4 text-grass">Summary</p>
          <p className="text-lg leading-relaxed text-ink">{project.summary}</p>
        </Reveal>

        {project.confidential && (
          <Reveal as="section" className="py-2">
            <div className="glass flex flex-col gap-5 border border-gold/40 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center voxel-edge bg-gold/15 text-gold">
                  <Icon name="lock" size={18} />
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-ink">Under NDA</p>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-dim">
                    Active client engagement — the product name and what it does stay private until the
                    client clears them. I&apos;m happy to talk through the architecture, my role and the
                    key decisions on request, sharing whatever the client has approved.
                  </p>
                </div>
              </div>
              <Button href="/contact" variant="block" icon="arrow-right">Request details</Button>
            </div>
          </Reveal>
        )}

        {project.overview && (
          <Block title="Overview">
            <p className="mt-5 text-[15px] leading-relaxed text-ink-dim">{project.overview}</p>
          </Block>
        )}
        {project.problem && (
          <Block title="Problem">
            <p className="mt-5 text-[15px] leading-relaxed text-ink-dim">{project.problem}</p>
          </Block>
        )}
        {project.solution && <Block title="Solution"><BulletList items={project.solution} hex={hex} /></Block>}
        {project.results && <Block title="Results"><BulletList items={project.results} hex={hex} /></Block>}
        {project.keyFeatures && <Block title="Key Features"><BulletList items={project.keyFeatures} hex={hex} /></Block>}
        {project.technicalDetails && <Block title="Technical Details"><BulletList items={project.technicalDetails} hex={hex} /></Block>}
        {project.lessons && <Block title="Lessons Learned"><BulletList items={project.lessons} hex={hex} /></Block>}

        <Block title="Stack">
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="border border-line/70 bg-panel/50 px-2.5 py-1 font-mono text-[11px] text-ink-dim">
                {s}
              </span>
            ))}
          </div>
        </Block>
      </div>

      {/* next project */}
      <div className="mx-auto mt-10 max-w-4xl px-5 pb-8 sm:px-8">
        <Reveal>
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between gap-4 border border-line-2 bg-panel/60 p-6 transition-colors hover:border-grass/50"
          >
            <div>
              <p className="label text-ink-faint">Next case study</p>
              <p className="mt-1.5 font-display text-xl font-semibold text-ink group-hover:text-grass">{next.name}</p>
              <p className="mt-1 font-mono text-[11px] text-ink-faint">{next.industry}</p>
            </div>
            <Icon name="arrow-right" size={22} className="text-ink-faint transition-all group-hover:translate-x-1 group-hover:text-grass" />
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
