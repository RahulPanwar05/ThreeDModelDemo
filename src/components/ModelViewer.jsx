import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { productInfoMap } from "../data/productInfo";

const Model = ({ onMeshClick }) => {
  const { scene } = useGLTF("/IMI Norgren_final_file_glb.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && productInfoMap[child.name]) {
        child.userData.clickable = true;
        child.material.color.set("#ffcc00"); // yellow highlight
      }
    });
  }, [scene]);

  const handlePointerDown = (event) => {
    const meshName = event.object.name;
    if (event.object.userData.clickable) {
      const productData = productInfoMap[meshName];
      if (productData) {
        console.log("Clicked:", meshName, productData);
        onMeshClick(productData);
      }
    }
  };

  return (
    <primitive
      object={scene}
      onPointerDown={handlePointerDown}
      dispose={null}
    />
  );
};

const ModelViewer = ({ onMeshClick }) => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight />
      <directionalLight position={[5, 10, 5]} />
      <OrbitControls />
      <Model onMeshClick={onMeshClick} />
    </Canvas>
  );
};

export default ModelViewer;
