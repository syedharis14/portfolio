import { cn } from "@/lib/cn";

/** Small voxel-styled pill. Use for tech tags, status chips, labels. */
export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent" | "live";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[11px] leading-none text-ink-dim",
        tone === "accent" && "border-grass/40 text-grass",
        tone === "live" && "border-emerald/40 text-emerald",
        className,
      )}
    >
      {tone === "live" && (
        <span className="inline-block h-1.5 w-1.5 animate-pulse-glow bg-emerald" />
      )}
      {children}
    </span>
  );
}
