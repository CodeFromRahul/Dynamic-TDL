import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { FaFileMedical } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";

function Card(props) {
  return (
    <div className='w-60 h-72 relative rounded-[35px] bg-zinc-600 overflow-hidden'>
    <div className='px-9 py-8'>

   <FaFileMedical/>
    <h5 className='py-4 text-sm leading-tight font-bold '>{props.data.desc}</h5>
     <div className='footer absolute left-0    w-full py-5 px-7 bottom-0 bg-zinc-900'>
        <div className='flex align-center  justify-between text-white -py-1 mb-7 -mt-1'>
        <h5 className=''>0.5mb</h5>
        <span className='w-7 h-7  flex justify-center py-2 bg-zinc-800 align-center rounded-full'>
        <LuDownload size='0.7em' color='#fff' />
        </span>
        

        
        </div>
        <div className='absolute   bottom-0 left-0 h-10  tag w-full bg-green-600 '>
       <h5 className='text-white flex align-center justify-center  py-2 text-sm font-semibold font-mono'>Download Now</h5>
        </div>
     </div>
    </div>
    </div>
  )
}

export default Card