import React from 'react'

function Background (){

  return (
    <>
    <div className='fixed w-full h-screen z-[2]'>
    <div className=' w-full text-zinc-600 flex z-[2] justify-center absolute py-10 top-[5%]  font-semibold text-xl '>DOCUMENTS.</div>
    <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] tracking-tighter leading-none font-semibold text-zinc-900 '>Docs.</h1>
  </div>
  </>
  )

}

export default Background;