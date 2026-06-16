import { Button } from "@/components/ui/Button";
import { VoxelCube } from "@/components/ui/VoxelCube";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center px-5 pt-20 text-center">
      <div className="flex flex-col items-center">
        <div className="flex gap-4">
          <VoxelCube size={56} color="#ff5d5d" />
          <VoxelCube size={56} color="#ffc83a" />
          <VoxelCube size={56} color="#58e0e6" />
        </div>
        <p className="mt-10 font-pixel text-2xl text-grass">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          This chunk hasn&apos;t generated yet.
        </h1>
        <p className="mt-3 max-w-md text-sm text-ink-dim">
          The block you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to solid ground.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/" variant="primary" icon="arrow-right">Back home</Button>
          <Button href="/work" variant="block" icon="boxes">See the work</Button>
        </div>
      </div>
    </div>
  );
}
