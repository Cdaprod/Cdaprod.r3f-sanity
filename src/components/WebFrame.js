// components/WebFrame.js
import React from 'react';
import { Html, Float } from '@react-three/drei';

function WebFrame() {
  return (
    <Float floatIntensity={10} rotationIntensity={4}>
      <Html castShadow receiveShadow occlude="blending" transform>
        <iframe title="embed" width={700} height={500} src="https://sanity.cdaprod.dev" frameBorder={0} />
      </Html>
    </Float>
  );
}

export default WebFrame;
