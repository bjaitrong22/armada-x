import React from 'react';

export default function Scene() {
  return(
    <mesh>
      <boxBufferGeometry attach='geometry' args={[1,1,1]} />
      <meshNormalMaterial attach='material' />
    </mesh>
  )
}

