"use client";
import { useEffect, useState } from "react";
import DropdownInput from "@/components/DropDownInput";
import { TermCard } from "@/components/TermCard";
import { GreenArrowBtn } from "../../../public/icons/GreenArrowBtn";
import Link from "next/link";

const headingItems = [
  "Define your project details, budget, and expectations.",
  "Attract top talent by posting a fresh listing.",
  "Set up requirements to match the right talents.",
];

const dropdownList = [
  "Experienced Math Teacher | Algebra, Calculus, SAT/ACT Prep.",
  "Need to tweak and reuse a past job post.",
  "Planning to repost a previous job ad.",
  "Want to update and use an old job posting.",
  "Reusing a prior job description with some edits.",
  "Modifying an existing job ad for reuse.",
  "Refreshing a previous job post with updates.",
  "Adapting an old job listing for a new role.",
  "Reposting a job ad with slight modifications.",
  "Using a past job description as a template.",
  "Making minor changes to an old job post.",
  "Updating a previous job listing for relevancy.",
  "Recycling a job ad with necessary adjustments.",
  "Tweaking an older job posting for current needs.",
  "Revising a past job description to fit today’s requirements.",
];

const shortCardData = [
  { title: "One-time job" },
  { title: "Less than 1 month" },
];
const longCardData = [{ title: "1 to 3 months" }, { title: "3 to 6 months" }];

interface GetStartedProps {
  handleChangeStep: (step: number) => void;
  setCurrentPage: (value: string) => void;
}

export const GetStarted: React.FC<GetStartedProps> = ({ handleChangeStep, setCurrentPage }) => {
  const [firstLiOpened, setFirstLiOpened] = useState(true);
  const [secondLiOpened, setSecondLiOpened] = useState(false);

  return (
    <main className="justify-center md:justify-between sm:gap-[20px_3px] px-[20px] flex-wrap lg:flex-nowrap pt-[30px] sm:px-[40px] xl:px-0 lg:max-w-[1200px] 2xl:max-w-[1430px] mx-auto lg:pt-[111px] 2xl:pt-[130px] sm:pt-[71px] flex lg:px-[110px 2xl:px-none]">
      <div className="sm:min-w-[328px] sm:max-w-[328px] xl:min-w-[514px] ">
        <h1 className="max-w-[220px] sm:max-w-none text-[20px] sm:text-[30px] lg:text-[40px] text-[#000] font-medium">
          How can we help you get started?
        </h1>
        <p className="max-w-[220px] mt-[24px] text-[16px] sm:max-w-[235px] lg:max-w-none lg:mt-[35px] sm:mt-[40px] sm:text-[18px] lg:text-[20px] text-[#000] font-medium">
          Get Started with Your Job Post Effortlessly
        </p>
        <ul className="max-w-[320px] mt-[14px] sm:mt-[41px] sm:max-w-[268px] lg:max-w-none lg:mt-[20px] 2xl:leading-[30px] lg:leading-[24px]">
          {headingItems.map((item, i) => {
            return (
              <li
                className="text-[14px] text-[#545454] sm:text-[14px] lg:text-[16px] pl-[10px] flex items-center gap-[10px]"
                key={i}
              >
                <div className="w-[4px] h-[4px] bg-[#545454] rounded-full"></div>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="min-h-[335px] sm:min-h-[466px] lg:min-h-[540px] 2xl:min-h-[544px] w-full sm:w-auto max-w-[335px] sm:max-w-none my-[42px] sm:my-[82px] sm:mt-0 flex flex-col gap-[20px_0]">
        <ul className="flex flex-col w-full sm:w-[357px] lg:w-[590px] pt-[10px] gap-[19px]">
          <li
            className={
              "w-full  border-[#9B9B9B] border-b-1  cursor-pointer " +
              (firstLiOpened ? " pb-[17px] " : " pb-[10px] ")
            }
          >
            <div
              className="flex justify-between items-center sm:items-end"
              onClick={() => setFirstLiOpened(!firstLiOpened)}
            >
              <span className="text-[14px] sm:text-[16px] lg:text-[24px] 2xl:text-[26px] text-[#000]">
                I want to create a new job post
              </span>
              <div className={firstLiOpened ? "rotate-[90deg]" : ""}>
                <div className="w-[28px] h-[28px] lg:w-[48px] lg:h-[48px]">
                  <GreenArrowBtn />
                </div>
              </div>
            </div>
            <div
              className={
                "mt-[45px] flex gap-[23px] flex-wrap sm:justify-end sm:pr-[37px] lg:pr-[0]" +
                (firstLiOpened ? " block " : " hidden ")
              }
            >
              <TermCard
                iconSrc="/timerIcon.png"
                cardData={shortCardData}
                title="Short Term Project"
              />
              <TermCard
                iconSrc="/calendarIcon.png"
                cardData={longCardData}
                title="Long Term Project"
              />
            </div>
          </li>
          <li className="w-full  border-[#9B9B9B] border-b-1 cursor-pointer pb-[10px]">
            <div
              className="flex justify-between items-center"
              onClick={() => setSecondLiOpened(!secondLiOpened)}
            >
              <span className="text-[14px] sm:text-[16px] lg:text-[24px] 2xl:text-[26px] text-[#000]">
                I want to reuse a previous job post
              </span>
              <div className={`${secondLiOpened ? "rotate-[90deg]" : ""}`}>
                <div className="lg:w-[48px]">
                  <div className="w-[28px] h-[28px] lg:w-[48px] lg:h-[48px]">
                    <GreenArrowBtn />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                "sm:pl-[9px] lg:pl-[16px] lg:pr-[38px] sm:pr-[21px] mb-[14px]" +
                (secondLiOpened ? " block " : " hidden ")
              }
            >
              <DropdownInput list={dropdownList} />
            </div>
          </li>
        </ul>
        <div className="flex gap-[10px] lg:pl-[32px] justify-end mt-auto">
          <Link href={"/"}>
            <button onClick={() => setCurrentPage('homepage')} className="w-[150px] h-[40px] lg:w-[190px] lg:h-[40px] 2xl:w-[200px] 2xl:h-[48px] rounded-[49px] border-1 border-[#CCCCCC] text-[16px] text-[#18470D] font-medium cursor-pointer">
              Cancel
            </button>
          </Link>
          <button
            onClick={() => handleChangeStep(1)}
            className="w-[139px] lg:w-[156px] h-[40px] 2xl:h-[48px] rounded-[49px] text-[16px] text-[#18470D] font-medium bg-[#CBEC5E] cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
};
