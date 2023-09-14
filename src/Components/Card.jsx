import React from 'react'

function Card() {
  return (
    <>
    <div className='bg-[#FFF] shadow-md rounded-lg px-4 py-3  border-[1px] border-[#adadad]'>
        <img src="https://i.ibb.co/PmPr53Z/Python-Featured-Image.png" alt="" className=' w-[280px] h-[200px] rounded-md'/>

        <div className='space-y-2 py-3'>
            <h1 className='text-[#1C1B1B] text-xl font-medium'>Introduction to C Programming</h1>
            <p className='text-[#1c1b1b99] font-medium text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

            <div className='flex text-[#1c1b1b99] font-medium text-base items-center gap-7'>
                <p> $ price : 1500 </p>
                <p><i class="fa-solid fa-book-open"></i> credit : 1hr</p>

            </div>
        </div>

        <button className='py-2 w-full text-[#FFF] font-semibold text-base bg-[#2F80ED]  rounded-md'>Select</button>

    </div>
    
    
    </>
  )
}

export default Card