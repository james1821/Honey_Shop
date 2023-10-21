import React from 'react';
import { Fade, Slide } from "../../node_modules/react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Products({ Logo, Product, paddingTop, data, handleClick, reverseRow, id, Background }) {
  const containerStyle = {
    backgroundColor: Background 
  };
  const images = [
    '/img/Flowers/Flower1.png',
    '/img/Flowers/Flower2.png',
    '/img/Flowers/Flower3.png',
    '/img/Flowers/Flower4.png',
    '/img/Flowers/Flower5.png',

  ];
  
  return (
    <div style={containerStyle} id={id} className={`flex flex-col ${reverseRow} h-screen  ${paddingTop} `}>
      <div className={`h-full lg:h-[430px] md:w-1/2 flex flex-col justify-center items-center`}>
        <div className='flex flex-row justify-center items-center px-2'>
         
          <Slide>
            <img src={images[1]} alt="" className='md:h-[300px] ml-5 md:ml-20 h-[100px]  md:w-full' />
          </Slide>
          <Slide>
            <img src={images[2]} alt="" className='md:h-[300px] ml-1 md:ml-10 h-[100px] md:w-full' />
          </Slide>
          <Fade>
            <img src={images[0]} alt="" className='md:h-[300px] h-[100px] md:w-full' />
          </Fade>
          <Slide direction='right'>
            <img src={images[4]} alt="" className='md:h-[300px]  md:ml-[-2.5rem] h-[100px] md:w-full' />
          </Slide>
          <Slide direction='right'>
            <img src={images[3]} alt="" className='md:h-[300px]  md:ml-[-1rem] h-[100px] md:w-full' />
          </Slide>
        </div>
        <Fade>
          <a href="https://www.facebook.com/dalidapasalubong" target='_blank'>
            <img src="/img/FacebookFind.svg" alt="FindUs" className='h-[50px] md:h-[70px] my-5 md:my-2' />
          </a>
        </Fade>
      </div>

      <div id='PriceList' className='bg-white h-[600px ] md:w-1/2 mb-5'>
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 70,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{ backgroundColor: Background
          
          }} 
          
        >
          {data.map((product, index) => (
            <SwiperSlide key={index}>
              <div
                id='ProductListItems'
                className='flex justify-center items-center text-center flex-row px-5 '
                onClick={() => handleClick(index)}
              >
                <img className="md:h-[500px] w-auto" src={product.prodImg} alt={product.prodName} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
