import React from 'react';
import PropTypes from 'prop-types';
function Purches({ name ,hour }) {
  
  return (
    <>
      <div className='bg-[#FFF] shadow-md rounded-lg py-4 px-6 border-[1px] border-[#adadad]'>

        <h1 className='text-xl text-[#2F80ED] font-semibold mb-2'>Credit Hour Remaining 7 hr</h1>
        <hr />

        <div className='py-3 space-y-4'>
          <h1 className='text-[#1C1B1B] font-bold text-xl'>Course Name </h1>
          <ul className='list-inside list-[number]'>
            {name.map((courseName, index) => <li key={index} className='text-[#1c1b1b99] font-medium text-base'>{courseName}</li>)}


          </ul>
        </div>
        <hr />
        <div className='space-y-2 mt-2'>
          <h2 className='text-[#1C1B1B] font-medium text-base '>Total Credit Hour : {hour}</h2>
          <hr />
          <h3 className='text-[#1C1B1B] font-semibold text-base '>Total Price : 48000 USD</h3>
        </div>
      </div>

    </>
  )
}

Purches.propTypes = {
  name: PropTypes.array.isRequired,
  hour : PropTypes.number,
}

export default Purches;