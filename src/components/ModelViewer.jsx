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
    <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <OrbitControls
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
        zoomSpeed={0.6}
        maxDistance={30}
        minDistance={3}
        maxPolarAngle={Math.PI / 2.2} // prevents flipping upside down
        target={[0, 1, 0]} // focus on center of model
      />
      <Model onMeshClick={onMeshClick} />
    </Canvas>
  );
};

export default ModelViewer;
