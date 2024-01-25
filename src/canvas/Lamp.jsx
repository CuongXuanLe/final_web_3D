import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { useGLTF, } from "@react-three/drei";

import state from "../store";

const Lamp = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/lamp.glb");
  useFrame((state, delta) =>
    easing.dampC(materials.blanco.color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  const scaleValue = 0.2;

  return (
    <group key={stateString} scale={[scaleValue, scaleValue, scaleValue]}>
       <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_Dorado_0.geometry}
            material={materials.Dorado}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_luz_0.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_blanco_0.geometry}
            material={materials.blanco}
          />
        </group>
      </group>
    </group>
  );
};

export default Lamp;
