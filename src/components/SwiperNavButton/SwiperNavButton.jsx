import React from "react";
import { useSwiper } from "swiper/react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export const SwiperNavButton = () => {
  const swiper = useSwiper();

  return (
    <div className="z-30">
      <button
        className="text-[#F7A582] border rounded-full p-2 border-[#F7A582] hover:bg-[#F7A582] hover:text-white absolute left-3.5 z-10 top-1/2"
        onClick={() => swiper.slidePrev()}
      >
        <BsChevronLeft size={32}></BsChevronLeft>
      </button>
      <button
        className="text-[#F7A582] border rounded-full p-2 border-[#F7A582] hover:bg-[#F7A582] hover:text-white absolute right-3.5 z-10 top-1/2"
        onClick={() => swiper.slideNext()}
      >
        <BsChevronRight size={32}></BsChevronRight>
      </button>
    </div>
  );
};
