import { Vector3 } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { Sneaker } from "./Sneaker";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";

interface Props {
  description: string | null;
}

export const Model = ({ description }: Props) => {
  return (
    <Canvas className="h-full w-full">
      <ambientLight intensity={5} />
      <directionalLight position={[10, 10, 10]} intensity={10} />
      <Suspense fallback={null}>
        <Sneaker />
        <Quote description={description} />
        <Rig />
        <PerspectiveCamera makeDefault position={[1, 2, 5]} fov={2} />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

const Quote = ({ description }: Props) => {
  const color = "black";
  const { width } = useThree((state) => state.viewport);

  return (
    <>
      <Text
        font="/fonts/Ki.ttf"
        fontSize={width / 10}
        maxWidth={width / 3}
        color={color}
        anchorX="right"
        anchorY="middle"
        fontWeight="bold"
      >
        Step Into Cool.
      </Text>
      <Text
        font="/fonts/Ki.ttf"
        fontSize={width / 30}
        maxWidth={width / 2}
        color={color}
        anchorX="center"
        anchorY={0.07}
        fontWeight="bold"
      >
        A {description || "Modern"} Design
      </Text>
    </>
  );
};

const Rig = ({ v = new Vector3() }) => {
  return useFrame(({ camera, pointer }) => {
    camera.position.lerp(v.set(pointer.x / 2, pointer.y / 2, 6), 0.02);
  });
};
