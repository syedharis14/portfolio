"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, OrbitControls } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import type { Mesh } from "three";
import { VoxelCube } from "../ui/VoxelCube";

const TYPES = [
  { name: "grass", color: "#3fb24a", gem: false },
  { name: "dirt", color: "#6b4a2f", gem: false },
  { name: "diamond", color: "#58e0e6", gem: true },
  { name: "gold", color: "#ffc83a", gem: true },
  { name: "redstone", color: "#ff5d5d", gem: true },
  { name: "amethyst", color: "#b388ff", gem: true },
];

type Cell = { id: string; pos: [number, number, number]; type: number };

// fixed terrain so it renders identically every load
const HEIGHTS = [
  [0, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
];

function buildInitial(): Cell[] {
  const cells: Cell[] = [];
  const coords = [-1.5, -0.5, 0.5, 1.5];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const x = coords[i];
      const z = coords[j];
      cells.push({ id: `${i}-${j}-0`, pos: [x, 0, z], type: 0 });
      if (HEIGHTS[i][j] === 1) {
        cells.push({ id: `${i}-${j}-1`, pos: [x, 1, z], type: 2 + ((i + j) % 4) });
      }
    }
  }
  return cells;
}

function Block({ cell, onClick }: { cell: Cell; onClick: () => void }) {
  const ref = useRef<Mesh>(null);
  const hover = useRef(false);
  const pop = useRef(0);
  const t = TYPES[cell.type];

  useFrame(() => {
    const m = ref.current;
    if (!m) return;
    const targetScale = 1 + (hover.current ? 0.08 : 0) + pop.current;
    m.scale.setScalar(m.scale.x + (targetScale - m.scale.x) * 0.2);
    const targetY = cell.pos[1] + (hover.current ? 0.14 : 0);
    m.position.y += (targetY - m.position.y) * 0.2;
    pop.current *= 0.85;
  });

  return (
    <mesh
      ref={ref}
      position={cell.pos}
      onPointerOver={(e) => {
        e.stopPropagation();
        hover.current = true;
      }}
      onPointerOut={() => {
        hover.current = false;
      }}
      onClick={(e) => {
        e.stopPropagation();
        pop.current = 0.35;
        onClick();
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={t.color}
        flatShading
        roughness={t.gem ? 0.15 : 0.8}
        metalness={t.gem ? 0.6 : 0.05}
        emissive={t.color}
        emissiveIntensity={t.gem ? 0.25 : 0.05}
      />
      <Edges scale={1.001} threshold={15} color="#04110b" />
    </mesh>
  );
}

function Scene({ cells, onCycle }: { cells: Cell[]; onCycle: (id: string) => void }) {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 9, 5]} intensity={2} />
      <pointLight position={[-6, 3, 5]} intensity={32} color="#58e0e6" />
      <pointLight position={[5, 5, -4]} intensity={22} color="#6cdf6c" />
      <group position={[0, -0.5, 0]}>
        {cells.map((c) => (
          <Block key={c.id} cell={c} onClick={() => onCycle(c.id)} />
        ))}
      </group>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.7}
        enableDamping
        dampingFactor={0.1}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.05}
      />
    </>
  );
}

function Fallback() {
  return (
    <div className="grid aspect-square w-full place-items-center border border-line-2 glass">
      <div className="flex flex-col items-center gap-5">
        <VoxelCube size={110} color="#3fb24a" />
        <div className="flex gap-4">
          <VoxelCube size={40} color="#58e0e6" />
          <VoxelCube size={40} color="#ffc83a" />
          <VoxelCube size={40} color="#b388ff" />
        </div>
      </div>
    </div>
  );
}

/** Interactive voxel plot — orbit, hover to lift, click a block to change its material. */
export function VoxelPlayground() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const initial = useMemo(buildInitial, []);
  const [cells, setCells] = useState<Cell[]>(initial);
  const [changes, setChanges] = useState(0);

  useEffect(() => setMounted(true), []);

  function cycle(id: string) {
    setCells((cs) => cs.map((c) => (c.id === id ? { ...c, type: (c.type + 1) % TYPES.length } : c)));
    setChanges((n) => n + 1);
  }
  function reset() {
    setCells(initial.map((c) => ({ ...c })));
    setChanges(0);
  }

  if (reduce || !mounted) return <Fallback />;

  return (
    <div data-cursor className="relative aspect-square w-full overflow-hidden border border-line-2 glass">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(#1d2a23_1px,transparent_1px),linear-gradient(90deg,#1d2a23_1px,transparent_1px)] [background-size:32px_32px]" />

      <Canvas dpr={[1, 2]} camera={{ position: [4.6, 4, 5.6], fov: 38 }} gl={{ antialias: true, alpha: true }}>
        <Scene cells={cells} onCycle={cycle} />
      </Canvas>

      <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 animate-pulse-glow bg-grass" />
        <span className="label text-grass">interactive · play with it</span>
      </div>

      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
        <p className="pointer-events-none font-mono text-[10px] leading-tight text-ink-faint">
          click a block to change it
          <br />
          drag to orbit
        </p>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-ink-faint">{changes} changed</span>
          <button
            onClick={reset}
            className="border border-line-2 bg-panel/60 px-2.5 py-1 font-mono text-[10px] text-ink-dim transition-colors hover:border-grass/60 hover:text-grass"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}
