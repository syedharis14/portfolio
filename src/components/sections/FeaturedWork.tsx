import { featuredProjects } from "@/content/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "../ui/Reveal";
import { ProjectCard } from "../work/ProjectCard";
import { Button } from "../ui/Button";

export function FeaturedWork() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker="Selected Work"
            title={<>Systems that are <span className="text-gradient">live right now</span></>}
            lede="A sample of products running in production — at dealerships, in clinics, in app stores."
          />
          <Reveal delay={0.1}>
            <Button href="/work" variant="block" icon="arrow-right">
              All projects
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {featuredProjects.map((p, i) => (
            <RevealItem key={p.slug} className="h-full">
              <ProjectCard project={p} index={i} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
