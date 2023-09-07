import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const PriceList = ({ data }) => {
  const [clickedItems, setClickedItems] = useState([]);

  const handleClick = (index) => {
    
    if (clickedItems.includes(index)) {
      setClickedItems(clickedItems.filter((item) => item !== index));
    } else {
      setClickedItems([...clickedItems, index]);
    }
  };

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
              <img className="h-[200px] my-5" src={product.prodImg} alt={product.prodName} />
              <div className='flex flex-col justify-center items-center text-2xl md:text-1xl bg-white rounded'>
              
                {clickedItems.includes(index) ? (
                  
                  <>
                    <p className='text-xl px-10'>Interested? Message us on our Facebook page!</p>
                  <a href="https://www.facebook.com/dalidapasalubong" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></a>
                  </>
                ) : (
                
                  <>
                    <h2 className='text-green-600'>{product.prodName}</h2>
                    {product.prodPrice && <p>{product.prodPrice}</p>}
                    {product.prodGrams && <p>{product.prodGrams}</p>}
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PriceList;
