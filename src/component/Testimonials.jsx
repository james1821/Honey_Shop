import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ContactForm from "./ContactForm";
function Testimonials() {
  const images = [
    "/img/Testimonials/Testimonial1.jpg",
    "/img/Testimonials/Testimonial2.jpg",
    "/img/Testimonials/Testimonial3.jpg",
    "/img/Testimonials/Testimonial4.jpg",
  ];

  return (
    <div className={`flex flex-col md:flex-row h-full px-10`}>
      <div className="bg-white md:w-1/2 md:p-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="w-full "
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className=" lg:h-auto w-auto"
                src={image}
                alt={`Testimonial ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        id="Nav"
        className="h-full lg:h-[430px] lg:w-1/2 flex flex-col items-center justify-center m-auto"
      >
        <p className="text-[25px] lg:text-[30px] text-center pt-10 pb-5 lg:px-10 p-auto">
          "We wanted to thank our awesome clients for supporting our small
          business. Your continuous support inspires us to keep doing what we
          love." <span className="text-pink-500">-Honey</span>
        </p>
        <h1 className="text-[50px] lg:text-[50px] text-center font-bold tracking-[-.2rem]">
          Contact Us
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default Testimonials;
