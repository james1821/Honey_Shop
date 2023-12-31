import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const PriceList = ({ data }) => {
  return (
    <div id="PriceList" className="bg-white h-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          className: "bg-black",
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
            spaceBetween: 70,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((product, index) => (
          <SwiperSlide key={index}>
            <div
              id="ProductListItems"
              className="flex justify-center items-center text-center flex-row "
              onClick={() => handleClick(index)}
            >
              <img className="" src={product.prodImg} alt={product.prodName} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PriceList;
