"use client";
import TitlePage from "@/components/TitlePage";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Sky } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { GridHelper, PlaneGeometry,DoubleSide } from "three";
import Cube from "@/components/Cube";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React from "react";
import { DragControls } from "framer-motion";

const GeoPosition = [
  {
    id: 1,
    name: "PC Ascensor",
    positionX: 1,
    positionY: 0.3,
    positionZ: 1,
  },
  {
    id: 2,
    name: "Servidores de Planta",
    positionX: 3,
    positionY: 0.3,
    positionZ: 6,
  },
  {
    id: 3,
    name: "Monitor sector C",
    positionX: 2,
    positionY: 0.3,
    positionZ: 12,
  },
  {
    id: 4,
    name: "Notebook sector D",
    positionX: 3,
    positionY: 0.3,
    positionZ: 20,
  },
  {
    id: 5,
    name: "Notebook sector D",
    positionX: 5,
    positionY: 0.3,
    positionZ: 8,
  },
  {
    id: 6,
    name: "Notebook Sector A",
    positionX: 5,
    positionY: 0.3,
    positionZ: 12,
  },
  {
    id: 7,
    name: "PC Escritorio",
    positionX: 11,
    positionY: 0.3,
    positionZ: 22,
  },
  {
    id: 8,
    name: "Impresora PB",
    positionX: 21,
    positionY: 0.3,
    positionZ: 12,
  },
  {
    id: 9,
    name: "Notebook Sector E",
    positionX: 12,
    positionY: 0.3,
    positionZ: 24,
  },
  {
    id: 10,
    name: "Camara Vigilancia",
    positionX: 7,
    positionY: 0.3,
    positionZ: 2,
  },
];

function Grid() {
  return <primitive object={new GridHelper(100, 100)} receiveShadow />;
}

function Circle(props) {
  return (
    <mesh {...props} onClick={(e) => alert(props.name)}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshLambertMaterial attach="material" color="royalBlue" />
    </mesh>
  );
}

function Plane(props) {
  return (
    <mesh
      {...props}
      position={[props.planePositionX / 2, 1, props.planePositionY]}
      rotation={[0, props.rotationPlane,0]}
    >
       <boxGeometry args={[50, 2, 0.7]} />
      <meshStandardMaterial attach="material" color="royalBlue" side={DoubleSide} />    </mesh>
  );
}

function Spheros(...props) {
  return (
    <mesh
      visible
      userData={{ hello: "world" }}
      position={[1, 2, 3]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="royalblue" transparent="true" />
    </mesh>
  );
}

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleRoomClick = (data) => {
    alert(data);
  };

  return (
    <>
      <div className="h-96">
        <TitlePage title="Darshboard" />

        <Canvas>
          <OrbitControls></OrbitControls>
          <ambientLight intensity={0.5}></ambientLight>
          <PerspectiveCamera position={[12, 12, 25]} makeDefault />
          <Sky sunPosition={[100, 10, 20]}></Sky>
          <Plane planePositionX={3} planePositionY={12} rotationPlane={0} />
          <Plane planePositionX={1} planePositionY={2} rotationPlane={0} />
          <Plane planePositionX={3} planePositionY={12} rotationPlane={300} />

          <Plane />
          {GeoPosition.map((geo) => (
            <>
              <Circle
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
