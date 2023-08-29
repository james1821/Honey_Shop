import React from 'react'
import { Fade, Slide } from "../../node_modules/react-awesome-reveal";
import { TypeAnimation } from 'react-type-animation';



export default function Products({header, subtitle, Logo}) {
  return (
    <div id='Products' className='h-full lg:h-[500px] flex flex-col justify-center items-center ' >
          <TypeAnimation
  sequence={[
   
    subtitle,
    1000

  ]}
  speed={50}
  style={{ fontSize: '3em', textAlign:'center'}}
  className='hidden md:block'
  repeat={Infinity}
/>
        <div className='flex flex-col lg:flex-row justify-center items-center  mt-10 px-5 '>
              <Slide direction='left'><img src={Logo} alt="" className='md:h-[250px] w-auto basis-1/2'/></Slide>
             
             <Slide direction='right'> <img src="/img/Products-nuts.png" alt="" className='h-auto md:w-[600px]' /></Slide>
             
                <p className='text-center text-2xl px-10 md:hidden '>{subtitle}</p>
           
        </div>
        {/* <Slide
        direction='right'>
        <img src={Logo} alt=""  className='h-[400px] w-auto float-right bottom-0 opacity-10  '/>
        </Slide> */}


    </div>
  )
}
