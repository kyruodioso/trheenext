import React from 'react'
import Factory from '@/data/factory'
import GeoPosition from '@/data/geo'
import Plane from './Plane'
import Circle from './Circle'
import { GridHelper } from 'three'

const handleWallClick = (sectorName) => {
    alert(`Haz hecho clic en el sector: ${sectorName}`);
  };

const Sector = () => {
  return (
    <>
    {Factory.map((factory) => (
  <React.Fragment key={factory.id} >
    {
        factory.sectores.map((sector)=>(
            <React.Fragment key={sector.id} >
            {sector.wall.map((wall) => (
                <Plane
                  key={wall.id}
                  id={wall.id}
                  position={[wall.planePositionX, wall.planePositionY, wall.planePositionZ]}
                  rotation={[wall.rotationA, wall.rotationCentral, wall.rotationB]}
                  args={[wall.planeWide, wall.planeHeight, wall.planeLong]}
                  onClick={() => handleWallClick(factory.sectores)}
                />
              ))}
                </React.Fragment>

        ))
    }
  
    <primitive viible position={[0,0,0]} object={new GridHelper(5.05, 5.20)} receiveShadow color="green"/>
  </React.Fragment>
))}
{GeoPosition.map((geo) => (
  <>
    <Circle
      key={geo.id}
      name={geo.name}
      position={[geo.positionX, geo.positionY, geo.positionZ]}
      onClick={()=>alert(geo.name)}
    />
  </>
))}
    </>
  )
}

export default Sector