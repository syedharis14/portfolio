import { profile } from "@/content/profile";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { VoxelCube } from "../ui/VoxelCube";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden pt-10 pb-24 sm:pt-14 sm:pb-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="glass relative overflow-hidden border border-line-2 px-6 py-16 text-center sm:px-16 sm:py-20">
            {/* corner blocks */}
            <div className="pointer-events-none absolute -left-6 -top-6 opacity-60">
              <VoxelCube size={56} color="#6cdf6c" />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-4 opacity-50">
              <VoxelCube size={44} color="#58e0e6" />
            </div>

            <span className="label text-grass">Let&apos;s build</span>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
              Have a system worth building right?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg">
              Whether it&apos;s a new product, a rescue mission on a stalled codebase, or scaling
              what you have — I&apos;m {profile.availability.toLowerCase()}.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" variant="primary" icon="arrow-right">
                Start a project
              </Button>
              <Button href={`mailto:${profile.email}`} variant="block" icon="mail" external>
                {profile.email}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
