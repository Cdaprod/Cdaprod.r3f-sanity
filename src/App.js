// App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import MainScene from './scenes/MainScene';

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 22.5] }}>
      <MainScene />
      <Environment background preset="dawn" blur={0.8} />
      <ContactShadows position={[0, -9, 0]} opacity={0.7} scale={40} blur={1} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;