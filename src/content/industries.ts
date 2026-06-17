import type { Industry } from "./types";

/**
 * Industry verticals — the "biomes" of the hybrid Minecraft theme.
 * Each maps to one or more case studies, so the work section can be
 * browsed by the niche a client cares about.
 */
export const industries: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    biome: "Clinical Plains",
    blurb:
      "Patient workflows, treatment tracking and medical records with secure, role-aware data handling.",
    accent: "redstone",
    icon: "heart-pulse",
    projectSlugs: ["brio-medical"],
  },
  {
    id: "automotive",
    name: "Automotive & Dealer SaaS",
    biome: "Iron Foundry",
    blurb:
      "Multi-tenant dealership platforms, F&I deal flow, staff scheduling and live DMS integrations.",
    accent: "diamond",
    icon: "car",
    projectSlugs: ["relay-automotive"],
  },
  {
    id: "fitness",
    name: "Health & Fitness",
    biome: "Verdant Hills",
    blurb:
      "AI-personalized training & nutrition, HealthKit / Health Connect sync, and subscription billing.",
    accent: "grass",
    icon: "dumbbell",
    projectSlugs: ["fittish"],
  },
  {
    id: "fintech",
    name: "Fintech & Trading",
    biome: "Gold Reserves",
    blurb:
      "Algorithmic trading engines and payment systems built with hard risk rules and encrypted-by-default handling.",
    accent: "gold",
    icon: "landmark",
    projectSlugs: ["pnlsaver"],
  },
  {
    id: "proptech",
    name: "PropTech & Real Estate",
    biome: "Survey Highlands",
    blurb:
      "AI property appraisal with RAG + vision, generating compliant valuation narratives from documents.",
    accent: "amethyst",
    icon: "building-2",
    projectSlugs: ["crossroads"],
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    biome: "Frozen Peaks",
    blurb:
      "Expedition-cruise booking platforms with fare engines, OAuth, and visual CMS-driven content.",
    accent: "diamond",
    icon: "ship",
    projectSlugs: ["polar-adventure"],
  },
  {
    id: "devtools",
    name: "Developer Tools & OSS",
    biome: "Crafting Table",
    blurb:
      "Published open-source tooling that ships to npm with full CI/CD and real users.",
    accent: "grass",
    icon: "terminal",
    projectSlugs: ["git-ai-commit"],
  },
];
