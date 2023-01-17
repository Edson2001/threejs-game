import { useEffect, useState } from 'react'
import '../App.css'
import { Canvas, useLoader } from '@react-three/fiber'
import { Grid, KeyboardControls, PointerLockControls, OrbitControls, Stars, Stats, useAnimations, useGLTF, useTexture, Sky, SpotLight, Shadow } from '@react-three/drei'
import { TextureLoader } from 'three'

function MyGround(){
  return (
    <mesh>
      <boxGeometry  args={[30, 1, 30]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}

function MyRogue(){
  const {scene, animations} = useGLTF('/Rogue.gltf')
  
  const {actions} = useAnimations(animations, scene)

  useEffect(()=>{
    actions.Run?.play() 
  })
 
  return (
    <primitive object={scene} ></primitive>
  )

}

function Game() {
  return (
   
   <Canvas>
    <Stars />
    <Grid />
    <Sky />
    <SpotLight />
    <Shadow />
    <OrbitControls />
    <ambientLight />
    <axesHelper />
    
    <Stats />
    <MyGround />
    <MyRogue />
   
   </Canvas>
  
  )
}

export default Game
