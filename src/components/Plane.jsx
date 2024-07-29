import { DoubleSide } from "three";

const Plane=({ id, position, rotation, args })=> {
    return (
      <mesh
        key={id}
        position={position}
        rotation={rotation}
        onClick={(e) => alert(id)}
      >
        <boxGeometry args={args} />
        <meshMatcapMaterial
          attach="material"
          side={DoubleSide}
        />
      </mesh>
    );
  }

  export default Plane;