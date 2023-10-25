import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TypeAnimation } from 'react-type-animation';

export default function Products({ paddingTop, data, handleClick, reverseRow, id, Background }) {
  const containerStyle = {
    backgroundColor: Background,
  };

  const images = [
    '/img/Flowers/Flower1.png',
    '/img/Flowers/Flower2.png',
    '/img/Flowers/Flower3.png',
    '/img/Flowers/Flower4.png',
    '/img/Flowers/Flower5.png',
  ];

  return (
    <div style={containerStyle} id={id} className={`flex flex-col ${reverseRow} h-full ${paddingTop}`}>
      <div id='PriceList' className='bg-white h-[600px] md:w-1/2 md:mb-[4rem]   md:pt-0 pt-10 '>
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
          className="mySwiper"
          style={{ backgroundColor: Background }}
        >
          {data.map((product, index) => (
            <SwiperSlide key={index}>
              <div
                id='ProductListItems'
                className='flex justify-center items-center text-center flex-row px-5 cursor-pointer'
                onClick={() => handleClick(product.prodImg)}
              >
                <img className="md:h-[600px] w-auto" src={product.prodImg} alt={product.prodName} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={`h-full lg:h-[430px] md:w-1/2 flex flex-col justify-center items-center m-auto`}>
        <div className='flex flex-row justify-center items-center px-2'>
          <Slide>
            <img src={images[1]} alt="" className='md:h-[250px] md:ml-20 h-[100px] md:w-[20rem] cursor-pointer' onClick={() => handleClick(images[1])} />
          </Slide>
          <Slide>
            <img src={images[2]} alt="" className='md:h-[250px] ml-1 md:ml-10 h-[100px] md:w-[25rem]' onClick={() => handleClick(images[2])} />
          </Slide>
          <Fade>
            <img src={images[0]} alt="" className='md:h-[250px] h-[100px] md:w-[27rem]' onClick={() => handleClick(images[0])} />
          </Fade>
          <Slide direction='right'>
            <img src={images[4]} alt="" className='md:h-[250px] md:ml-[-2rem] h-[100px] md:w-[24rem]' onClick={() => handleClick(images[4])} />
          </Slide>
          <Slide direction='right'>
            <img src={images[3]} alt="" className='md:h-[250px] md:ml-[-4rem] h-[100px] md:w-[25rem]' onClick={() => handleClick(images[3])} />
          </Slide>
        </div>
        <Fade>
          <a href="https://www.facebook.com/dalidapasalubong" target='_blank'>
            <img src="/img/FacebookFind.svg" alt="FindUs" className='h-[50px] md:h-[70px] mt-5 md:my-2' />
          </a>
        </Fade>
       
        <TypeAnimation
  sequence={[
    'Interested?',
    1000, 
    'Visit our Facebook Page!',
    1000,
    'Message Us 💬', 
    2000
  ]}
  wrapper="span"
  speed={50}
  className="md:text-6xl text-4xl font-heading font-bold text-black typing py-10 md:ml-10"
  repeat={Infinity}
/>


      </div>

      
    </div>
  );
}
