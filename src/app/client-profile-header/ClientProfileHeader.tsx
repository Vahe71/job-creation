"use client"
import Image from "next/image";
import { CameraIcon } from "../../../public/icons/CameraIcon";
import { SecuredButton } from "../../../public/icons/SecuredButton";
import { GeoLocationIcon } from "../../../public/icons/GeoLocationIcon";
import { ClockIcon } from "../../../public/icons/ClockIcon";
import { satoshi } from "../../../public/fonts/fonts";
import { StarIcon } from "../../../public/icons/StarIcon";
import { useEffect, useState } from "react";

interface Data {
  name: string;
  rating: string;
  utc: string;
  geoLocation: string;
  registrationDate: string;
  amount: string;
  postedJobs: number;
  hiredTalents: number;
}
interface ProfileHeaderProps {
  clientData: Data;
}

export const ClientProfileHeader: React.FC<ProfileHeaderProps> = ({
  clientData,
}) => {
  const [shortenedName, setShortenedName] = useState('');

  useEffect(() => {
    if (window.innerWidth < 1440) {
      const nameParts = clientData.name.split(" ");
      if (nameParts.length > 1) {
        setShortenedName(`${nameParts[0]} ${nameParts[1][0]}.`);
      } else {
        setShortenedName(clientData.name);
      }
    } else {
      setShortenedName(clientData.name);
    }
  }, [clientData.name]);

  return (
    <div className="flex justify-between">
      <div className="flex lg:gap-[30px] sm:gap-[15px]">
        <div className="2xl:w-[263px] 2xl:h-[263px] sm:w-[153px] sm:min-w-[153px] sm:h-[153px] w-[137px] sm:h-[137px] relative border-[#CBEC5E] sm:border-[3px] lg:border-[5px] rounded-full">
          <Image
            className="border-[#CBEC5E] lg:border-[5px] rounded-full"
            src={"/client-profile-avatar.png"}
            alt="client-avatar"
            width={263}
            height={263}
          />
          <div className="w-[36px] h-[36px] rounded-full border-[#CBEC5E] border-[1px] bg-white flex justify-center items-center absolute lg:bottom-[3px] lg:left-[3px] 2xl:bottom-[21px] 2xl:left-[32px] sm:-bottom-[4px] sm:left-[6px] cursor-pointer">
            <div className="sm:w-[18px] sm:h-[18px]">
              <CameraIcon />
            </div>
          </div>
          <div className="2xl:w-[34px] 2xl:h-[34px] sm:w-[19px] sm:h-[19px] w-[17px] h-[17px] rounded-full border-[#CBEC5E] border-[1px] bg-white flex justify-center items-center absolute lg:right-[20px] lg:bottom-[1px] 2xl:bottom-[8px] 2xl:right-[37px] sm:right-[20px] sm:bottom-[1px]">
            <div className="2xl:w-[24px] 2xl:h-[24px] sm:w-[13px] sm:h-[13px] w-[12px] h-[12px] rounded-full bg-[#0EA200]"></div>
          </div>
        </div>
        <div className="2xl:pt-[40px] pt-0">
          <div className="flex 2xl:gap-[13px] lg:gap-[6px] sm:gap-[8px] items-center">
            <span className="lg:text-[44px] sm:text-[24px] text-[20px]">{shortenedName}</span>
            <div className="lg:w-[40px] lg:h-[40px] w-[24px] h-[24px]">
              <SecuredButton />
            </div>
          </div>
          <div
            className={`flex flex-col lg:flex-row lg:text-[24px] text-[14px] text-[#64748B] gap-y-[4px] gap-x-[30px] ${satoshi.className} font-medium`}
          >
            <div className="flex gap-[8px] lg:gap-[2px] items-center">
              <div>
                <GeoLocationIcon />
              </div>
              <span>{clientData.geoLocation}</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <div>
                <ClockIcon />
              </div>
              <span>{clientData.utc}</span>
            </div>
          </div>
          <div className="mt-[16px]">
            <div className="lg:w-[98px] sm:w-[84px] h-[36px] flex gap-[7px] rounded-[64px] border-[1px] border-[#AEB3BC] justify-center items-center">
              <div className="w-[23px] h-[23px]"><StarIcon /></div>
              <span className={`${satoshi.className} font-bold text-[18px]`}>
                {clientData.rating}
              </span>
            </div>
          </div>
          <div className="lg:mt-[8px] 2xl:mt-[25px] text-[#64748B] text-[18px]">
            <span>In Jobwhee since {clientData.registrationDate}</span>
          </div>
        </div>
      </div>
      <div className="2xl:pt-[45px] lg:pt-[8px]">
        <div className="flex justify-end">
          <button className="lg:w-[200px] lg:h-[48px] sm:w-[146px] sm:h-[38px] rounded-[49px] bg-[#CBEC5E] text-[#18470D] text-[16px] cursor-pointer font-medium">
            Profile Settings
          </button>
        </div>
        <div className="flex 2xl:gap-[38px] lg:gap-[16px] sm:gap-[13px] sm:mt-[23px] lg:mt-[60px]">
          <div className="lg:w-[106px] lg:h-[106px] 2xl:w-[100px] 2xl:h-[100px] sm:w-[90px] sm:h-[90px] rounded-full border-[1px] border-[#AEB3BC] flex justify-center items-center">
            <div className="text-center">
              <p
                className={`text-[#18470D] text-[15px] lg:text-[18px] font-bold ${satoshi.className}`}
              >
                {clientData.amount}
              </p>
              <p
                className={`text-black text-[11px] lg:text-[14px] font-medium ${satoshi.className}`}
              >
                Total Spent
              </p>
            </div>
          </div>
          <div className="lg:w-[106px] lg:h-[106px] 2xl:w-[100px] 2xl:h-[100px] sm:w-[90px] sm:h-[90px] rounded-full border-[1px] border-[#AEB3BC] flex justify-center items-center">
            <div className="text-center">
              <p
                className={`text-[#18470D] text-[15px] lg:text-[18px] font-bold ${satoshi.className}`}
              >
                {clientData.postedJobs}
              </p>
              <p
                className={`text-black text-[11px] lg:text-[14px] font-medium ${satoshi.className}`}
              >
                Posted Jobs
              </p>
            </div>
          </div>
          <div className="lg:w-[106px] lg:h-[106px] 2xl:w-[100px] 2xl:h-[100px] sm:w-[90px] sm:h-[90px] rounded-full border-[1px] border-[#AEB3BC] flex justify-center items-center">
            <div className="text-center">
              <p
                className={`text-[#18470D] text-[15px] lg:text-[18px] font-bold ${satoshi.className}`}
              >
                {clientData.hiredTalents}
              </p>
              <p
                className={`text-black text-[11px] lg:text-[14px] font-medium ${satoshi.className}`}
              >
                Hired Talents
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
