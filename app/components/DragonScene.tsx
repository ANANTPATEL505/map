"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Float } from "@react-three/drei"

function Dragon() {

  const { scene } = useGLTF("/source/dragon.glb")

  return (
    <Float speed={5} rotationIntensity={1}>
      <primitive object={scene} scale={15} />
    </Float>
  )
}

export default function DragonScene(){

  return (
    <div className="w-full h-[500px]">

      <Canvas camera={{ position:[0,1,6] }}>

        <ambientLight intensity={0.5}/>
        <directionalLight position={[5,5,5]}/>

        <Dragon />

        <OrbitControls enableZoom={false}/>

      </Canvas>

    </div>
  )
}