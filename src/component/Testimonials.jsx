import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

function Testimonials() {
  const images = [
    '/img/Testimonials/Testimonial1.jpg',
    '/img/Testimonials/Testimonial2.jpg',
    '/img/Testimonials/Testimonial3.jpg',
    '/img/Testimonials/Testimonial4.jpg',
  ];

  return (
    <div className={`flex flex-col xl:flex-row h-full px-10`}>
        <div className='bg-white lg:w-1/2 '>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={false}
        navigation
        pagination={true} 
        modules={[Pagination]}
        className='w-full '
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img className=' lg:h-[600px] w-auto' src={image} alt={`Testimonial ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
        </div>

            <div className='h-full lg:h-[430px] lg:w-1/2  '>
                <p className='text-[25px] lg:text-[50px] text-center'>"We want to say thanks to our awesome clients for supporting our small business.
                     Your continues support inspires us to keep doing what we love."</p>
            </div>
    </div>
  );
}

export default Testimonials;
