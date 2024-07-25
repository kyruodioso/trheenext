import React from 'react'

const Cube=({props})=> {
   
      return (
        <mesh {...props}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshLambertMaterial attach="material" color="green" />
        </mesh>
      );
    
  }

export default Cube