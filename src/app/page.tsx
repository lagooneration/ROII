'use client';

import dynamic from 'next/dynamic'
import { Suspense, useRef } from 'react'
import Hero from "@/components/sections/hero/Hero";
import VideoBlock from "@/components/sections/videoblock/VideoBlock";
import CoursesGrid from "@/components/sections/coursesgrid/CoursesGrid";
import TeamGrid from "@/components/sections/teamgrid/TeamGrid";
import { CONSULTANTS } from "@/constants/consultants";
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Footer } from '@/components/ui/Footer';

const View = dynamic(() => import('@/components/ui/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/ui/canvas/View').then((mod) => mod.Common), { ssr: false })

function BasicGeometry(props: {
  rotation?: [number, number, number];
  position?: [number, number, number];
  scale?: number | [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function Home() {
  return (
    <>
      <Hero 
        title={"ROI Punjab"} 
        description={"Land of the Five Rivers"} 
        button={{
          children: "Know More",
          href: "/"
        }}
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <View orbit className='flex h-full w-full flex-col items-center justify-center'>
          <Suspense fallback={null}>
            <BasicGeometry
              rotation={[0, 0, 0]}
              position={[0, 0, 0]}
              scale={[1, 1, 1]}
            />
            <Common color={"#000000"}/>
          </Suspense>
        </View>
      </div>
      <CoursesGrid 
        heading={"Courses"}
        body={"Registrations Open!"}
        courses={[
          { 
            id: "course1",
            steps: [
              {
                id: "step1",
                name: "Social Entrepreneurship",
                seats: 24,
              },
            ],
          },
          {
            id: "course2", 
            steps: [
              {
                id: "step2",
                name: "Smart City Fellowship",
                seats: 6,
              },
            ],
          }
        ]}
      />
      <TeamGrid heading='MENTORS' consultants={CONSULTANTS} />
      <VideoBlock />
      <Footer />
    </>
  );
}
