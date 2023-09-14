import React from 'react'
import Card from './Card'
import Courses from './Courses'
import Purches from './Purches'

function Home() {
  return (
    <>
    <div className='px-[5%] flex md:flex-row flex-col-reverse gap-4'>
      <div className='w-[70%] border-2 border-black'>
       <Courses/>
      </div>
      <div className='w-[30%] border-2 border-red-800'>
        <Purches/>
      </div>

    </div>
    
    
    
    </>
  )
}

export default Home