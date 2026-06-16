"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";
import { VoxelCube } from "../ui/VoxelCube";

function Fallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-64 w-64">
        <VoxelCube size={120} color="#3fb24a" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <VoxelCube size={48} color="#58e0e6" className="absolute right-2 top-4" />
        <VoxelCube size={40} color="#ffc83a" className="absolute left-0 top-10" />
        <VoxelCube size={36} color="#ff5d5d" className="absolute bottom-4 right-10" />
        <VoxelCube size={32} color="#b388ff" className="absolute bottom-6 left-6" />
      </div>
    </div>
  );
}

const VoxelScene = dynamic(() => import("./VoxelScene"), {
  ssr: false,
  loading: () => <Fallback />,
});

/** 3D voxel hero — degrades to a static CSS-block cluster if reduced motion. */
export function VoxelHero() {
  const reduce = useReducedMotion();
  return (
    <div className="h-full w-full">
      {reduce ? <Fallback /> : <VoxelScene />}
    </div>
  );
}
