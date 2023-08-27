import React from 'react'
import { Fade, Slide } from "react-awesome-reveal";




export default function Products({header, subtitle, Logo}) {
  return (
    <div id='Products' className='h-full lg:h-[500px] flex flex-col justify-center items-center ' >
           <p className='text-center w-2/3 text-6xl px-10 hidden lg:block '>{subtitle}</p> 
        <div className='flex flex-col lg:flex-row justify-center items-center  mt-10 px-10 '>
              <Slide direction='left'><img src={Logo} alt="" className='md:h-[250px] w-auto basis-1/2'/></Slide>
             
             <Slide direction='right'> <img src="/img/Products-nuts.png" alt="" className='h-auto md:w-[600px] pb-5' /></Slide>
             
                <p className='text-center text-3xl mx-10 md:hidden '>{subtitle}</p>
           
        </div>
        {/* <Slide
        direction='right'>
        <img src={Logo} alt=""  className='h-[400px] w-auto float-right bottom-0 opacity-10  '/>
        </Slide> */}


    </div>
  )
}
