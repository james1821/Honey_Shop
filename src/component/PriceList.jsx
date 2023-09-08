import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const PriceList = ({ data }) => {
  

  return (
    <div id='PriceList' className='bg-ivory h-full'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          className: 'bg-black',
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
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((product, index) => (
          <SwiperSlide key={index}>
            <div
              id='ProductListItems'
              className='flex justify-center items-center text-center flex-row py-2 bg-white rounded-[2rem] mx-7 my-2 '
              onClick={() => handleClick(index)}
            >
              <img className="h-[150px] md:h-[200px] my-5" src={product.prodImg} alt={product.prodName} />
              <div className='flex flex-col justify-center items-center md:text-2xl text-lg bg-white rounded w-[55%]'>
 
                    <h2 className='text-green-600 '>{product.prodName}</h2>
                    {product.prodPrice && <p>{product.prodPrice}</p>}
                    {product.prodGrams && <p>{product.prodGrams}</p>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PriceList;
