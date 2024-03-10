import React from 'react'
import Card from "./Card"

function Foreground () {
    const data=[{
   
        desc:"React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
        fileSize:".09mb",
        close:false,
        tag:{
            isOpen:false, tagTitle:"Download Now" , tagColor:"Green"
        },
    
      },
{
   
        desc:"React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
        fileSize:".09mb",
        close:true,
        tag:{
            isOpen:true, tagTitle:"Download Now" , tagColor:"Green"
        },
    
      },
      {
      desc:"React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
      fileSize:".09mb",
      close:true,
      tag:{
          isOpen:true, tagTitle:"Download Now" , tagColor:"Green"
      },
  
    },
    ];

  return (
    <div className='fixed top-0 z-[3] left-0 w-full h-full flex gap-10 m-10  '>
        {data.map((item,index)=>(
            <Card data={item}/>
        ))}
    </div>

  )
}

export default  Foreground