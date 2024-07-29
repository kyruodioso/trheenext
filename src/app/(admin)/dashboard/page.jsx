"use client";
import TitlePage from "@/components/TitlePage";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Sky } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { GridHelper, DoubleSide } from "three";
import GeoPosition from "@/data/geo";
import Factory from "@/data/factory";
import React from "react";

function Grid() {
  return <primitive object={new GridHelper(200, 200)} receiveShadow />;
}

function Circle(props) {
  return (
    <mesh {...props} onClick={(e) => alert(props.name)}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshLambertMaterial attach="material" color="royalBlue" />
    </mesh>
  );
}
function Plane({ id, position, rotation, args }) {
  return (
    <mesh
      key={id}
      position={position}
      rotation={rotation}
      onClick={(e) => alert(id)}
    >
      <boxGeometry args={args} />
      <meshStandardMaterial
        attach="material"
        color="royalBlue"
        side={DoubleSide}
      />
    </mesh>
  );
}

const handleWallClick = (sectorName) => {
  alert(`Haz hecho clic en el sector: ${sectorName}`);
};

const Dashboard = () => {
  console.log(Factory);

  return (
    <>
      <div className="h-96">
        {/* Otros componentes y elementos aquí */}
        <Canvas >
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <PerspectiveCamera position={[12, 12, 25]} makeDefault />
          <Sky sunPosition={[100, 10, 20]} />

          {Factory.map((factory) => (
            <React.Fragment key={factory.id} >
              {factory.wall.map((wall) => (
                <Plane
                  key={wall.id}
                  id={wall.id}
                  position={[wall.planePositionX, wall.planePositionY, wall.planePositionZ]}
                  rotation={[wall.rotationA, wall.rotationCentral, wall.rotationB]}
                  args={[wall.planeWide, wall.planeHeight, wall.planeLong]}
                  onClick={() => handleWallClick(factory.sector)}
                />
              ))}
              <primitive viible position={[0,0,0]} object={new GridHelper(5.05, 5.20)} receiveShadow color="green"/>
            </React.Fragment>
          ))}
          {GeoPosition.map((geo) => (
            <>
              <Circle
                key={geo.id}
                name={geo.name}
                position={[geo.positionX, geo.positionY, geo.positionZ]}
              />
            </>
          ))}

          <Grid />
        </Canvas>
        |{" "}
      </div>
    </>
  );
};

export default Dashboard;
