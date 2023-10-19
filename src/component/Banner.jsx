import React from 'react'
import '../App.css'
import Honelyn1 from '../assets/img/Honelyn-1.png'
import Logo from '../assets/img/Logo.png'
import PasalubongLogo from '../assets/img/pasalubong_logo.png'
import { Fade, Slide } from "../../node_modules/react-awesome-reveal";

function Banner() {
  return (
    <header id='head' className='h-full bg-white ' >
        <div className='flex flex-col justify-center  items-center lg:w-1/2 lg:float-right relative z-10'> 
           <Fade > <h1 className='text-5xl md:text-[90px] mt-20 md:mt-20  text-center '><span className='text-pink-500'>"Quality Products</span>, made with love"</h1></Fade>
            <div className='flex  justify-center  items-center w-1/2 lg:float-right relative z-10 my-10 md:gap-10 gap-5'> 
               
               <Slide
               direction='right'
              
               > <img className='w-auto' src={Logo} alt="" loading="lazy" />
               </Slide> 

               {/* <Slide
               direction='right'
            
               > <a href='#Products'><img  className='h-[100%] w-auto' src={PasalubongLogo} alt="" loading="lazy"/></a> 
               </Slide> */}

            </div>
          
        </div>
       <Fade delay={200}>  <img  src={Honelyn1} alt="" className='h-[400px] md:h-[680px] m-auto lg:m-0 z-0'  loading="lazy"/></Fade>
     
       
       

   </header>
  )
}

export default Banner