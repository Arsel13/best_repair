import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CustomerCard from "./CustomerCard";

export default function CustomerSays() {
  return (
    <div
      className="relative bg-headerBg bg-no-repeat bg-cover w-full h-full after:absolute after:top-0 after:left-0 after:bg-black after:bg-opacity-70 after:w-full 
    after:h-full py-10 lg:py-20"
    >
      <div className="w-11/12 lg:w-[70%] mx-auto relative z-50">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-2xl text-center lg:text-3xl text-white font-medium uppercase">
            What our customer says
          </h2>
          <div className="bg-yellow-400 w-28 h-1"></div>
        </div>
        <Swiper
          className="mySwiper"
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <CustomerCard />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
