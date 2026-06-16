"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";
import { profile } from "@/content/profile";
import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-line/70 bg-void/70 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center bg-grass voxel-edge text-void [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,6px_100%,0_calc(100%-6px))]">
            <span className="font-pixel text-[10px]">{profile.initials}</span>
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-ink sm:block">
            {profile.name}
            <span className="block font-mono text-[10px] font-normal text-ink-faint">
              {profile.roles[0]}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative px-3.5 py-2 text-sm transition-colors",
                  active ? "text-ink" : "text-ink-dim hover:text-ink",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 border border-line-2 bg-panel"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary" icon="arrow-right">
            Start a project
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center border border-line-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Icon name={open ? "close" : "menu"} size={18} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line/70 bg-void/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="border border-line/60 px-4 py-3 text-sm text-ink-dim hover:border-grass/50 hover:text-grass"
                >
                  {l.label}
                </Link>
              ))}
              <Button href="/contact" variant="primary" icon="arrow-right" className="mt-2" magnetic={false}>
                Start a project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
