import type { Experience } from "./types";

/** Work history — most recent company & role first. */
export const experience: Experience[] = [
  {
    company: "People Fleet",
    url: "https://peoplefleet.co/",
    roles: [
      {
        title: "Sole Full-Stack Engineer · via Toptal",
        period: "2026 — Present",
        bullets: [
          "Sole engineer on a two-sided car marketplace: 39 Postgres tables, 180 migrations and 20 Supabase Edge Functions across ~480 commits.",
          "Designed the Stripe Connect money flow holding $500 buyer deposits across a 72-hour sale plus 5-day dispute window — separate charges and transfers, because the hold exceeds Stripe's manual-capture cap.",
          "Made row-level security the authorization boundary on every table, with 2,651 pgTAP assertions and 742 Vitest cases behind the policies and payment edge cases.",
          "Built a Google Document AI pipeline that fraud-checks buyer financing documents and routes low-confidence signals to an admin review queue.",
        ],
      },
    ],
  },
  {
    company: "CodingCops",
    roles: [
      {
        title: "Principal Software Engineer",
        period: "Apr 2026 — Present",
        bullets: [
          "Technical lead and architect on The Crane Guys platform — a 131-model domain across NestJS API, Next.js web and Expo mobile, with a team of 8 engineers coding to standards I own.",
          "Designed AI-DLC, an AI development lifecycle with 5 specialised agents over a 300+ document project vault, adopted across the team and 4 AI tools.",
          "Built an offline-first sync engine for the React Native field app so a crew can complete a 14-step job ticket with no signal and reconcile on reconnect.",
          "Designed a platform-wide admin-impersonation audit system across 18 mutation tables on Relay Automotive; also lead Fittish, an AI fitness app (NestJS + Expo).",
        ],
      },
      {
        title: "Senior Software Engineer",
        period: "Oct 2024 — Apr 2026",
        bullets: [
          "Architected Relay Automotive V2 — a multi-tenant SaaS on NestJS, Prisma & PostgreSQL, live at US dealerships.",
          "Built Reynolds/Fortellis DMS integrations with BullMQ workers and Pusher real-time.",
          "Shipped the React Native (Expo) mobile app and migrated the legacy MERN codebase, cutting technical debt.",
          "Designed and deployed containerised AWS infrastructure, and mentored the team through code review and architecture planning.",
        ],
      },
    ],
  },
  {
    company: "The Hexaa",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "Apr 2023 — Oct 2024",
        bullets: [
          "Led delivery of three contract products (Nuxt.js, React, React Native).",
          "Turned a startup MVP into an investment-ready platform through an architecture redesign.",
          "Re-architected a monolith into microservices with Keycloak enterprise auth and Elasticsearch.",
        ],
      },
      {
        title: "Software Engineer",
        period: "Mar 2022 — Apr 2023",
        bullets: [
          "Built a multi-tenant SaaS on Node.js + Sequelize with Stripe subscriptions and billing automation.",
          "Implemented live driver tracking via the Google Maps API, and an internal admin panel with RBAC.",
          "Led a cross-functional team of 5 developers and 1 QA engineer on a food subscription platform.",
        ],
      },
      {
        title: "Associate Software Engineer",
        period: "Mar 2021 — Mar 2022",
        bullets: [
          "Built multi-vendor admin dashboards covering vendors, inventory, payments and order tracking.",
          "Optimised front-end performance with Redux state management, and integrated payment gateways and automated notifications.",
        ],
      },
    ],
  },
];

export const education = {
  degree: "B.S. Computer Software Engineering",
  school: "COMSATS University (CUI), Lahore",
  period: "2017 — 2021",
};
