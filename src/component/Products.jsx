import React from 'react'
import { Fade, Slide } from "../../node_modules/react-awesome-reveal";
import { TypeAnimation } from 'react-type-animation';



export default function Products({header, subtitle, Logo}) {
  return (
    <div id='Products' className='h-full lg:h-[500px] flex flex-col justify-center items-center ' >
         
        <div className='flex flex-col lg:flex-row justify-center items-center  mt-10 px-5 '>
              <Slide direction='left'><img src={Logo} alt="" className='md:h-[250px] w-auto basis-1/2 h-[100px]'/></Slide>
             
             <Slide direction='right'> <img src="/img/Products-nuts.png" alt="" className='h-auto md:w-[600px]' /></Slide>
             
                
           
        </div>
        <img src = "/img/FacebookFind.svg" alt="FindUs" className='h-[50px] md:h-[70px]'/>
        <TypeAnimation
      sequence={[
     
        'Interested?',
        1000, 
        'Message Us On Our Facebook Page',
        2000
      ]}
      wrapper="span"
      speed={50}
     className='text-[1rem] md:text-5xl'

      repeat={Infinity}
    />


        
      
                

    </div>
  )
}
