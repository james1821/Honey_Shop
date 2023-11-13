import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { TypeAnimation } from "react-type-animation";
import { Pagination } from "swiper/modules";

export default function Products({ data, handleClick, Background }) {
  const containerStyle = {
    backgroundColor: Background,
  };

  const images = [
    "/img/Flowers/Flower1.png",
    "/img/Flowers/Flower2.png",
    "/img/Flowers/Flower3.png",
    "/img/Flowers/Flower4.png",
    "/img/Flowers/Flower5.png",
  ];

  return (
    <div
      style={containerStyle}
      id="Flowers"
      className={`flex flex-col-reverse lg:flex-row h-full  lg:pt-[100px]`}
    >
      <div
        id="PriceList"
        className="bg-white h-full lg:w-1/2 lg:mb-[4rem]   lg:pt-0 pb-10 pt-2 "
      >
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={true}
          modules={[Pagination]}
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
                id="ProductListItems"
                className="flex justify-center items-center text-center flex-row px-5 cursor-pointer"
                onClick={() => handleClick(product.prodImg)}
              >
                <img
                  className="lg:h-[600px] w-auto"
                  src={product.prodImg}
                  alt={product.prodName}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className={`h-full lg:h-[430px] lg:w-1/2 flex flex-col justify-center items-center `}
      >
        <h1 className="text-[50px] md:text-[100px] text-center font-bold tracking-[-.2rem]">
          Our Products
        </h1>
        <div className="flex flex-row justify-center items-center px-2">
          <Slide>
            <img height={217} width={277} src={images[1]} />
          </Slide>
          <Slide>
            <img height={217} width={277} src={images[2]} />
          </Slide>
          <Fade>
            <img height={217} width={277} src={images[0]} />
          </Fade>
          <Slide direction="right">
            <img height={217} width={277} src={images[4]} />
          </Slide>
          <Slide direction="right">
            <img height={217} width={277} src={images[3]} />
          </Slide>
        </div>

        <TypeAnimation
          sequence={[
            "Interested?",
            1000,
            "Visit our Facebook Page!",
            1000,
            "Message Us 💬",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="md:text-6xl text-4xl font-heading font-bold text-black typing  lg:ml-10"
          repeat={Infinity}
        />
      </div>
    </div>
  );
}
