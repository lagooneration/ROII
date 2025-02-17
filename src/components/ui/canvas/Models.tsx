'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'

export function Globe(props) {
    const { scene } = useGLTF('/untitled.gltf')
  
    useFrame((state, delta) => (scene.rotation.y += delta))
  
    return <primitive object={scene} {...props} />
  }

  export function Duck(props) {
    const { scene } = useGLTF('/models/duck.glb')
  
    useFrame((state, delta) => (scene.rotation.y += delta))
  
    return <primitive object={scene} {...props} />
  }
  export function Dog(props) {
    const { scene } = useGLTF('/models/dog.glb')
  
    return <primitive object={scene} {...props} />
  }

  export function BasicGeometry(props) {
    const meshRef = useRef()
    
    useFrame((state, delta) => {
      if (meshRef.current) {
        meshRef.current.rotation.x += delta * 0.5
        meshRef.current.rotation.y += delta * 0.2
      }
    })

    return (
      <mesh ref={meshRef} {...props}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    )
  }