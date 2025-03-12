"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const EmptyJobField = () => {
  const [imageSrc, setImageSrc] = useState("/cardTops.png");

  useEffect(() => {
    if (window.innerWidth > 640) {
      setImageSrc("/cardTops.png");
    } else {
      setImageSrc("/mobileCardTops.png");
    }
  }, []);

  return (
    <div className="  relative">
      <div className=" w-full px-[22px] 2xl:pt-[35px] shadow-[0px_5px_24.5px_0px_#617CAE26] sm:h-[310px] lg:h-[340px] 2xl:h-[400px] h-[305px] bg-white border border-b-[#CBEC5E] border-b-[10px] border-[#EAEAEA] rounded-[30px] relative rounded-tr-none ">
        <Image
          src={imageSrc}
          width={663}
          height={47}
          alt=""
          className=" absolute -top-[8px] sm:top-[1px] lg:top-0 2xl:-top-[6px] right-0 -translate-y-[48px] translate-x-[1.5px] lg:max-w-[570px] 2xl:h-[55px] 2xl:max-w-[663px] sm:max-w-[370px] sm:h-[48px] max-w-[172px] h-[56px]"
          unoptimized
        />
        <div className="pb-[35px] sm:mb-[20px] lg:mb-0 h-[100%] flex flex-col justify-center items-center">
          <Image
            src={"/briefcase.png"}
            alt="briefcase"
            width={204}
            height={153}
            className="2xl:w-[204px] 2xl:h-[153px] lg:w-[174px] lg:h-[130px] w-[118px] h-[88px]"
          />
          <span className="mt-[20px] sm:mt-[10px] lg:mt-0 sm:text-[20px] lg:text-[30px] text-black font-medium">
            No job posted yet
          </span>
          <button className="mt-[28px] w-[200px] h-[48px] text-[#18470D] text-[16px] border-1 border-[#545454] rounded-[50px] cursor-pointer font-medium">
            + Post a Job
          </button>
        </div>
      </div>
    </div>
  );
};
