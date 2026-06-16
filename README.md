# Syed Haris — Portfolio

A client-facing portfolio with a **hybrid premium + Minecraft-voxel** aesthetic: a sleek
near-black FANG-grade base with a real 3D voxel hero, magnetic cursor, scroll-reveal motion
and playful blocky accents. Built clients-first, with engineering-depth case studies.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (tokens defined in `src/app/globals.css` via `@theme`)
- **Motion** (Framer Motion) — reveals, magnetic cursor, page transitions
- **React Three Fiber + drei + three.js** — the 3D voxel hero
- **lucide-react** — icons (brand glyphs hand-rolled in `Icon.tsx`)

## Architecture

Content is the single source of truth — pages render entirely from typed data, so adding a
project or industry never means touching layout code.

```
src/
  content/        ← EDIT HERE: profile.ts, industries.ts, projects.ts, types.ts
  lib/            cn(), accent color maps
  components/
    ui/           Cursor, Reveal, Magnetic, Button, Badge, VoxelCube, TiltCard, Marquee, Icon
    three/        VoxelHero (dynamic, ssr:false) + VoxelScene (R3F)
    layout/       Nav, Footer
    sections/     Hero, Industries, FeaturedWork, Approach, ContactCTA
    work/         ProjectCard, WorkExplorer (industry filter), CaseStudy
    contact/      ContactForm (mailto-based, no backend needed)
  app/
    page.tsx              home (immersive scroll)
    work/page.tsx         all work + industry filter
    work/[slug]/page.tsx  per-project case study (SSG via generateStaticParams)
    about/page.tsx
    contact/page.tsx
    not-found.tsx
```

## Run

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (prerenders all case studies)
npm start        # serve the build
```

## ⚠️ Placeholders to replace (search for `PLACEHOLDER`)

- `src/content/profile.ts` — **location**, **yearsExperience**, **GitHub / LinkedIn URLs**, `resumeUrl`
- `src/app/layout.tsx` — `siteUrl` (your real domain, for SEO/OpenGraph)
- `public/resume.pdf` — drop your résumé here (linked from hero + about)
- `public/avatar.jpg` — optional real photo to replace the voxel portrait block in `about`
- Verify the facts in `src/content/projects.ts` and trim any client work you can't show publicly.

## Deploy

Push to GitHub and import on **Vercel** (zero config). Set your custom domain and update
`siteUrl` in `layout.tsx`.
