import { cn } from "@/lib/cn";

/** Toptal engagement badge — Top 3% credential, usable on cards & case studies. */
export function ToptalBadge({ className, label = "Toptal" }: { className?: string; label?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border border-[#3863ff]/50 bg-[#3863ff]/12 px-2.5 py-1 font-mono text-[11px] leading-none text-[#6f8dff]",
        className,
      )}
      title="Delivered through Toptal — top 3% of global talent"
    >
      {/* Toptal triangle mark */}
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M2 4h20v4h-7v12h-6V8H2z" />
      </svg>
      {label}
    </span>
  );
}
