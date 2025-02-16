"use client";

import * as THREE from "three";
// import { Skateboard } from "@/components/Skateboard";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
// import gsap from "gsap";
// import { Hotspot } from "./Hotspot";
import { WavyPaths } from "./WavyPaths";
import { GroupProps } from "@react-three/fiber";
// import { Pendulum } from "@/components/Pendulum";
import { Pendulum } from "@/components/ui/Pendulum";

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

    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <Canvas
        className="min-h-[60rem] w-full"
        camera={{ position: INITIAL_CAMERA_POSITION, fov: 45 }}
      >
        <Suspense>
            <Scene 
                position={position}
                rotation={rotation}
                scale={scale}
            />
            <directionalLight position={[4, 3.6, 4]} intensity={5} />
        </Suspense>
        <Environment files={"/hdr/warehouse-256.hdr"} />
        <ContactShadows position={[0, -0.29, 0]} opacity={0.85} />
      <OrbitControls />
      </Canvas>


    </div>

  );
}


function Scene({
    position,
    rotation,
    scale,
  }: Props) {
  const containerRef = useRef<THREE.Group>(null);
  const originRef = useRef<THREE.Group>(null);

    return (
        <group>
            {/* <Environment files={"/hdr/warehouse-256.hdr"} /> */}
                <Pendulum
                position={position}
                rotation={rotation}
                scale={scale}   
                />
            </group>
    );



}