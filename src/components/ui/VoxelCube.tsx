import { cn } from "@/lib/cn";

/**
 * Pure-CSS isometric Minecraft-style block. No JS — works as a decorative
 * accent and as the reduced-motion / loading fallback for the 3D hero.
 */
export function VoxelCube({
  size = 64,
  color = "#6cdf6c",
  className,
  float = true,
}: {
  size?: number;
  color?: string;
  className?: string;
  float?: boolean;
}) {
  const half = size / 2;
  const faces: { t: string; b: string }[] = [
    { t: `translateZ(${half}px)`, b: "brightness(0.92)" }, // front
    { t: `rotateY(90deg) translateZ(${half}px)`, b: "brightness(0.7)" }, // right
    { t: `rotateX(90deg) translateZ(${half}px)`, b: "brightness(1.18)" }, // top
  ];

  return (
    <div
      className={cn("[perspective:600px]", float && "animate-float", className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div
        className="relative h-full w-full [transform-style:preserve-3d]"
        style={{ transform: "rotateX(-24deg) rotateY(-38deg)" }}
      >
        {faces.map((f, i) => (
          <div
            key={i}
            className="voxel-edge absolute inset-0"
            style={{
              background: color,
              filter: f.b,
              transform: f.t,
              backfaceVisibility: "hidden",
            }}
          />
        ))}
      </div>
    </div>
  );
}
