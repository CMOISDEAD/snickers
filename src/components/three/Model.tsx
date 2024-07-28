import { Vector3 } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { Sneaker } from "./Sneaker";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";

export const Model = () => {
  return (
    <Canvas className="h-full w-full">
      <ambientLight intensity={5} />
      <directionalLight position={[10, 10, 10]} intensity={10} />
      <Suspense fallback={null}>
        <Sneaker />
        <Quote />
        <Rig />
        <PerspectiveCamera makeDefault position={[1, 2, 5]} fov={2} />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

const Quote = () => {
  const { width } = useThree((state) => state.viewport);

  return (
    <Text
      font="/fonts/Ki.ttf"
      fontSize={width / 9}
      color="black"
      anchorX="center"
      anchorY="middle"
      fontWeight="bold"
    >
      Step Into Cool.
    </Text>
  );
};

const Rig = ({ v = new Vector3() }) => {
  return useFrame(({ camera, pointer }) => {
    camera.position.lerp(v.set(pointer.x / 2, pointer.y / 2, 6), 0.02);
  });
};
