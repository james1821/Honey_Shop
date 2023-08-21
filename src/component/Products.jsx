import React from 'react'
import { Fade, Slide } from "../../node_modules/react-awesome-reveal";


export default function Products({header, subtitle, Logo}) {
  return (
    <div id='Products' className='h-full'>
        <div className='flex flex-col md:flex-row justify-center items-center absolute mt-10'>
         
                <h1 className='text-center text-5xl md:text-[8rem]  pb-5' >{header}</h1>
                <p className='text-center text-2xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita architecto perspiciatis labore provident quaerat debitis voluptate ab aliquid inventore culpa quasi doloremque vel pariatur veritatis, fugit molestias? Voluptatem, ratione!</p>
           
        </div>
        <Slide
        direction='right'>
        <img src={Logo} alt=""  className='h-[400px] w-auto float-right bottom-0 opacity-25 relative '/>
        </Slide>


    </div>
  )
}
