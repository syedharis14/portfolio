import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { industries } from "@/content/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkExplorer } from "@/components/work/WorkExplorer";

export const metadata: Metadata = {
  title: "Work",
  description: "Production systems shipped across healthcare, automotive, fintech, fitness, AI and more.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8">
      <SectionHeading
        kicker="The Build Log"
        title={<>Every block I&apos;ve <span className="text-gradient">placed</span></>}
        lede="Filter by industry to see how the same engineering discipline adapts to each domain — from clinical data to dealership deal-flow to algorithmic trading."
      />
      <div className="mt-14">
        <WorkExplorer projects={projects} industries={industries} />
      </div>
    </div>
  );
}
