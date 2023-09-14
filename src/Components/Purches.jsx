import React from 'react'

function Purches() {
  return (
   <>
   <div className='bg-[#FFF] shadow-md rounded-md py-4 px-2 '>
     
     <h1 className='text-xl text-[#2F80ED] font-semibold mb-2'>Credit Hour Remaining 7 hr</h1>
     <hr />

     <div className='py-2'>
        <h1 className='text-[#1C1B1B] font-bold text-xl'>Course Name </h1>
        <ul>
           <li className='text-[#1c1b1b99] font-medium text-sm'>1 Introduction to c programming</li>
        </ul>
     </div>
     <hr />
     <div className='space-y-2'>
     <h2 className='text-[#1C1B1B] font-medium text-base '>Total Credit Hour : 13</h2>
     <hr />
     <h3 className='text-[#1C1B1B] font-semibold text-base '>Total Price : 48000 USD</h3>
     </div>
   </div>
   
   </>
  )
}

export default Purches