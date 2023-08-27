import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const PriceList = ({ data }) => {
  return (
    <div id='Peanuts' className='mt-10 '>
      <Swiper
      
       slidesPerView={1}
       spaceBetween={10}
       pagination={{
          className:'bg-black',
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
       modules={[Pagination]}
       className="mySwiper"
      
      >
        {data.map((product, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col justify-center items-center md:flex-row'>
              <img className="h-[200px] my-5" src={product.prodImg} alt={product.prodName} />
              <div className='flex flex-col justify-center items-center text-2xl p-10 bg-white'>
                <h2>{product.prodName}</h2>
                {product.prodPrice && <p>Price: {product.prodPrice}</p>}
                {product.prodGrams && <p>Grams: {product.prodGrams}</p>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PriceList;
