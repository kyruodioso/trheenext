import React from 'react'
import { GridHelper } from 'three';

const Grid=()=> {
    return <primitive object={new GridHelper(90.95, 200)} receiveShadow />;
  }

export default Grid