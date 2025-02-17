"use client";

import dynamic from 'next/dynamic';
import { Suspense } from "react";
import { ContactShadows, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

// Dynamically import Pendulum with no SSR
const Pendulum = dynamic(() => import('@/components/ui/canvas/Pendu').then(mod => mod.Pendu), {
  ssr: false,
  loading: () => null
});

const INITIAL_CAMERA_POSITION = [1.5, 1, 1.4] as const;

type Props = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
};

export function Experience({
  position,
  rotation,
  scale,
}: Props) {
  return (
    <Scene 
            position={position}
            rotation={rotation}
            scale={scale}
          />
  );
}

function Scene({
  position,
  rotation,
  scale,
}: Props) {
  return (
    <group>
      <Pendulum
        position={position}
        rotation={rotation}
        scale={scale}   
      />
    </group>
  );
}