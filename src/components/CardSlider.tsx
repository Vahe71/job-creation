"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

const items = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
  { id: 4, title: "Card 4" },
  { id: 5, title: "Card 5" },
];

export const CardSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative max-w-[1280px] mx-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1440: { slidesPerView: 4, spaceBetween: 30 },
        }}
        parallax={true}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-[285px] h-[403px] border-1 border-[#EAEAEA] rounded-[20px] flex items-center justify-center shadow-md shadow-[rgba(43,91,181,0.16)]">
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between mt-4">
        <button
          className="prev bg-black text-white p-2 rounded-full"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          Left
        </button>
        <button
          className="next bg-black text-white p-2 rounded-full"
          onClick={() => swiperRef.current?.slideNext()}
        >
          Right
        </button>
      </div>
    </div>
  );
};
