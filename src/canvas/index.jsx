import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import WaterBottle from "./Waterbottle";
import Car from "./Car";
import Bass from "./Bass";
import Lamp from "./Lamp";
import Chair from "./Chair";

const CanvasModel = () => {
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
        {/* <Backdrop /> */}
        <Center>
          <Shirt />
          {/* <Car />
          <Lamp />
          <WaterBottle />
          <Bass />
          <Chair /> */}
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
