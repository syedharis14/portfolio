import type { Experience } from "./types";

/** Work history — most recent company & role first. */
export const experience: Experience[] = [
  {
    company: "CodingCops",
    roles: [
      {
        title: "Principal Software Engineer",
        period: "Apr 2026 — Present",
        bullets: [
          "Technical owner of Relay Automotive's StaffMaster scheduling product; lead a team of 4.",
          "Designed a platform-wide admin-impersonation audit system across 18 mutation tables.",
          "Lead a second product in parallel — Fittish, an AI fitness app (NestJS + Expo).",
        ],
      },
      {
        title: "Senior Software Engineer",
        period: "Oct 2024 — Apr 2026",
        bullets: [
          "Architected Relay Automotive V2 — a multi-tenant SaaS on NestJS, Prisma & PostgreSQL.",
          "Built Reynolds/Fortellis DMS integrations with BullMQ workers and Pusher real-time.",
          "Shipped the React Native (Expo) mobile app and migrated the legacy MERN codebase.",
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
          "Delivered three contract products (Nuxt.js, React, React Native).",
          "Re-architected a system into microservices with Keycloak + Elasticsearch.",
        ],
      },
      {
        title: "Software Engineer",
        period: "Mar 2022 — Apr 2023",
        bullets: [
          "Built a multi-tenant SaaS (Sequelize + Stripe) and live driver tracking via Google Maps.",
        ],
      },
      {
        title: "Associate Software Engineer",
        period: "Mar 2021 — Mar 2022",
        bullets: [
          "Built multi-vendor admin panels with inventory, payments and order tracking.",
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
