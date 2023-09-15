import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function Courses({data,handleSetName}) {
  return (
    <>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        {data.map((Course,index) => <Card key={index} Course={Course} handleSetName={handleSetName}/>)}

    </div>
    
    
    
    </>
  )
}

Courses.propTypes ={
    data : PropTypes.array.isRequired,
    handleSetName:PropTypes.func.isRequired
}
export default Courses;