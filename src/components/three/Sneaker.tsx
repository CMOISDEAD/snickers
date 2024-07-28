import { useRef, useState } from "react";
import { animated, config, useSpring } from "@react-spring/three";
import { Float, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const url = "./models/vans.glb";

export const Sneaker = () => {
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const { scene } = useLoader(GLTFLoader, url);

  // rotate
  const [props, api] = useSpring(() => ({
    to: { rotation: [0, Math.PI / 1.5, 0] },
    from: { rotation: [0, 0, 0] },
    config: config.wobbly,
  }));

  useFrame(() => {
    if (!isDragging) {
      api.start({
        rotation: [0, ref.current?.rotation.y + 0.01, 0],
      });
    }
  });

  return (
    // @ts-ignore
    <animated.primitive
      ref={ref}
      scale={5}
      object={scene}
      onPointerDown={() => setIsDragging(true)}
      onPointerUp={() => setIsDragging(false)}
      onPointerOut={() => setIsDragging(false)}
      {...props}
    />
  );
};

useGLTF.preload(url);
