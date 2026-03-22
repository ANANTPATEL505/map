"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { useRef } from "react"

function Dragon() {
  const { scene } = useGLTF("/source/dragon.glb")
  const ref = useRef<any>()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (ref.current) {

      // move forward
      ref.current.position.x = (time % 20) - 10

      // flying wave motion
      ref.current.position.y = Math.sin(time * 2) * 0.5

      // slight rotation
      ref.current.rotation.y = -Math.PI / 2
    }
  })

  return <primitive ref={ref} object={scene} scale={20} />
}

export default function FlyingDragon() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 2, 8] }}>

        <ambientLight intensity={0.6} />

        <directionalLight position={[5, 5, 5]} />

        <Dragon />

      </Canvas>
    </div>
  )
}