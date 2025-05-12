import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const ClickableMesh = ({ mesh, onMeshClick }) => {
  const [hovered, setHovered] = useState(false);

  // Clone material to safely change its color on hover
  useEffect(() => {
    mesh.material = mesh.material.clone();
  }, [mesh]);

  return (
    <primitive
      object={mesh}
      onClick={() => onMeshClick({ name: "Train Door" })} // Dummy data
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
      material-color={hovered ? "#ffcc00" : "#ffffff"}
    />
  );
};

const Model = ({ onMeshClick }) => {
  const { scene } = useGLTF("./public/IMI Norgren_final_file_glb.glb");
  const [clickableMesh, setClickableMesh] = useState(null);

  useEffect(() => {
    let targetMesh = null;
    scene.traverse((child) => {
      if (child.isMesh && child.name === "Circle023_2") {
        targetMesh = child;
      }
    });
    if (targetMesh) {
      setClickableMesh(targetMesh);
    }
  }, [scene]);

  return (
    <>
      {/* Full model but without the clickable mesh */}
      <primitive object={scene} />

      {/* Add the clickable mesh separately */}
      {clickableMesh && (
        <ClickableMesh mesh={clickableMesh} onMeshClick={onMeshClick} />
      )}
    </>
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
