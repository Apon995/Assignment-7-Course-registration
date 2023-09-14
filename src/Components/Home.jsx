import React, { useEffect, useState } from 'react'
import Card from './Card'
import Courses from './Courses'
import Purches from './Purches'

function Home() {
    const [data , setData]= useState([]);


    useEffect(()=>{
        fetch('Courses.json')
        .then(response => response.json())
        .then(course => setData(course))
        .catch(error => console.error(error))
    },[])


    console.log(data)
  return (
    <>
    <div className='px-[2%] flex md:flex-row flex-col-reverse gap-4'>
      <div className='w-[70%]'>
       <Courses data={data}/>
      </div>
      <div className='w-[30%] '>
        <Purches/>
      </div>

    </div>
    
    
    
    </>
  )
}

export default Home