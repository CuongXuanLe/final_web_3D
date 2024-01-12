import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, useGLTF, Environment, AccumulativeShadows } from "@react-three/drei";

export const App = ({ position = [ -1, 0, 2.5 ], fov = 25}) => (
  <Canvas
    eventSource={document.getElementById('root')}
    eventPrefix="client"
    camera={{ position, fov }} >
    <ambientLight intensity={0.5} />
    <Environment preset="city"/>
    <Center>
      <Shirt />
      <Backdrop />
    </Center>
    <OrbitControls />
  </Canvas>
)


function Shirt(props) {
  const { nodes, materials } = useGLTF("/shirt_starter_test.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        position={[0.419, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

function Backdrop () {
  return (
    <AccumulativeShadows
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    ></AccumulativeShadows>
  )
}

useGLTF.preload("/shirt_starter_test.glb");