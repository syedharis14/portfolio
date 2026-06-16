import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

/** Consistent section header: pixel kicker + display title + optional lede. */
export function SectionHeading({
  kicker,
  title,
  lede,
  align = "left",
  className,
}: {
  kicker?: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-2xl", className)}>
      {kicker && (
        <Reveal>
          <div className={cn("mb-4 flex items-center gap-2", align === "center" && "justify-center")}>
            <span className="h-2 w-2 bg-grass" />
            <span className="label text-grass">{kicker}</span>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-ink-dim sm:text-lg">{lede}</p>
        </Reveal>
      )}
    </div>
  );
}
