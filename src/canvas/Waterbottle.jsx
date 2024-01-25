import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { MathUtils } from 'three';
import state from "../store";

const WaterBottle = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/water_bottle.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  console.log(materials)

  useFrame((state, delta) =>
    easing.dampC(materials.Material.color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  const scaleValue = 0.1;

  return (
    <group key={stateString} scale={[scaleValue, scaleValue, scaleValue]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Material}
        position={[0, 1.231, 0]}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0.1]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0, 0, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials["Material.003"]}
        position={[-2.278, 1.411, 0]}
        rotation={[-0.131, -0.1, 1.031]}
        scale={0.994}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials["Material.003"]}
        position={[0.348, 5.232, 0.001]}
        scale={[0.143, 0.263, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials["Material.001"]}
        position={[0, 1.231, 0]}
      />
    </group>
  );
};

export default WaterBottle;
