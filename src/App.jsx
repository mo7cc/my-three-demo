import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Splat,
  PerspectiveCamera,
} from "@react-three/drei";

const KeyboardControl = (setForm, label, dim) => {
  let myDim = dim;
  if (!myDim) {
    myDim = 1;
  }
  document.onkeydown = (e) => {
    switch (e.key) {
      case "ArrowUp":
        setForm((pre) => {
          return {
            ...pre,
            [label]: pre[label] + myDim,
          };
        });
        break;
      case "ArrowDown":
        setForm((pre) => {
          return {
            ...pre,
            [label]: pre[label] - myDim,
          };
        });
        break;
    }
    setForm((pre) => {
      console.log("param", pre);
      return pre;
    });
  };
};

const WuTi1 = () => {
  const [param, setForm] = useState({
    x: -1.6,
    y: 2.5,
    z: 4,
    s: 0.5,
  });
  // KeyboardControl(setForm, "s", 1);
  return (
    <Float scale={param.s}>
      <Splat src="/物体1.splat" position={[param.x, param.y, param.z]} />
    </Float>
  );
};

const WuTi2 = () => {
  const [param, setForm] = useState({
    x: -1.6,
    y: 2.5,
    z: 4,
    s: 0.5,
  });
  // KeyboardControl(setForm, "s", 1);
  return (
    <Float scale={param.s}>
      <Splat src="/物体2.splat" position={[param.x, param.y, param.z]} />
    </Float>
  );
};

function ModelPly() {
  return (
    <mesh scale={2}>
      {/* <WuTi1 /> */}
      <WuTi2 />
      <Splat position={[0, 2, 0]} src="/总场景.splat" />
    </mesh>
  );
}

export default function App() {
  const [Camera, setForm] = useState({
    x: 1,
    y: 1,
    z: 1, // 远近
  });

  KeyboardControl(setForm, "y", 1);

  return (
    <Suspense fallback={"loading..."}>
      <Canvas>
        <PerspectiveCamera position={[Camera.x, Camera.y, Camera.z]}>
          <ModelPly />
        </PerspectiveCamera>

        <OrbitControls></OrbitControls>
      </Canvas>
    </Suspense>
  );
}
