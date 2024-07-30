import React from 'react'
import ThreeScene from '@/components/ThreeScene'
import DataList from '@/components/DataList'
import Factory from '@/data/factory'


const Sector = () => {
  return (
    <>
    <div className='grid grid-cols-2'>
      <div className='m-2'>
        <DataList/>
      </div>
      <div>
     <ThreeScene/>
     </div>
     </div>
    </>
  )
}

export default Sector