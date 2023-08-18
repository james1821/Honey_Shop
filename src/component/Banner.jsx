import React from 'react'
import '../App.css'
import Honelyn1 from '../assets/img/Honelyn-1.png'
import Logo from '../assets/img/Logo.png'
import Sunflower from '../assets/img/sunflower.png'
function Banner() {
  return (
    <header id='head' className='h-full bg-sunflower ' >
        <div className='flex flex-col justify-center  items-center lg:w-1/2 lg:float-right relative z-10'> 
            <h1 className='text-5xl mt-20 text-center '>"Quality Products, for everyone"</h1>
            <div className='flex  justify-center  items-center w-1/2 lg:float-right relative z-10'> 
                 <img className='h-[100px]' src={Logo} alt="" />
                 <img className='h-[100px]' src={Logo} alt="" />
                

            </div>
          
        </div>
       
       <img  src={Honelyn1} alt="" className='h-[500px] m-auto md:m-0 z-0' />
       
       

   </header>
  )
}

export default Banner