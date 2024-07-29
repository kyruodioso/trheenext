'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { PerspectiveCamera, Sky } from "@react-three/drei";
import Grid from './Grid';
import Sector from './Sector';


const ThreeScene = ({children}) => {
  return (
    <>
    <div style={{height:'100vh', overflow:'hidden'}}>
    <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <PerspectiveCamera position={[12, 12, 25]} makeDefault />
        <Sky sunPosition={[100, 10, 20]} />
        <Sector />
    </Canvas>
    </div>
    </>
  )
}

export default ThreeScene