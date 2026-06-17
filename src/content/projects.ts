import type { Project } from "./types";

/**
 * Case studies. Order here = default display order.
 * `featured` projects surface on the home page; all appear in /work.
 * Every project follows the same 8-section structure:
 *   summary · overview · problem · solution · results · keyFeatures · technicalDetails · lessons
 */
export const projects: Project[] = [
  {
    slug: "relay-automotive",
    name: "Relay Automotive",
    industry: "Automotive · Dealer SaaS",
    industryId: "automotive",
    role: "Lead Full-Stack Engineer",
    period: "2024 — Present",
    status: "Live in production",
    accent: "diamond",
    featured: true,
    client: "Relay Automotive",
    tagline: "Production SaaS that real US car dealerships run their day on.",
    summary:
      "A multi-tenant platform pairing Dealership Production Management (DPM) with StaffMaster scheduling — live at US dealerships including Don McGill Toyota, Cardenas Enterprises and Sewell Mercedes-Benz.",
    overview:
      "Relay is the system a dealership's floor actually runs on. I lead the backend architecture and build both the React/Vite web client and the Expo mobile app against a shared API contract. The product spans two surfaces — DPM for F&I deal flow and production reporting, and StaffMaster for employee scheduling — unified under one multi-tenant SaaS that plugs directly into each dealer's existing DMS. Every dealership is a tenant with its own data, roles and DMS provider, all served from one codebase.",
    stack: [
      "TypeScript", "NestJS 11", "Prisma", "PostgreSQL", "BullMQ", "Redis (ElastiCache)",
      "Pusher", "AWS ECS Fargate", "S3", "SES", "React 19", "Vite", "TanStack Query",
      "Zustand", "React Native", "Expo",
    ],
    metrics: [
      { value: "3+", label: "dealerships live in prod" },
      { value: "230+", label: "database migrations" },
      { value: "~761", label: "backend source files" },
      { value: "9", label: "role-based dashboards" },
    ],
    problem:
      "Dealerships run F&I deal flow, production reporting and staff scheduling across siloed, dated DMS tooling. Relay set out to unify all of it into one real-time, multi-tenant SaaS that integrates directly with the dealer's existing DMS — without each new dealership or feature destabilising the others.",
    solution: [
      "Owned the backend architecture end-to-end and built the React/Vite web client and the Expo mobile app against a shared API contract.",
      "Modelled the full deal lifecycle (Quote → Sold → Finance Complete → Finalized) plus a complete scheduling domain — shifts, swaps, vacations, blackouts and auto-scheduling.",
      "Designed a DMS abstraction so Reynolds (SOAP/BOD) and Fortellis (REST) plug in behind the same ports, selected per-dealership at runtime.",
      "Shipped role-specific dashboards for 9 dealership roles, each with tailored data access and real-time updates.",
    ],
    results: [
      "Live in production across multiple dealerships on different DMS providers.",
      "Two coordinated deploys per month (staging → main) with Jest + E2E coverage and Bitbucket CI/CD.",
      "Web migrated to S3 + CloudFront; backend on ECS Fargate behind an ALB.",
    ],
    keyFeatures: [
      "StaffMaster auto-scheduling engine (rotation / fixed / bi-weekly / mixed) with recurring-event expansion and swap broadcasting.",
      "Reynolds + Fortellis DMS sync — inbound BOD ingestion and deal search.",
      "Admin 'View as employee' impersonation with audit stamping.",
      "Expo mobile app shipped to TestFlight + Android, feature-parity with web, with geofencing and biometric auth.",
    ],
    technicalDetails: [
      "Clean architecture: adapters → application → domain ← infrastructure, with ~761 typed source files and a 2,300-line Prisma schema.",
      "Multi-tenancy enforced per-handler via dealershipId on every write path.",
      "DMS integration via ports (IDmsDealFetcher / IDmsDealSyncer) resolved at runtime by a DmsResolverService — Reynolds BOD webhooks gzip-batched to S3, Fortellis over REST.",
      "BullMQ workers in a separate worker process handle high-volume inbound deal processing with retries, backoff and idempotency hashes.",
      "Pusher channels (DASHBOARD_UPDATE, DEAL_CHANGE, VACATION_BALANCE_UPDATE) drive live dashboards across web + mobile.",
      "JWT auth with TOTP / email-OTP MFA, role guards, dealership-scope guards, and admin impersonation stamped with full audit trails.",
    ],
    lessons: [
      "Per-handler tenant scoping beats a single global middleware: explicit dealershipId checks at each boundary made the multi-tenant rules auditable and prevented silent data bleed.",
      "Hiding DMS quirks behind ports paid off — onboarding a Fortellis dealership after building for Reynolds became a config change, not a rewrite.",
      "Moving high-volume inbound deal processing into BullMQ workers with idempotency hashes was the difference between a system that kept up and one that fell over under burst load.",
    ],
  },
  {
    slug: "brio-medical",
    name: "Brio Medical",
    industry: "Healthcare",
    industryId: "healthcare",
    role: "Full-Stack Engineer",
    period: "2024",
    status: "Shipped",
    accent: "redstone",
    featured: true,
    client: "Brio Medical",
    tagline: "Healthcare management platform for patient workflows, treatments and records.",
    summary:
      "A full-stack healthcare platform that streamlines patient workflows, treatment tracking and clinical operations — built on a domain-driven data model, contract-driven APIs and secure, role-aware data handling.",
    overview:
      "Brio Medical is a healthcare management platform for clinical operations. I worked across the stack — designing the relational data model, building the contract-driven REST API, and developing the interfaces clinical staff use day to day. The guiding constraint throughout was that this is sensitive medical data, so secure handling and predictable access weren't features bolted on at the end; they shaped the architecture from the very first table.",
    stack: [
      "Node.js (NestJS-style layered architecture)", "TypeScript", "React", "SQL",
      "REST", "class-validator / Zod", "Docker", "CI/CD",
    ],
    metrics: [
      { value: "DDM", label: "domain-driven data model" },
      { value: "RBAC", label: "role-based access" },
      { value: "Contract", label: "driven API layer" },
    ],
    problem:
      "Clinical operations need structured, reliable handling of sensitive data — patients, visits, treatments and records — with strict access control and no room for malformed input reaching persistence. The system had to be safe today and extensible toward billing, reporting and analytics tomorrow.",
    solution: [
      "Designed a modular full-stack architecture separating controllers, services and data layers.",
      "Modelled core healthcare entities (patients, visits, treatments, records) with strong relational integrity and lifecycle states.",
      "Established a contract-driven API layer with consistent request/response schemas for predictable frontend ↔ backend flow.",
      "Built the user-facing interfaces that present complex medical data clearly for non-technical operational staff.",
    ],
    results: [
      "A secure, extensible foundation for clinical operations with safe data exposure by design.",
      "Architecture ready to scale to multi-clinic support and analytics dashboards without breaking existing modules.",
    ],
    keyFeatures: [
      "End-to-end patient lifecycle workflows: onboarding → treatment tracking → record updates.",
      "Role-based access logic restricting operations by user role (admin, staff).",
      "Reusable service layers designed for future modules — billing, reporting, analytics.",
      "Dockerized with CI/CD for repeatable deploys.",
    ],
    technicalDetails: [
      "Layered NestJS-style backend: controllers → services → data access, with validation and sanitization layers guarding persistence.",
      "Relational data model covering patients, treatments, medical records and workflows with strong referential integrity.",
      "Scalable REST APIs with pagination, filtering and role-aware data access; payloads shaped to prevent over-fetching and data leaks.",
      "Defensive backend patterns for edge cases, invalid states and concurrent updates.",
    ],
    lessons: [
      "Designing the data model around lifecycle states up front made later workflow features — and the path to billing/reporting — additive rather than disruptive.",
      "Validation and sanitization at the service boundary, not the controller, kept malformed input from ever reaching persistence, which matters enormously with clinical records.",
      "Shaping API responses to expose only what each role needs avoided over-fetching and an entire class of accidental data-leak bugs.",
    ],
  },
  {
    slug: "fittish",
    name: "Fittish",
    industry: "Health & Fitness",
    industryId: "fitness",
    role: "Full-Stack & Mobile Engineer",
    period: "2024 — 2025",
    status: "Active development",
    accent: "grass",
    featured: true,
    client: "Fittish",
    tagline: "AI-driven fitness & nutrition app with personalized plans and health-data sync.",
    summary:
      "A fitness SaaS pairing a clean-architecture NestJS backend with an Expo React Native app — AI generates personalized workout and meal plans, HealthKit/Health Connect sync real data, and Stripe + RevenueCat handle subscriptions.",
    overview:
      "Fittish is a consumer fitness product: a clean-architecture NestJS backend feeding an Expo React Native app on iOS and Android. I built across both. The hard part isn't the UI — it's generating genuinely personalized plans from a structured assessment, syncing against the user's real device health data, and monetizing reliably. The backend owns AI plan generation and the job queue; the app owns a polished, offline-tolerant experience.",
    stack: [
      "NestJS 11", "Prisma", "PostgreSQL", "Redis", "BullMQ", "OpenAI", "LangChain / LangGraph",
      "Stripe", "RevenueCat", "React 19", "React Native 0.79", "Expo 53", "NativeWind",
      "TanStack Query", "Zustand", "AWS S3",
    ],
    metrics: [
      { value: "AI", label: "plan generation" },
      { value: "iOS + Android", label: "via Expo EAS" },
      { value: "20+", label: "backend domain entities" },
      { value: "177+", label: "mobile components" },
    ],
    problem:
      "Generic fitness apps hand users static plans. Fittish needed to generate genuinely personalized training and nutrition from a structured assessment, sync against the user's real device health data, and monetise through subscriptions — all on iOS and Android from one codebase.",
    solution: [
      "Built the backend on clean architecture (core / application / infrastructure) with dedicated modules for exercise, meal, workout, assessment, recommendation engine, subscription and notifications.",
      "Implemented AI plan generation with OpenAI and a LangChain/LangGraph agent graph for multi-step recommendations.",
      "Developed the Expo app with file-based routing grouped by flow: assessment, plan, meal, profile, health.",
      "Integrated Apple HealthKit and Google Health Connect for real-time health metrics.",
    ],
    results: [
      "Production EAS builds with OTA updates shipping across iOS and Android.",
      "E2E-tested backend with Dockerized multi-stage deploys.",
    ],
    keyFeatures: [
      "AI workout + meal plan generation from a multi-type assessment questionnaire.",
      "Nutrition tracking with macros, micronutrients and recipe-from-URL extraction.",
      "Real-time HealthKit / Health Connect sync (steps, weight, calories, heart rate).",
      "Streaks, goal dashboards and a categorized push-notification center.",
    ],
    technicalDetails: [
      "BullMQ + Redis job queue powers scheduled, retry-safe push notifications.",
      "Subscriptions via dual Stripe + RevenueCat integration with webhook-driven lifecycle.",
      "Plan versioning state machine (DRAFT / ACTIVE / SAVED / COMPLETED) with recurrence patterns.",
      "Zustand for lightweight client state, TanStack Query for server-state caching, NativeWind for styling.",
      "EAS build pipeline with development / preview / production channels and OTA updates.",
    ],
    lessons: [
      "An LLM agent graph (LangGraph) produced better, more controllable multi-step plans than a single mega-prompt — each step could be validated independently.",
      "Running notifications through a BullMQ queue with retries made delivery dependable; fire-and-forget would have dropped messages silently.",
      "Dual Stripe + RevenueCat integration added redundancy but also complexity — reconciling subscription state across both via webhooks was where most edge cases lived.",
    ],
  },
  {
    slug: "crossroads",
    name: "Crossroads",
    industry: "PropTech · Real Estate",
    industryId: "proptech",
    role: "AI Engineer",
    period: "2025",
    status: "Active development",
    accent: "amethyst",
    featured: true,
    tagline: "AI property-appraisal assistant — RAG + vision producing compliant valuation narratives.",
    summary:
      "An AI assistant that reads property PDFs, extracts facts via vision, and assesses UAD quality and condition to produce USPAP-compliant narrative reports — pairing a RAG pipeline with deterministic business-rule guardrails.",
    overview:
      "Crossroads is an AI assistant for property appraisal. It ingests property PDFs, extracts facts with vision, and produces USPAP-compliant valuation narratives. I built the reasoning pipeline. The core challenge is correctness: appraisal has hard rules, and a fluent-but-wrong rating is worse than no answer — so the system layers deterministic guardrails on top of probabilistic LLM output rather than trusting the model to follow the rules on its own.",
    stack: [
      "Next.js 14", "TypeScript", "OpenAI GPT-4o", "text-embedding-3-large", "Google Gemini (vision)",
      "Supabase", "pgvector", "Zod", "Playwright", "Vitest",
    ],
    metrics: [
      { value: "2-pass", label: "reasoning pipeline" },
      { value: "12", label: "priority-ranked knowledge docs" },
      { value: "Q/C", label: "guardrail engine" },
    ],
    problem:
      "Appraisal narratives must follow strict UAD/USPAP rules. A raw LLM will happily rate a production-builder home Q1 or call a 20-year-old property C1 — both wrong. The system needed correctness guarantees, not just fluent prose.",
    solution: [
      "Built a two-pass pipeline: Pass A extracts facts, Pass B reasons and validates against a ranked knowledge base.",
      "Used Gemini vision to extract structured JSON from PDFs and cross-validate gross living area against MLS text.",
      "Implemented a guardrail layer that overrides the model post-generation when business rules are violated.",
      "Added a correction feedback loop so user fixes feed future runs.",
    ],
    results: [
      "A reasoning pipeline that produces compliant narratives while refusing to violate UAD/USPAP rules.",
      "A regression suite that locks in correct behaviour on known edge cases as prompts evolve.",
    ],
    keyFeatures: [
      "Vision-driven PDF fact extraction with metadata pinned to embedding chunks.",
      "Deterministic guardrails layered on probabilistic LLM output.",
      "Banned-word normalization for USPAP compliance (e.g. 'master bedroom' → 'primary bedroom').",
      "Playwright E2E + Vitest unit coverage of the reasoning pipeline.",
    ],
    technicalDetails: [
      "RAG retrieval over Supabase pgvector with priority tiers (ExtractedFacts > User Text > KB Rules > Model Prior).",
      "Guardrails block Q1 for production builders without luxury signals, force C1/C2 for new construction, and downgrade C1 when effective age or property age contradicts it.",
      "Versioned output contracts validated with Zod; a regression test suite scripts edge cases.",
      "OpenAI text-embedding-3-large (3072-dim) with retry logic for quota/transient errors.",
    ],
    lessons: [
      "LLMs are great at drafting and terrible at rules — wrapping generation in a deterministic guardrail layer was what made the output trustworthy.",
      "A fixed conflict-priority order (ExtractedFacts > User Text > KB Rules > Model Prior) resolved contradictions predictably instead of letting the model 'decide'.",
      "Cross-validating vision-extracted numbers against the source text caught hallucinated figures before they ever reached a report.",
    ],
  },
  {
    slug: "polar-adventure",
    name: "Polar Adventure",
    industry: "Travel & Hospitality",
    industryId: "travel",
    role: "Full-Stack Engineer",
    period: "2025 — 2026",
    status: "Live in production",
    accent: "diamond",
    featured: false,
    tagline: "Expedition-cruise booking platform — Laravel API + Next.js storefront with visual CMS.",
    summary:
      "A two-part platform for booking polar expedition cruises: a Laravel 10 API managing a 38-model cruise/fare/booking domain, and a Next.js storefront with a Makeswift visual CMS, OAuth, multi-step booking and a private-fare club.",
    overview:
      "Polar Adventure is an expedition-cruise booking platform: a Laravel API over a deeply relational cruise/fare/booking domain, and a Next.js storefront with a Makeswift visual CMS. The tension to resolve was complexity versus editability — booking flows are intricate, yet marketing needed to change pages without a developer in the loop.",
    stack: [
      "PHP 8", "Laravel 10", "MySQL", "Next.js 13", "React 18", "React Query", "Makeswift CMS",
      "Firebase", "AWS S3", "DomPDF", "Bootstrap 5",
    ],
    metrics: [
      { value: "38", label: "Eloquent domain models" },
      { value: "108", label: "frontend components" },
      { value: "OAuth", label: "Google + Facebook" },
    ],
    problem:
      "Cruise inventory is deeply relational — ships, decks, cabins, public and private fare sets — and marketing needs to edit pages without a developer. The platform had to serve complex booking flows while staying CMS-editable.",
    solution: [
      "Built a classic Laravel MVC API with ~38 models and soft deletes across core entities.",
      "Integrated third-party cruise aggregators (Widgety, Touramigo) and Microsoft Graph mail.",
      "Used Makeswift on the Next.js frontend so non-technical staff edit pages visually.",
      "Implemented a multi-step booking wizard with fare comparison and PDF confirmations.",
    ],
    results: [
      "A production booking platform serving complex multi-cabin, multi-fare reservations.",
      "Marketing-editable content via Makeswift, removing developers from routine copy changes.",
    ],
    keyFeatures: [
      "Private fare club with password-gated access.",
      "CMS-managed marketing pages via Makeswift.",
      "OAuth + email verification auth flows.",
      "Automated daily/weekly database backups via custom Artisan commands.",
    ],
    technicalDetails: [
      "Dynamic public/private fare sets with per-cabin pricing and password-gated fare clubs.",
      "Laravel Jobs for async booking PDF generation and email delivery.",
      "Context API + React Query on the frontend for auth, currency and cruise caching.",
      "Soft deletes and rich Eloquent relationships across the 38-model domain.",
    ],
    lessons: [
      "Modelling public vs. private fare sets explicitly — rather than as flags on one table — kept gated-pricing logic clean as the rules grew.",
      "Pushing PDF generation and email into Laravel Jobs kept booking requests fast and resilient to third-party slowness.",
      "A visual CMS is a force multiplier for non-technical teams — but component boundaries have to be designed for it deliberately.",
    ],
  },
  {
    slug: "pnlsaver",
    name: "PNLSaver",
    industry: "Fintech · Algorithmic Trading",
    industryId: "fintech",
    role: "Creator",
    period: "2026",
    status: "Active development",
    accent: "gold",
    featured: false,
    tagline: "Automated Binance scalping engine with multi-timeframe signals and hard risk rules.",
    summary:
      "A crypto scalping platform: a NestJS engine that scans coins across multiple timeframes, executes Binance spot trades with OCO orders, and enforces strict capital rules — paired with a Next.js control dashboard.",
    overview:
      "PNLSaver is a personal product: an automated Binance scalping engine with a Next.js control dashboard. It scans markets continuously, only acts on high-quality setups, and enforces strict risk rules even when running unattended on a cron. The point was to remove emotion and latency from scalping while never breaking the risk budget.",
    stack: [
      "NestJS 11", "TypeScript", "Supabase", "PostgreSQL", "binance-api-node", "Next.js 15",
      "React 19", "Winston", "Resend", "node cron",
    ],
    metrics: [
      { value: "1m–15m", label: "multi-timeframe scans" },
      { value: "3/day", label: "max trades (risk rule)" },
      { value: "OCO", label: "auto SL/TP orders" },
    ],
    problem:
      "Manual scalping is emotional and slow. The engine had to scan markets continuously, only trade high-quality setups, and never violate risk limits — even running unattended on a cron.",
    solution: [
      "Built a multi-timeframe signal engine (1m/3m/5m/15m) with spread, ATR, volume and ADX gating.",
      "Executed Binance spot trades with ATR-based stops and OCO orders at a default 1.6:1 reward-to-risk.",
      "Enforced capital rules by balance tier: max 3 trades/day, cooldown after a loss, fixed risk-per-trade, portfolio reserve.",
    ],
    results: [
      "An unattended cron auto-trader that scans, filters and executes within hard capital limits.",
      "Idempotent scan persistence and rejection tracking that make every decision auditable.",
    ],
    keyFeatures: [
      "Configuration-driven thresholds (signal strength, ATR gates, R:R) in one config module.",
      "Cron jobs for scan-and-trade, nightly reconciliation and email alerts via Resend.",
      "Rejection tracking with reason codes for every skipped setup.",
    ],
    technicalDetails: [
      "Distributed scan + execution locks prevent race conditions in the cron auto-trader.",
      "Encrypted API-key storage with safe decryption only at execution time.",
      "Multi-timeframe signal generation with idempotent scan persistence (unique per symbol/timeframe/candle).",
    ],
    lessons: [
      "Risk rules belong in code, not discipline — encoding max-trades, cooldowns and reserves removed the human failure mode entirely.",
      "Distributed scan/execution locks were essential the moment a cron job and a manual action could run concurrently.",
      "Encrypting API keys at rest and decrypting only at execution time kept a sensitive credential from sitting in plaintext.",
    ],
  },
  {
    slug: "git-ai-commit",
    name: "git-ai-commit",
    industry: "Developer Tools · Open Source",
    industryId: "devtools",
    role: "Creator & Maintainer",
    period: "2025",
    status: "Published",
    accent: "grass",
    featured: true,
    tagline: "Published npm CLI that writes Conventional Commits from your staged diff with AI.",
    summary:
      "An open-source CLI that turns staged git changes into clean Conventional Commit messages using OpenAI — published to npm with full CI/CD, multi-language support and usage analytics.",
    overview:
      "git-ai-commit is an open-source CLI I built, published and use daily. It reads your staged diff and proposes a Conventional Commit message. The design goal was zero friction: fast, scriptable, and never wresting control away from the developer — it suggests, you decide.",
    stack: [
      "TypeScript", "Node.js", "Commander", "OpenAI (GPT-4o)", "simple-git", "Winston",
      "Jest", "GitHub Actions",
    ],
    links: [
      { label: "npm", url: "https://www.npmjs.com/package/@syedharis14/git-ai-commit", kind: "npm" },
    ],
    metrics: [
      { value: "npm", label: "@syedharis14/git-ai-commit" },
      { value: "CI/CD", label: "auto-release pipeline" },
      { value: "8+", label: "languages supported" },
    ],
    problem:
      "Writing good commit messages is tedious, so people don't. A fast CLI that reads the diff and proposes a Conventional Commit removes the friction without taking control away from the developer.",
    solution: [
      "Built a Commander CLI with `generate` and `stats` commands.",
      "Fetched the staged diff, sent it to OpenAI with a Conventional Commits system prompt, then offered auto-commit or clipboard copy.",
      "Added multi-language output (en, es, fr, ur, ar, …) and local usage analytics.",
    ],
    results: [
      "Published to npm and installable; dogfooded across my own projects (the git-ai-commit.log files in my repos are it, in use).",
      "Automated release pipeline publishing to npm + GitHub Packages on every tagged version.",
    ],
    keyFeatures: [
      "Generates conventional commit messages from staged changes.",
      "Flags for --auto-commit, --copy and --lang.",
      "Usage analytics via a `stats` command.",
    ],
    technicalDetails: [
      "cosmiconfig-based configuration (.git-ai-commitrc) with sensible defaults.",
      "GitHub Actions pipeline auto-releases to npm + GitHub Packages with standard-version changelogs.",
      "Jest test suite around diff handling and message generation.",
    ],
    lessons: [
      "Shipping and maintaining a published package — semver, changelogs, CI release — is a different discipline from writing app code, and a valuable one.",
      "A tight, single-purpose CLI with good defaults beats a configurable one nobody learns; cosmiconfig made config optional, not mandatory.",
      "Keeping the human in the loop — suggest, don't auto-commit by default — made people actually trust and adopt it.",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
