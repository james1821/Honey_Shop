import React from 'react';
import { Fade } from "../../node_modules/react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Products({ Logo, Product, padding, data, handleClick, reverseRow, id}) {

  const marginTopValue = padding ? `${padding}px` : '10';
 
  return (
    <div id={id} className={`flex flex-col md:flex-${reverseRow ? 'row-reverse' : 'row'} h-[500px] md:mt-[100px] mt-10`}>
      <div  style={{ marginTop: marginTopValue }} className='h-full lg:h-[430px] md:w-1/2 flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center px-5'>
          <Fade>
            <img src={Logo} alt="" className='md:h-[200px] w-auto basis-1/2 h-[100px]' />
          </Fade>
          <Fade>
            <img src={Product} alt="" className='h-auto md:w-[600px]' />
          </Fade>
        </div>
        {/* <Fade>
          <a href="https://www.facebook.com/dalidapasalubong" target='_blank'>
            <img src="/img/FacebookFind.svg" alt="FindUs" className='h-[50px] md:h-[70px] my-5 md:my-2' />
          </a>
        </Fade> */}
      </div>
     
      <div id='PriceList' className='bg-white h-full md:w-1/2'>
      <Swiper
  autoplay={{ delay: 3000, disableOnInteraction: false }}
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
