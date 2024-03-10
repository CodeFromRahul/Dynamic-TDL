import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { FaFileMedical } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { MdCancel } from "react-icons/md";
import { motion } from "framer-motion"
function Card(props) {
  return (
    <motion.div drag dragConstraints={props.reference} whileDrag={{scale:1.2}} dragElastic={0.1} className='w-60  h-72 relative   rounded-[35px] bg-zinc-600 overflow-hidden'>
    <div className='px-9 py-8'>

   <FaFileMedical/>
    <h5 className='py-4 text-sm leading-tight font-bold '>{props.data.desc}</h5>
     <div className='footer absolute left-0    w-full py-5 px-7 bottom-0 bg-zinc-900'>
        <div className='flex align-center  justify-between text-white -py-1 mb-7 -mt-1'>
        <h5 className=''>{props.data.fileSize}</h5>
        <span className='w-7 h-7  flex justify-center py-2 bg-zinc-800 align-center rounded-full'>
        {props.data.close ?<MdCancel/>: <LuDownload size='0.7em' color='#fff' />} 
        </span>
        

        
        </div>
        <div>
            {props.data.tag.isOpen&&(
                <div className={`absolute   bottom-0 left-0 h-10  tag w-full ${props.data.tag.tagColor =="blue"? "bg-blue-600":"bg-green-600"}`}>
       <h5 className='text-white flex align-center justify-center  py-2 text-sm font-semibold font-mono'>{props.data.tag.tagTitle}</h5>
        </div>
            )}
        </div>
       
     </div>
    </div>
    </motion.div>
  )
}

export default Card