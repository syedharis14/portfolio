import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { CaseStudy } from "@/components/work/CaseStudy";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.name} — ${project.industry}`,
    description: project.summary,
    openGraph: { title: project.name, description: project.summary },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return <CaseStudy project={project} next={next} />;
}
