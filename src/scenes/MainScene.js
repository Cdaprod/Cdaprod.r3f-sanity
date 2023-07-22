// scenes/MainScene.js
import React from 'react';
import { hemisphereLight } from '@react-three/drei';
import Repo3DPreview from '../components/Repo3DPreview';
import RandomGeometries from '../components/RandomGeometries';
import WebFrame from '../components/WebFrame';

function MainScene() {
  return (
    <>
      <hemisphereLight groundColor="red" />
      <WebFrame />
      <Repo3DPreview />
      <RandomGeometries />
      {/* Add other 3D related components here if needed */}
    </>
  );
}

export default MainScene;
