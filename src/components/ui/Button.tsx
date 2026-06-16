"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Magnetic } from "./Magnetic";
import { Icon } from "./Icon";

type Variant = "primary" | "ghost" | "block";

const base =
  "group relative inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium tracking-tight transition-colors duration-200 select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-grass text-void voxel-edge hover:bg-emerald [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))]",
  block:
    "glass text-ink voxel-edge hover:border-grass/60 hover:text-grass [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))]",
  ghost: "text-ink-dim hover:text-ink",
};

export function Button({
  children,
  href,
  variant = "primary",
  icon,
  external,
  className,
  magnetic = true,
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  icon?: string;
  external?: boolean;
  className?: string;
  magnetic?: boolean;
}) {
  const inner = (
    <>
      {children}
      {icon && (
        <Icon
          name={icon}
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  const cls = cn(base, variants[variant], className);

  const el = external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );

  return magnetic ? <Magnetic strength={0.35}>{el}</Magnetic> : el;
}
