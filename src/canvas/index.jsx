import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import WaterBottle from "./Waterbottle";
import Car from "./Car";
import Bass from "./Bass";
import Lamp from "./Lamp";
import Chair from "./Chair";

const CanvasModel = ({ props }) => {
  const renderObject = () => {
    switch (props.toLowerCase()) {
      case 'shirt':
        return <Shirt />;
      case 'car':
        return <Car />;
      case 'lamp':
        return <Lamp />;
      case 'waterbottle':
        return <WaterBottle />;
      case 'bass':
        return <Bass />;
      case 'chair':
        return <Chair />;
      default:
        return null;
    }
  };
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <Center>
          {renderObject()}
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
