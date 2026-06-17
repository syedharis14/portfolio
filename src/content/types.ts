/**
 * Content model — the single source of truth for the whole site.
 * Pages and components read exclusively from these typed structures so that
 * adding a project or industry never requires touching layout code.
 */

export type AccentKey = "grass" | "diamond" | "gold" | "redstone" | "amethyst" | "emerald";

export type ProjectLink = {
  label: string;
  url: string;
  kind: "live" | "npm" | "github" | "case" | "appstore";
};

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  /** Short industry/vertical label shown on cards. */
  industry: string;
  /** Industry id this project belongs to (see industries.ts). */
  industryId: string;
  role: string;
  period: string;
  status: "Live in production" | "Active development" | "Shipped" | "Published" | "Prototype" | "Under NDA";
  /** Confidential client work — hides name/nature, shows only stack + an NDA notice. */
  confidential?: boolean;
  /** Engagement sourced via Toptal — renders a Toptal badge on the card & case study. */
  toptal?: boolean;
  /** One punchy line for cards + hero. */
  tagline: string;
  accent: AccentKey;
  featured: boolean;
  stack: string[];
  links?: ProjectLink[];
  metrics?: Metric[];

  /* ---- Case-study body: the 8-section structure ----
     summary is always shown; the rest are omitted for confidential work. */
  /** Elevator pitch — 1–2 sentences. */
  summary: string;
  /** Fuller context: what it is, who it's for, my role, scope. */
  overview?: string;
  problem?: string;
  solution?: string[];
  results?: string[];
  keyFeatures?: string[];
  technicalDetails?: string[];
  lessons?: string[];

  /** Whether this is NDA/client work shown with permission. */
  client?: string;
};

export type Industry = {
  id: string;
  name: string;
  /** Minecraft "biome" flavour name for the hybrid theme. */
  biome: string;
  blurb: string;
  accent: AccentKey;
  /** lucide-react icon name resolved in the component. */
  icon: string;
  projectSlugs: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type ExperienceRole = {
  title: string;
  period: string;
  bullets: string[];
};

export type Experience = {
  company: string;
  url?: string;
  /** Most recent role first. */
  roles: ExperienceRole[];
};

export type Profile = {
  name: string;
  shortName: string;
  initials: string;
  roles: string[];
  headline: string;
  subhead: string;
  location: string;
  email: string;
  availability: string;
  /** Credential chip, e.g. Toptal. */
  badge: string;
  yearsExperience: string;
  resumeUrl: string;
  socials: { label: string; url: string; icon: string }[];
  values: { title: string; body: string; icon: string }[];
  skills: SkillGroup[];
};
