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
}function Plane({ id, position, rotation,args }) {
  return (
    <mesh key={id} position={position} rotation={rotation} onClick={(e) => alert(id)}>
      <boxGeometry args={args} />
      <meshStandardMaterial attach="material" color="royalBlue" side={DoubleSide} />
    </mesh>
  );
}

const Dashboard = () => {
  console.log(Factory[0].id);

  return (<>
    <div className="h-96">
      {/* Otros componentes y elementos aquí */}
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <PerspectiveCamera position={[12, 12, 25]} makeDefault />
        <Sky sunPosition={[100, 10, 20]} />

        {Factory.map((factory) => (
          <Plane
            key={factory.id}
            id={factory.id}
            position={[factory.planePositionX, factory.planePositionY, factory.planePositionZ]}
            rotation={[factory.rotationA, factory.rotationCentral, factory.rotationB]}
            args={[factory.planeWide, factory.planeHeight, factory.planeLong]}
          />
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
      </div>
    </>
  );
};

export default Dashboard;
