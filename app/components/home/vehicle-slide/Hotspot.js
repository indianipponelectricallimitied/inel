"use client";
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function Hotspot({ x, y, label, object }) {
  const [showModel, setShowModel] = useState(false);

  return (
    <div
      className="hotspot"
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)"
      }}
    >
      <div 
        className="hotspot-dot cursor-pointer bg-black w-10 h-10 rounded-full" 
        onClick={() => setShowModel(!showModel)}
      />
      <div className="hotspot-label">{label}</div>
      
      {showModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-[80vw] h-[80vh] relative">
            <button
              className="absolute top-2 right-2 text-black"
              onClick={() => setShowModel(false)}
            >
              Close
            </button>
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Model url={object} />
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      )}
    </div>
  );
} 