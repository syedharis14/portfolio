import {
  HeartPulse, Car, Dumbbell, Landmark, Building2, Trophy, Ship, Terminal,
  Package, Mail, Rocket, Layers, Brain, Infinity, ArrowRight, ArrowUpRight,
  ExternalLink, Sparkles, Boxes, Cpu, Database, Code2, Menu, X, MapPin,
  CheckCheck, Lock, type LucideProps,
} from "lucide-react";

/* lucide v1 dropped brand glyphs — supply our own. */
function GithubGlyph(p: LucideProps) {
  const { size = 24, ...rest } = p;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...rest}>
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.1-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}
function LinkedinGlyph(p: LucideProps) {
  const { size = 24, ...rest } = p;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...rest}>
      <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.5c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7z" />
    </svg>
  );
}

const registry: Record<string, React.ComponentType<LucideProps>> = {
  "heart-pulse": HeartPulse, car: Car, dumbbell: Dumbbell, landmark: Landmark,
  "building-2": Building2, trophy: Trophy, ship: Ship, terminal: Terminal,
  package: Package, mail: Mail, rocket: Rocket, layers: Layers, brain: Brain,
  infinity: Infinity, "arrow-right": ArrowRight, "arrow-up-right": ArrowUpRight,
  "external-link": ExternalLink, sparkles: Sparkles, boxes: Boxes, cpu: Cpu,
  database: Database, code: Code2, menu: Menu, close: X, "map-pin": MapPin,
  check: CheckCheck, lock: Lock, github: GithubGlyph, linkedin: LinkedinGlyph,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = registry[name] ?? Sparkles;
  return <Cmp {...props} />;
}
