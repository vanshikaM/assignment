import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";

const Cube = () => {
  return (
    <div>
      <Canvas style={{ height: "500px" }}>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={2} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Cube;
