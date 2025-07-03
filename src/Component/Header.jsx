import React from 'react'
import { BellDot, Search } from 'lucide-react';

const Header = () => {

    const handleClick = ()=>{
        alert("notification")
    }
  return (
    <div className='h-[5vh] bg-gray-300 flex items-center justify-between rounded-t'>

        <p className='pl-5 text-gray-500'>Spreadsheet </p>
        <div className='pr-5 flex items-center gap-2'>
           
             <div className='relative flex items-center '>
                <Search className='absolute size-5 pl-1 text-gray-500'/>
<input type="search" name="search" id="" placeholder='Search Within Sheet' className='text-[10px] border pl-5 py-1'/>

             </div>
              <BellDot className='text-gray-500 hover:text-black ' onClick={handleClick}/>
             <div className='profile border  border-gray-700 size-7  rounded-full  flex items-center justify-center object-cover overflow-hidden'>
                <img src="/vite.svg" alt="" className='h-5' />
              
             </div>
           

        </div>
        
    </div>
  )
}

export default Header