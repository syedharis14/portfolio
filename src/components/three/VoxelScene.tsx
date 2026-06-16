"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Edges, OrbitControls } from "@react-three/drei";
import { useMemo } from "react";

type BlockDef = {
  position: [number, number, number];
  color: string;
  scale: number;
  gem?: boolean;
  speed: number;
};

function Block({ position, color, scale, gem, speed }: BlockDef) {
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.1}>
      <mesh position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          roughness={gem ? 0.15 : 0.78}
          metalness={gem ? 0.65 : 0.08}
          flatShading
          emissive={color}
          emissiveIntensity={gem ? 0.28 : 0.06}
        />
        <Edges scale={1.001} threshold={15} color="#04110b" />
      </mesh>
    </Float>
  );
}

export default function VoxelScene() {
  const blocks = useMemo<BlockDef[]>(
    () => [
      { position: [0, 0, 0], color: "#3fb24a", scale: 1.7, speed: 1.1 },
      { position: [2.7, 1.3, -1], color: "#58e0e6", scale: 0.85, gem: true, speed: 1.7 },
      { position: [-2.8, 0.7, -0.5], color: "#ffc83a", scale: 0.7, gem: true, speed: 1.4 },
      { position: [2.2, -1.6, 0.5], color: "#ff5d5d", scale: 0.6, gem: true, speed: 2 },
      { position: [-2.2, -1.5, -1.2], color: "#b388ff", scale: 0.62, gem: true, speed: 1.6 },
      { position: [0.2, 2.4, -1.5], color: "#6b4a2f", scale: 0.55, speed: 1.3 },
      { position: [-1.4, 2.0, 0.8], color: "#2ee59d", scale: 0.5, gem: true, speed: 2.2 },
      { position: [3.4, -0.6, -1.8], color: "#3fb24a", scale: 0.45, speed: 1.9 },
    ],
    [],
  );

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 7.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 8, 6]} intensity={2.1} />
      <pointLight position={[-6, -3, 5]} intensity={40} color="#58e0e6" />
      <pointLight position={[6, 5, -4]} intensity={28} color="#6cdf6c" />
      <group rotation={[0.1, 0.4, 0]}>
        {blocks.map((b, i) => (
          <Block key={i} {...b} />
        ))}
      </group>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.9}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </Canvas>
  );
}
