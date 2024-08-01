import TitlePage from '@/components/TitlePage'
import React from 'react'
import Card from '@/components/Card'

const sections = [
  { name: 'Documentacion', href: '/dashboard', current: true },
  { name: 'Plantas', href: '/sector', current: false },
  { name: 'Tickets', href: '/tickets', current: false },
  { name: 'Red', href: 'red', current: false },
  { name: 'Documentacion', href: '/documentation', current: false },

]

const page = () => {
  return (
    <>
        <TitlePage title="Home" />
        <div className="container mx-auto">
     <div className="flex justify-center  gap-4">
      {
        sections.map((section)=>(
          <>
          <Card name={section.name} href={section.href}/>
          </>
        ))
      }
      </div>
    </div>
    </>
  )
}

export default page