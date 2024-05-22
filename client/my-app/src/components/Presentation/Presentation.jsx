import { PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import NewGLBRequest from "../NewGLBRequest/NewGLBRequest";
import GLBSelector from "../GLBSelector/GLBSelector";
import GLBModel from "../GLBModel/GLBModel";
import axios from "axios";

function Presentation() {
  return (
    <>
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 10 }}
        style={{
          width: "500px",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20px",
        }}>
        <color attach="background" args={["black"]} />
        <PresentationControls
          speed={1}
          global
          zoom={0.1}
          polar={[-0.1, Math.PI / 4]}>
          <Stage environment={"sunset"}>
            <GLBModel scale={0.001} />
          </Stage>
        </PresentationControls>
      </Canvas>
      <GLBSelector />
      <NewGLBRequest />
    </>
  );
}

export default Presentation;
