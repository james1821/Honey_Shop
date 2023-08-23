import React from 'react'
import { Fade, Slide } from "../../node_modules/react-awesome-reveal";




export default function Products({header, subtitle, Logo}) {
  return (
    <div id='Products' className='h-full  ' >
        
        <div className='flex flex-col lg:flex-row justify-center items-center absolute mt-10 px-5 '>
               <h1 className='text-center text-5xl md:text-[8rem] font-heading pb-5' >{header}</h1>
                <p className='text-center text-2xl px-3 '>{subtitle}</p>
           
        </div>
        <Slide
        direction='right'>
        <img src={Logo} alt=""  className='h-[400px] w-auto float-right bottom-0 opacity-10  '/>
        </Slide>


    </div>
  )
}
