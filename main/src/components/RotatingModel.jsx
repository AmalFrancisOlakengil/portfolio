import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Environment } from '@react-three/drei';

function RotatingModel() {
  const meshRef = useRef();
  
  // Use useFrame to animate the rotation every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Manual slow rotation for effect
      meshRef.current.rotation.x += delta * 0.1; 
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* 3D Model: Wireframe Icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial 
          color="#000000" 
          wireframe={true} 
          roughness={0.1}
        />
      </mesh>
      
      {/* 3D Text centered on the shape */}
      <Text 
        position={[0, 0, 0]} 
        fontSize={0.4} 
        color="#000000" 
        anchorX="center" 
        anchorY="middle"
        rotation={[-Math.PI / 2, 0, 0]} /* Make it flat */
      >
        DATA & DEV
      </Text>
    </group>
  );
}

export default function SceneWrapper() {
    return (
        <>
            {/* Standard Lighting Setup (B&W style) */}
            <ambientLight intensity={1.5} />
            <spotLight position={[10, 10, 10]} intensity={1} />
            <directionalLight position={[-5, 5, 5]} intensity={1} />
            
            <RotatingModel />
            
            {/* Allows model rotation via mouse interaction */}
            <OrbitControls 
                enableZoom={false} 
                enablePan={false} 
                autoRotate={true} 
                autoRotateSpeed={0.5}
            />
            {/* Use a simple environment map for subtle reflections */}
            <Environment preset="studio" /> 
        </>
    );
}