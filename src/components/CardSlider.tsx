"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { SecuredButton } from "../../public/icons/SecuredButton";
import { HeartIcon } from "../../public/icons/HeartIcon";
import { LetterIcon } from "../../public/icons/LetterIcon";
import { SliderArrowBtn } from "../../public/icons/SliderArrowBtn";

interface CardSliderProps {
  personsData: Array<{ name: string; profession: string; totalEarning: string, totalJobs: number, totalHours: number, lastContractTogether: string, imgUrl: string }>;
}


export const CardSlider: React.FC<CardSliderProps> = ({ personsData }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative max-w-[1280px] mx-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView="auto"
        centeredSlides={false}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        centerInsufficientSlides={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        parallax={true}
        className="!pl-4"
      >
        {personsData.map((item, i) => (
          <SwiperSlide key={i} className="!w-[285px] !flex-none">
            <div className="p-[14px_20px] w-[285px] h-[403px] border-1 border-[#EAEAEA] rounded-[20px] flex justify-center shadow-md shadow-[rgba(43,91,181,0.16)]">
              <div className="flex items-center flex-col">
                <div className="w-[113px] h-[113px] rounded-full overflow-hidden border-[2px] border-[#CBEC5E]">
                  <Image src={item.imgUrl} alt="person-avatar" width={116} height={109} />
                </div>
                <div className="flex gap-[4px] mt-[7px]">
                  <span>{item.name}</span>
                  <SecuredButton />
                </div>
                <span>{item.profession}</span>
                <div className="flex">
                  <div>
                    <p>{item.totalEarning}</p>
                    <p>Total Earning</p>
                  </div>
                  <div>
                    <p>{item.totalJobs}</p>
                    <p>Total Jobs</p>
                  </div>
                  <div>
                    <p>{item.totalHours}</p>
                    <p>Total Hours</p>
                  </div>
                </div>
                <div>
                  <p className="">Last contract together:</p>
                  <p className="">{item.lastContractTogether}</p>
                </div>
                <div className="flex gap-[8px]">
                  <button className="w-[149px] h-[40px] text-[#18470D] text-[16px] border-1 border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium">
                    Rehire
                  </button>
                  <div className="w-[40px] h-[40px] border-1 border-[#CCCCCC] rounded-full cursor-pointer flex justify-center items-center"><HeartIcon /></div>
                  <div className="w-[40px] h-[40px] border-1 border-[#CCCCCC] rounded-full cursor-pointer flex justify-center items-center"><LetterIcon /></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-[20px] gap-[16px]">
        <div className="cursor-pointer" onClick={() => swiperRef.current?.slidePrev()}><SliderArrowBtn /></div>
        <div className="rotate-[180deg] cursor-pointer" onClick={() => swiperRef.current?.slideNext()}><SliderArrowBtn /></div>
      </div>
    </div>
  );
};
