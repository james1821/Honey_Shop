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
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Home() {
    const [image,setImage]=useState(PasalubongLogo);

    function changeImage(){
        if(image==PasalubongLogo){
        setImage(Logo);
        }else setImage(PasalubongLogo);
    }
  return (
    
    <section id="Home" className='bg-pink-200 h-full relative'>
      
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
       className='h-full'
      >
     
        <SwiperSlide><img className="h-[600px] m-auto" src={Testimonal1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[600px] m-auto" src={Testimonal2} alt="" /></SwiperSlide>
        <SwiperSlide><div className='flex justify-center items-center'><img className='h-[300px] w-auto' src={image} alt="" /></div></SwiperSlide>
       
      </Swiper>
      <button onClick={changeImage}>Change</button>
    </section>
  )
}

export default Home