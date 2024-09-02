import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Splat } from "@react-three/drei";

function ModelPly() {
  return (
    <mesh>
      <Splat src="/test.splat" />
    </mesh>
  );
}

export default function App() {
  return (
    <Suspense fallback={"loading..."}>
      <Canvas>
        <directionalLight intensity={0.5} />
        <ambientLight intensity={0.2} />
        <ModelPly />
        <OrbitControls></OrbitControls>
      </Canvas>
    </Suspense>
  );
}
