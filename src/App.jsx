import { Billboard, Float, OrbitControls, Splat, Text } from "@react-three/drei";
import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";

function ModelPly() {

  return (
    <mesh scale={2}
      >
      <Float>
        <Splat  src="/物体1.splat" scale={0.5} position={[-1.6, 2.5, 4]} />
      </Float>
      {/* <Float>
        <Splat src="/物体2.splat" scale={0.5} position={[0, 0, 0]} />
      </Float> */}
      <Splat position={[0, 2, 0]} src="/总场景.splat" />
    </mesh>
  );
}

export default function App() {
  return (
    <Suspense fallback={"loading..."}>
      <Canvas shadows  camera={{ position: [4, 4, 4], fov: 35 }} scene>
        <ambientLight intensity={0.5} />
        <spotLight position={[50, 10, 50]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
        <ModelPly />
        <OrbitControls></OrbitControls>
      </Canvas>
    </Suspense>
  );
}
