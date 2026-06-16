import type { Profile } from "./types";

/**
 * Personal / positioning data.
 * NOTE → values marked PLACEHOLDER should be confirmed by Haris:
 *   location, yearsExperience, social URLs, resumeUrl.
 */
export const profile: Profile = {
  name: "Syed Haris",
  shortName: "Haris",
  initials: "SH",
  roles: [
    "Full-Stack Engineer",
    "Product Engineer",
    "Systems Architect",
    "AI Application Builder",
  ],
  headline: "I architect and ship production systems that real businesses run on.",
  subhead:
    "Full-stack & product engineer working across healthcare, automotive, fintech, and AI — from clean-architecture backends to polished web & mobile apps.",
  location: "Remote · Pakistan", // PLACEHOLDER — confirm
  email: "sharisdev08@gmail.com",
  availability: "Available for contract & full-time work",
  badge: "Toptal Developer · Top 3% Global Talent",
  yearsExperience: "5+", // PLACEHOLDER — confirm
  resumeUrl: "/resume.pdf", // PLACEHOLDER — drop a PDF in /public
  socials: [
    { label: "GitHub", url: "https://github.com/syedharis14", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/syed-haris-024295184/", icon: "linkedin" },
    { label: "Toptal", url: "https://www.toptal.com/developers/resume/syed-haris", icon: "trophy" },
    { label: "npm", url: "https://www.npmjs.com/~syedharis14", icon: "package" },
    { label: "Email", url: "mailto:sharisdev08@gmail.com", icon: "mail" },
  ],
  values: [
    {
      title: "Ship to production",
      body: "I don't build demos. My work runs live — at car dealerships, in clinics, in app stores — under real load with real money and real users.",
      icon: "rocket",
    },
    {
      title: "Architecture that scales",
      body: "Clean, layered, contract-driven systems. Domain-driven data models, typed boundaries, and abstractions that let new modules slot in without breaking what exists.",
      icon: "layers",
    },
    {
      title: "AI with guardrails",
      body: "LLM features that are reliable, not gimmicks — RAG pipelines, two-pass reasoning, structured output and business-rule guardrails on top of GPT-4o and Gemini.",
      icon: "brain",
    },
    {
      title: "End-to-end ownership",
      body: "Backend, web, mobile, infra and integrations. I take a product from data model to deploy pipeline and own the seams in between.",
      icon: "infinity",
    },
  ],
  skills: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "PHP", "SQL", "Python (light)"],
    },
    {
      label: "Backend",
      items: ["NestJS", "Node.js", "Express", "Laravel", "Prisma", "Sequelize", "PostgreSQL", "MySQL", "Redis", "BullMQ", "REST", "GraphQL"],
    },
    {
      label: "Frontend",
      items: ["React 19", "Next.js", "Vite", "TanStack Query", "Zustand", "Redux", "Tailwind CSS", "MUI", "Framer Motion"],
    },
    {
      label: "Mobile",
      items: ["React Native", "Expo", "EAS", "NativeWind"],
    },
    {
      label: "AI / ML",
      items: ["OpenAI GPT-4o", "Google Gemini", "LangChain", "LangGraph", "RAG", "pgvector", "Embeddings"],
    },
    {
      label: "Cloud & DevOps",
      items: ["AWS (ECS, S3, SES, ElastiCache)", "Vercel", "Supabase", "Docker", "GitHub Actions", "Bitbucket Pipelines"],
    },
    {
      label: "Integrations",
      items: ["Stripe / Stripe Connect", "RevenueCat", "Pusher", "Firebase", "CometChat", "Persona KYC", "Reynolds & Fortellis DMS"],
    },
  ],
};
