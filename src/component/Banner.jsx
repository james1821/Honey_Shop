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
           <Fade > <h1 className='text-5xl md:text-[90px] mt-10 md:mt-20  text-center '><span className='text-pink-500'>"Quality Products</span>, for everyone"</h1></Fade>
            <div className='flex  justify-center  items-center w-1/2 lg:float-right relative z-10 my-10 md:gap-10 gap-5'> 
               
               <Slide
               direction='left'
              
               > <img className='h-[80%] w-auto' src={Logo} alt="" />
               </Slide> 

               <Slide
               direction='right'
            
               >  <img  className='h-[100%] w-auto' src={PasalubongLogo} alt="" />
               </Slide>

            </div>
          
        </div>
       <Fade>  <img  src={Honelyn1} alt="" className='h-[450px] md:h-[650px] m-auto lg:m-0 z-0' /></Fade>
     
       
       

   </header>
  )
}

export default Banner