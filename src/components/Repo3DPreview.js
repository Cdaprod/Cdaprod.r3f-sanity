// Repo3DPreview.js
import React, { useState, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { fetchRepos } from './GithubAPI';

function createRepoTexture(repo) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');
  
  // Customize this to change how the data appears on the box
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'black';
  context.font = '20px Arial';
  context.fillText(repo.name, 10, 30);
  context.fillText(repo.description || "No description", 10, 60);
  
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

function Repo({ repo, position }) {
  const texture = useMemo(() => createRepoTexture(repo), [repo]);

  return (
    <mesh position={position}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function Repo3DPreview() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const repoData = await fetchRepos();
      setRepos(repoData);
    }
    fetchData();
  }, []);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {repos.map((repo, index) => (
        <Repo key={index} repo={repo} position={[index * 2, 0, 0]} />
      ))}
    </Canvas>
  );
}
