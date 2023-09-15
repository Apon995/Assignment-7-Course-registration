import React, { useEffect, useState } from 'react'

import Courses from './Courses'
import Purches from './Purches'



function Home() {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [hour , setHour ] = useState(0);


  const handleSetName = (course_name,credit_hour) => {
    let singleName =[]
   let newName = [...name,course_name];
   newName.forEach(nam =>{
      if(!singleName.includes(nam)){
        singleName.push(nam);
      }
      else{
       alert('already exist !')
       return;
      }
    })
   
    
    singleName.forEach(a =>{
      if(!name.includes(a)){
        if(hour < 20){
          setHour(hour + credit_hour)
          setName(singleName)
  
        }
        else{
          alert('you limit the cross')
        }
      }
      
      
    })
 
    
    
  }


  useEffect(() => {
    fetch('Courses.json')
      .then(response => response.json())
      .then(course => setData(course))
      .catch(error => console.error(error))
  }, [])



  return (
    <>
      <div className='px-[2%] flex md:flex-row flex-col-reverse gap-4'>
        <div className='w-[74%]'>
          <Courses data={data} handleSetName={handleSetName} />
        </div>
        <div className='w-[26%] '>
          <Purches name={name} hour={hour} />
        </div>

      </div>



    </>
  )
}

export default Home