import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${profile.name}.`,
};

const steps = [
  "You send a few lines about the problem.",
  "We hop on a call to scope it properly.",
  "I send a plan, timeline and quote.",
  "We build — shipping in small, reviewable slices.",
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8">
      <Reveal>
        <span className="label text-grass">Contact</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          Let&apos;s turn it into <span className="text-gradient">something that ships</span>.
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-dim">
          Tell me what you&apos;re building or what&apos;s stuck. I&apos;m {profile.availability.toLowerCase()} and
          usually reply within a day.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="glass border border-line-2 p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1} className="lg:col-span-5">
          <div className="space-y-8">
            <div>
              <p className="label mb-3 text-ink-faint">Direct</p>
              <a href={`mailto:${profile.email}`} className="font-mono text-lg text-grass hover:underline">
                {profile.email}
              </a>
              <p className="mt-3 inline-flex items-center gap-2 text-xs text-ink-faint">
                <Icon name="map-pin" size={13} /> {profile.location}
              </p>
            </div>

            <div>
              <p className="label mb-3 text-ink-faint">Find me</p>
              <div className="flex flex-col gap-2">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 border border-line/70 bg-panel/50 px-4 py-3 text-sm text-ink-dim transition-colors hover:border-grass/50 hover:text-grass"
                  >
                    <Icon name={s.icon} size={16} />
                    {s.label}
                    <Icon name="arrow-up-right" size={14} className="ml-auto opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="label mb-3 text-ink-faint">What happens next</p>
              <ol className="space-y-3">
                {steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink-dim">
                    <span className="grid h-5 w-5 shrink-0 place-items-center voxel-edge bg-grass/15 font-mono text-[10px] text-grass">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
