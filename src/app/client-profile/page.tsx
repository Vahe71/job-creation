"use client"
import { useState } from "react";
import { satoshi } from "../../../public/fonts/fonts";
import { GreenFolderIcon } from "../../../public/icons/GreenFolderIcon";
import { PaginationArrow } from "../../../public/icons/PaginationArrow";
import { StarIcon } from "../../../public/icons/StarIcon";
import { ClientProfileHeader } from "../client-profile-header/ClientProfileHeader";
import { ClientProfilePopup } from "../client-profile-popup/ClientProfilePopup";

const clientData = {
  name: "Dimitrios Smith",
  utc: "12:10 PM UTC +1",
  geoLocation: "Athene, Greece",
  rating: "4.9",
  registrationDate: "May, 2025",
  amount: "$3K+",
  postedJobs: 12,
  hiredTalents: 155,
  imgUrl: "/client-profile-avatar.png",
  hiringStory: [
    {
      title: "Algebra Tutoring for High School Student",
      jobRating: 5,
      startDate: "Aug 5, 2024",
      endDate: "Nov 20, 2024",
      description:
        "The teacher was amazing! Helped me understand complex algebra concepts in a simple way. My grades improved significantly!",
      earning: "$2,500.00",
      totalHours: 50,
    },
    {
      title: "Algebra Tutoring for High School Student",
      jobRating: 5,
      startDate: "Aug 5, 2024",
      endDate: "Nov 20, 2024",
      description:
        "The teacher was amazing! Helped me understand complex algebra concepts in a simple way. My grades improved significantly!",
      earning: "$2,500.00",
      totalHours: 50,
    },
    {
      title: "University-Level Calculus Tutoring",
      jobRating: 5,
      startDate: "Aug 5, 2024",
      endDate: "Nov 20, 2024",
      description:
        "The teacher was amazing! Helped me understand complex algebra concepts in a simple way. My grades improved significantly!",
      earning: "$2,500.00",
      totalHours: 50,
    },
    {
      title: "AP Statistics Crash Course",
      jobRating: 5,
      startDate: "Aug 5, 2024",
      endDate: "Nov 20, 2024",
      description:
        "The teacher was amazing! Helped me understand complex algebra concepts in a simple way. My grades improved significantly!",
      earning: "$2,500.00",
      totalHours: 0,
    },
  ],
};

export default function ClientProfile() {
  const [popupOpened, setPopupOpened] = useState(false);
  return (
    <>
      <div className="2xl:pt-[72px] lg:pt-[58px] sm:pt-[35px] sm:px-[40px] px-[20px] pt-[49px] lg:px-none">
        <div className="mx-auto 2xl:max-w-[1472px] lg:max-w-[1175px] sm:max-w-[775px] sm:border-[1px] border-[#E2E8F0] rounded-[30px] 2xl:p-[38px_55px] lg:p-[68px_27px_80px] sm:p-[46px_17px_59px] sm:shadow-[0px_9.25px_15.04px_-3.47px_rgba(0,0,0,0.07)]">
          <ClientProfileHeader setPopupOpened={setPopupOpened} clientData={clientData} />
          <hr className="text-[#E6E6E6] 2xl:mt-[57px] lg:mt-[28px] sm:mt-[50px] mt-[29px]" />
          <div className="border-[#CBEC5E] border-[1px] rounded-[16px] lg:p-[30px_37px_35px] 2xl:p-[32px_50px_38px] sm:p-[50px_33px_14px] p-[32px_9px] lg:mt-[38px] mt-[24px]">
            <div>
              <div>
                <p className="text-[#8A8A8A] text-[16px]">Hirings</p>
                <div className="relative mt-[5px]">
                  <div className="bg-[#AEB3BC] h-[1px]"></div>
                  <div className="h-[5px] bg-[#CBEC5E] rounded-[15px] absolute left-0 -top-[2px] sm:w-[65px] w-[40px] lg:w-[63px] 2xl:w-[167px]"></div>
                </div>
              </div>
              <div className="2xl:mt-[33px] lg:mt-[20px] sm:mt-[15px] gap-y-[16px] flex flex-wrap justify-between mt-[14px]">
                <span
                  className={`2xl:text-[30px] lg:text-[24px] sm:text-[18px] text-[16px] font-medium `}
                >
                  Hiring History
                </span>
                <div className="flex gap-[8px] sm:gap-[25px] items-center">
                  <button className="sm:w-[206px] 2xl:w-[206px] w-[184px] h-[42px] lg:w-[197px] bg-[#EEF6DB] rounded-[30px] text-[14px] sm:text-[16px] text-[#18470D] font-medium cursor-pointer">
                    Completed Jobs (24)
                  </button>
                  <span
                    className={`text-[14px] sm:text-[20px] text-[#545454] font-medium cursor-pointer text-nowrap `}
                  >
                    In Progress (6)
                  </span>
                </div>
              </div>
              <div className="2xl:mt-[24px] lg:mt-[42px] sm:mt-[66px] mt-[32px] flex flex-col sm:gap-[16px] lg:gap-[26px] 2xl:gap-[26px] gap-[8px]">
                {clientData.hiringStory.map((job, i) => {
                  return (
                    <div
                      key={i}
                      className={`${
                        clientData.hiringStory.length - 1 === i
                          ? ""
                          : " border-b-[1px] border-[#AEB3BC] 2xl:pb-[27px] lg:pb-[12px] pb-[16px] "
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span
                          className={`text-[#18470D] text-[14px] max-w-[181px] sm:max-w-none sm:text-[20px] font-medium `}
                        >
                          {job.title}
                        </span>
                        <div className="w-[24px] h-[24px] cursor-pointer">
                          <GreenFolderIcon />
                        </div>
                      </div>
                      <div className="flex text-[14px] sm:text-[16px] sm:mt-[13px] mt-[8px] text-[#545454] gap-[2px] items-center">
                        {Array.from({ length: job.jobRating }, (_, index) => (
                          <div key={index} className="w-[16px] h-[16px]">
                            <StarIcon />
                          </div>
                        ))}
                        <div
                          className={`ml-[6px] text-[14px] sm:text-[16px] text-[#545454] `}
                        >
                          {job.jobRating}.0 | {job.startDate} - {job.endDate}
                        </div>
                      </div>
                      <p
                        className={`text-[#545454] text-[14px] sm:text-[16px] lg:mt-[12px] sm:mt-[16px] 2xl:mt-[38px] sm:max-w-[547px] mt-[4px] max-w-[295px] `}
                      >
                        "{job.description}"
                      </p>
                      <p
                        className={`text-[16px]  mt-[10px] lg:mt-[14px]`}
                      >
                        <span className="font-medium">{job.earning}</span> | {job.totalHours} hours
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex sm:gap-[16px] sm:mt-[15px] lg:gap-[24px] 2xl:mt-[23px] lg:mt-[26px] mt-[32px] gap-[16px]">
              <div className="cursor-pointer w-[25px] h-[25px] rounded-full flex justify-center items-center rotate-180 border-[1px] border-[#E2E8F0] bg-[#FAFBFF]">
                <PaginationArrow />
              </div>
              <span
                className={`text-[#1C2434]  font-medium text-[18px]`}
              >
                1-6
              </span>
              <div className="cursor-pointer w-[25px] h-[25px] rounded-full bg-[#CBEC5E] flex justify-center items-center">
                <PaginationArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {popupOpened && <ClientProfilePopup setPopupOpened={setPopupOpened} imgUrl={clientData.imgUrl} />}
    </>
  );
}
