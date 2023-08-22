import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from '../assets/img/Logo.png'
import PasalubongLogo from '../assets/img/FlowerMoney-1.jpg'
import Testimonal1 from '../assets/img/testimonal-1.jpg'
import Testimonal2 from '../assets/img/testimonal-2.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

function Home() {
    
  return (
    
    <section id="Home" className='bg-gradient-to-r from-pink-300 to-pink-100'>
          <h1 className='text-5xl md:text-7xl text-center p-5'>Our Happy Customers</h1>
          
          <Swiper
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
         
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
     
        <SwiperSlide><img className="h-[600px] m-auto" src={Testimonal1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[600px] m-auto" src={Testimonal2} alt="" /></SwiperSlide>
       
       
      </Swiper>
 
    </section>
  )
}

export default Home