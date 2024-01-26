import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

const Chair = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/akm.glb");

  console.log("check materials: ", materials);

  useFrame((state, delta) =>
    easing.dampC(materials["Material.012"].color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString} rotation={[0, 2, 0.2]} position={[1.1, 0, 0]}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AKM_wooden_furniture_M_AKM_furniture_0.geometry}
          material={materials.M_AKM_furniture}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AKM_body_M_AKM_body_0.geometry}
          material={materials.M_AKM_body}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AKM_bakelite_mag30rds_Material012_0.geometry}
          material={materials["Material.012"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[107.453, 100, 100]}
        />
      </group>
    </group>
  );
};

export default Chair;
