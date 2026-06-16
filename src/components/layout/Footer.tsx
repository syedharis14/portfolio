import Link from "next/link";
import { profile } from "@/content/profile";
import { Icon } from "../ui/Icon";

const year = 2026;

export function Footer() {
  return (
    <footer className="relative border-t border-line/70 bg-deep">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center bg-grass voxel-edge text-void">
                <span className="font-pixel text-[10px]">{profile.initials}</span>
              </span>
              <span className="font-display text-lg font-semibold text-ink">{profile.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-dim">{profile.subhead}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-xs text-ink-faint">
              <Icon name="map-pin" size={13} /> {profile.location}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="label mb-3 text-ink-faint">Site</p>
              <ul className="space-y-2 text-sm">
                {["work", "about", "contact"].map((p) => (
                  <li key={p}>
                    <Link href={`/${p}`} className="capitalize text-ink-dim hover:text-grass">
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label mb-3 text-ink-faint">Connect</p>
              <ul className="space-y-2 text-sm">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ink-dim hover:text-grass"
                    >
                      <Icon name={s.icon} size={14} /> {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="label mb-3 text-ink-faint">Start</p>
              <a
                href={`mailto:${profile.email}`}
                className="font-mono text-sm text-grass hover:underline"
              >
                {profile.email}
              </a>
              <p className="mt-3 inline-flex items-center gap-2 text-xs text-emerald">
                <span className="h-1.5 w-1.5 animate-pulse-glow bg-emerald" />
                {profile.availability}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line/60 pt-6 text-xs text-ink-faint sm:flex-row sm:items-center">
          <p>© {year} {profile.name}. Built block by block.</p>
          <p className="font-mono">Next.js · TypeScript · Three.js · Motion</p>
        </div>
      </div>
    </footer>
  );
}
