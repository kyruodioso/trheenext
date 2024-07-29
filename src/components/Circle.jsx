const { SphereGeometry } = require("three");

const Circle=(props)=> {
    return (
      <mesh {...props} onClick={(e) => alert(props.name)}>
        <sphereGeometry args={[0.5, 0.5, 0.5]} />
        <meshBasicMaterial attach="material" color="royalBlue" />
      </mesh>
    );
  }

  export default Circle