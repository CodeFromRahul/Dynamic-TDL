import React, { useRef } from 'react'
import Card from "./Card"

function Foreground () {
   const ref=useRef(null)
    const data=[{
   
        desc:"React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
        fileSize:".09mb",
        close:false,
        tag:{
            isOpen:false, tagTitle:"Close" , tagColor:"green"
        },
    
      },
{
   
        desc:"React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
        fileSize:".09mb",
        close:true,
        tag:{
            isOpen:true, tagTitle:"Download Now" , tagColor:"green"
        },
    
      },
      {
      desc:"React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
      fileSize:".09mb",
      close:true,
      tag:{
          isOpen:true, tagTitle:"Upload Now" , tagColor:"blue"
      },
  
    },
      {
      desc:"React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
      fileSize:".09mb",
      close:false,
      tag:{
          isOpen:true, tagTitle:"Upload Now" , tagColor:"blue"
      },
  
    },
      {
      desc:"React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
      fileSize:".29mb",
      close:true,
      tag:{
          isOpen:false, tagTitle:"Upload Now" , tagColor:"blue"
      },
  
    },
    ];

  return (
    <div ref={ref} className='fixed top-0 z-[3] left-0 w-full h-full flex gap-10 p-5 flex-wrap  '>
        {data.map((item,index)=>(
            <Card reference={ref} data={item}/>
        ))}
    </div>

  )
}

export default  Foreground