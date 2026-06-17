import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/profile";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/ui/Cursor";
import { SkillsChest } from "@/components/ui/SkillsChest";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const jet = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jet", display: "swap" });
const press = Press_Start_2P({ subsets: ["latin"], weight: "400", variable: "--font-press", display: "swap" });

const siteUrl = "https://syedharis14.github.io/portfolio"; // GitHub Pages

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.roles[0]}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.subhead,
  keywords: [
    "full-stack engineer", "NestJS", "Next.js", "React Native", "TypeScript",
    "AI engineer", "software architect", profile.name,
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title: `${profile.name} — ${profile.roles[0]}`,
    description: profile.subhead,
    url: siteUrl,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.roles[0]}`,
    description: profile.subhead,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${space.variable} ${jet.variable} ${press.variable}`}
    >
      <body className="antialiased">
        <Cursor />
        <Nav />
        <main>{children}</main>
        <SkillsChest />
        <Footer />
      </body>
    </html>
  );
}
