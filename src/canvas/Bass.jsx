import React,{useRef} from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { MathUtils } from 'three';
import state from "../store";
import { Color } from 'three';

const Bass = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/keys.glb");

  console.log(materials)

  useFrame((state, delta) =>
    easing.dampC(materials.Metal.color, snap.color, 0.25, delta)
  );
  const stateString = JSON.stringify(snap);

  const scaleValue = 5;
  const positionX = -0.1;
  const positionY = -0.1;
  const positionZ = 0;

  return (
    <group
      key={stateString}
      scale={[scaleValue, scaleValue, scaleValue]}
      position={[positionX, positionY, positionZ]}
      rotation={[0.3, 0.7, 0.15]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.312}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Metal}
            rotation={[0.466, -0.105, -0.206]}
            scale={1.881}
          />
        </group>
      </group>
    </group>
  );
};

export default Bass;
