"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { GreenFolderIcon } from "../../public/icons/GreenFolderIcon";
import { ThreeDotIcon } from "../../public/icons/ThreeDotIcon";
import { OpenedLetter } from "../../public/icons/OpenedLetter";
import { ProposalsIcon } from "../../public/icons/ProposalsIcon";
import { MessagesIcon } from "../../public/icons/MessagesIcon";
import { SliderArrowBtn } from "../../public/icons/SliderArrowBtn";

interface CardSliderProps {
  jobsData: {
    type: string;
    title: string;
    createdTime: string;
    invited: number;
    proposals: number;
    messaged: number;
  }[];
  setCurrentPage: (value: string) => void;
}

export const JobFieldCards: React.FC<CardSliderProps> = ({ jobsData, setCurrentPage }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [cardsType, setCardsType] = useState("");

  const [imageSrc, setImageSrc] = useState("/cardTopGreen.png");

  useLayoutEffect(() => {
    if (window.innerWidth > 1024) {
      setImageSrc("/cardTopGreen.png");
    } else if (window.innerWidth > 640) {
      setImageSrc("/cardTopGreenTablet.png");
    } else if (window.innerWidth < 640) {
      setImageSrc("/cardTopGreenSmall.png");
    }
  }, []);

  return (
    <div>
      <div>
        <div className="border-1 border-[#CBEC5E] rounded-full w-[335px] sm:w-[420px] h-[50px] sm:h-[48px] lg:h-[56px] relative">
          <div
            className={`duration-[0.3s] h-[44px] sm:h-[42px] lg:h-[50px]  bg-[#CBEC5E] rounded-full absolute left-[2px] top-[2px] ${
              cardsType === "archive"
                ? " left-[2px] w-[105px] sm:w-[154px] "
                : cardsType === "new"
                ? "left-[113px] sm:left-[140px] w-[124px] sm:w-[154px] "
                : cardsType === "draft"
                ? "left-[248px] sm:left-[292px] lg:left-[271px] w-[83px] sm:w-[124px] lg:w-[145px] "
                : ""
            }`}
          ></div>
          <div className="select-none w-full flex text-[#18470D] text-[18px] lg:text-[20px] font-medium z-10 justify-between items-center h-full px-[20px] sm:px-[45px] absolute left-0 top-0">
            <div
              className="cursor-pointer"
              onClick={() => setCardsType("archive")}
            >
              Archive
            </div>
            <div className="cursor-pointer" onClick={() => setCardsType("new")}>
              New
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setCardsType("draft")}
            >
              Draft
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-[60px] sm:gap-[40px] lg:gap-[30px] mt-[33px] lg:mt-[45px] max-w-full">
        <div className=" ">
          <div className="flex justify-end">
            <Image
              src={imageSrc}
              alt="postedCardTop"
              width={277}
              height={40}
              className="w-[130px] h-[8px] sm:h-[18px] sm:w-[313px] lg:h-[38px] 2xl:w-[273px] z-10 translate-y-[1px] sm:translate-y-[2px]"
            />
          </div>
            <div onClick={() => setCurrentPage('create-job')} className=" cursor-pointer 2xl:pb-[20px] sm:min-w-[433px] h-[51px] sm:h-[106px] lg:h-[327px] border-1 border-[#CBEC5E] rounded-[16px] sm:rounded-[30px] flex justify-center items-center text-[#18470D] text-[14px] sm:text-[22px] font-medium !rounded-tr-none">
              + Post a Job
            </div>
        </div>
        <div className="w-full max-w-full lg:overflow-x-hidden overflow-x-visible">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView="auto"
            centeredSlides={false}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            breakpoints={{
              640: { spaceBetween: 30 },
            }}
            centerInsufficientSlides={false}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            parallax={true}
            className="!overflow-visible  max-w-full sm:min-h-[375px]"
          >
            {jobsData
              ?.filter((job) => !cardsType || job.type === cardsType)
              .map((job, i) => (
                <SwiperSlide
                  key={i}
                  className="!w-[252px] sm:!w-[380px] lg:!w-[433px] !flex-none "
                >
                  <div className="  relative h-full max-w-">
                    <div className="flex justify-end relative">
                      <Image
                        src={"/postedCardTops.png"}
                        alt="postedCardTop"
                        width={277}
                        height={40}
                        className="w-[160px] h-[36px] sm:w-[240px] sm:h-[40px] lg:w-[273px] z-10 translate-y-[2px]"
                      />
                      <div
                        className={`text-[12px] sm:text-[16px] absolute top-[13px] sm:top-[16px] right-[23px] z-10 p-[4px_16px] rounded-[30px] ${
                          job.type === "draft"
                            ? " bg-[#F6EED9] text-[#CAAC00] "
                            : job.type === "new"
                            ? " bg-[#EEF6DB] text-[#5A7D06] "
                            : job.type === "archive"
                            ? " bg-[#F7E7E3] text-[#E73E1E] "
                            : ""
                        }`}
                      >
                        {job.type === "draft"
                          ? "Draft"
                          : job.type === "new"
                          ? "Open Job Post"
                          : job.type === "archive"
                          ? "Archive"
                          : ""}
                      </div>
                    </div>
                    <div className=" h-full w-full pb-[19px] sm:pb-[30px] px-[12px] sm:px-[28px] lg:px-[22px] pt-[28px] sm:pt-[55px] 2xl:pt-[50px] bg-white border border-b-[#CBEC5E] border-b-[6px] border-[#EAEAEA] rounded-[30px] relative rounded-tr-none ">
                      <div className="flex">
                        <div className="mr-[10px] sm:mr-[15px] min-w-[20px] sm:min-w-none w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] lg:w-[48px] lg:h-[48px] flex justify-center items-center border-1 border-[#CCCCCC] rounded-full">
                          <div className="lg:w-[24px] lg:h-[24px] sm:w-[15px] sm:h-[15px] w-[10px] h-[10px]">
                            <GreenFolderIcon />
                          </div>
                        </div>
                        <div>
                          <p className="text-[14px] lg:text-[15px] font-semibold max-w-[135px] sm:max-w-[157px] lg:max-w-[230px]">
                            {job.title}
                          </p>
                          <p className="mt-[5px] text-[#818181] text-[14px] lg:text-[13px]">
                            {job.createdTime}
                          </p>
                        </div>
                        <div className="ml-auto min-w-[20px] w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] border-1 border-[#CBEC5E] rounded-full flex justify-center items-center cursor-pointer">
                          <div className="w-[12px] h-[12px] min-w-[12px] sm:w-[24px] sm:h-[24px]">
                            <ThreeDotIcon />
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:justify-center gap-[12px] sm:gap-[22px] lg:justify-between mt-[25px]">
                        <div className="text-center">
                          <p className="text-[14px] sm:text-[18px] lg:text-[20px] font-medium">
                            Invited
                          </p>
                          <div className="flex gap-[5px] sm:mt-[5px] items-center">
                            <div className="w-[13px] h-[13px] sm:w-[20px] sm:h-[20px]">
                              <OpenedLetter />
                            </div>
                            <span className="text-[#545454] text-[10px] sm:text-[16px]">
                              {job.invited}/30
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-[14px] sm:text-[18px] lg:text-[20px] font-medium">
                            Proposals
                          </p>
                          <div className="flex gap-[3px] justify-center items-center">
                            <div className="w-[16px] h-[16px] sm:w-[25px] sm:h-[25px]">
                              <ProposalsIcon />
                            </div>
                            <span className="text-[#545454] text-[10px] sm:text-[16px]">
                              {job.proposals}
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-[14px] sm:text-[18px] lg:text-[20px] font-medium">
                            Messaged
                          </p>
                          <div className="flex justify-center gap-[3px] sm:mt-[7px] items-center">
                            <div className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]">
                              <MessagesIcon />
                            </div>
                            <span className="text-[#545454] text-[10px] sm:text-[16px]">
                              {job.messaged}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className="cursor-pointer text-[#18470D] text-[10px] sm:text-[16px] font-medium border-1 border-[#CCCCCC] w-full h-[26px] sm:h-[40px] rounded-full mt-[22px] sm:mt-[55px]">
                          Find Talent
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="justify-center lg:justify-start hidden sm:flex sm:mt-[40px] lg:mt-[70px] gap-[16px] lg:pl-[87px] 2xl:pl-[128px]">
            <div
              className="cursor-pointer"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <SliderArrowBtn />
            </div>
            <div
              className="rotate-[180deg] cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <SliderArrowBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
