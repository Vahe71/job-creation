import Image from "next/image";
import { CameraIcon } from "../../../public/icons/CameraIcon";
import { SecuredButton } from "../../../public/icons/SecuredButton";
import { GeoLocationIcon } from "../../../public/icons/GeoLocationIcon";
import { ClockIcon } from "../../../public/icons/ClockIcon";
import { satoshi } from "../../../public/fonts/fonts";
import { StarIcon } from "../../../public/icons/StarIcon";

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
  return (
    <div className="flex justify-between">
      <div className="flex gap-[30px]">
        <div className="2xl:w-[263px] 2xl:h-[263px] relative">
          <Image
            className="border-[#CBEC5E] border-[5px] rounded-full"
            src={"/client-profile-avatar.png"}
            alt="client-avatar"
            width={263}
            height={263}
          />
          <div className="w-[36px] h-[36px] rounded-full border-[#CBEC5E] border-[1px] bg-white flex justify-center items-center absolute bottom-[21px] left-[32px] cursor-pointer">
            <CameraIcon />
          </div>
          <div className="2xl:w-[34px] 2xl:h-[34px] rounded-full border-[#CBEC5E] border-[1px] bg-white flex justify-center items-center absolute bottom-[8px] right-[37px]">
            <div className="2xl:w-[24px] 2xl:h-[24px] rounded-full bg-[#0EA200]"></div>
          </div>
        </div>
        <div className="pt-[40px]">
          <div className="flex 2xl:gap-[13px]">
            <span className="lg:text-[44px]">{clientData.name}</span>
            <div className="w-[40px] h-[40px] mt-[10px]">
              <SecuredButton />
            </div>
          </div>
          <div
            className={`flex lg:text-[24px] text-[14px] text-[#64748B] gap-[30px] ${satoshi.className} font-medium`}
          >
            <div className="flex gap-[2px] items-center">
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
            <div className="w-[98px] h-[36px] flex gap-[7px] rounded-[64px] border-[1px] border-[#AEB3BC] justify-center items-center">
              <div className="w-[23px] h-[23px]"><StarIcon /></div>
              <span className={`${satoshi.className} font-bold text-[18px]`}>
                {clientData.rating}
              </span>
            </div>
          </div>
          <div className="mt-[25px] text-[#64748B] text-[18px]">
            <span>In Jobwhee since {clientData.registrationDate}</span>
          </div>
        </div>
      </div>
      <div className="pt-[45px]">
        <div className="flex justify-end">
          <button className="w-[200px] h-[48px] rounded-[49px] bg-[#CBEC5E] text-[#18470D] text-[16px] cursor-pointer">
            Profile Settings
          </button>
        </div>
        <div className="flex gap-[38px] mt-[60px]">
          <div className="w-[100px] h-[100px] rounded-full border-[1px] border-[#AEB3BC] flex justify-center items-center">
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
          <div className="w-[100px] h-[100px] rounded-full border-[1px] border-[#AEB3BC] flex justify-center items-center">
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
          <div className="w-[100px] h-[100px] rounded-full border-[1px] border-[#AEB3BC] flex justify-center items-center">
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
