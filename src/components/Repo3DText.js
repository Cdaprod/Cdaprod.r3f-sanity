// Repo3DText.js
import React, { useMemo } from 'react';
import * as THREE from 'three';

function createRepoTexture(repo) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');
  
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'black';
  context.font = '20px Arial';
  context.fillText(repo.name, 10, 30);
  context.fillText(repo.description || "No description", 10, 60);
  context.fillText(repo.object ? repo.object.text.slice(0, 100) + "..." : "No README", 10, 90);
  
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

function Repo3DText({ repo, position }) {
  const texture = useMemo(() => createRepoTexture(repo), [repo]);

  return (
    <mesh position={position}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Repo3DText;

