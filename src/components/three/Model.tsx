import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Sneaker } from "./Sneaker";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export const Model = () => {
  return (
    <Canvas
      className="h-full w-full"
      gl={{ preserveDrawingBuffer: true }}
      onCreated={({ gl }) => {
        gl.setClearColor("#282828");
      }}
    >
      <ambientLight intensity={5} />
      <directionalLight position={[10, 10, 10]} intensity={10} />
      <Suspense fallback={null}>
        <Sneaker />
        <PerspectiveCamera makeDefault position={[1, 2, 5]} fov={2} />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};
