"use client";
import { CardSlider } from "@/components/CardSlider";
import { EmptyJobField } from "@/components/EmptyJobField";
import { JobFieldCards } from "@/components/JobFieldCards";
import Link from "next/link";
import { useState } from "react";

const personsData = [
  {
    name: "Ioanna S.",
    profession: "Beauty and Wellness",
    totalEarning: "$3K+",
    totalJobs: 12,
    totalHours: 155,
    lastContractTogether: "Bridal Hairstyling for Wedding Ceremony",
    imgUrl: "/personOne.jpg",
  },
  {
    name: "Ioanna S.",
    profession: "Beauty and Wellness",
    totalEarning: "$3K+",
    totalJobs: 12,
    totalHours: 155,
    lastContractTogether: "Bridal Hairstyling for Wedding Ceremony",
    imgUrl: "/personOne.jpg",
  },
  {
    name: "Ioanna S.",
    profession: "Beauty and Wellness",
    totalEarning: "$3K+",
    totalJobs: 12,
    totalHours: 155,
    lastContractTogether: "Bridal Hairstyling for Wedding Ceremony",
    imgUrl: "/personOne.jpg",
  },
  {
    name: "Ioanna S.",
    profession: "Beauty and Wellness",
    totalEarning: "$3K+",
    totalJobs: 12,
    totalHours: 155,
    lastContractTogether: "Bridal Hairstyling for Wedding Ceremony",
    imgUrl: "/personOne.jpg",
  },
  {
    name: "Ioanna S.",
    profession: "Beauty and Wellness",
    totalEarning: "$3K+",
    totalJobs: 12,
    totalHours: 155,
    lastContractTogether: "Bridal Hairstyling for Wedding Ceremony",
    imgUrl: "/personOne.jpg",
  },
];
interface HomePageProps {
  jobsData: {
    id: number;
    type: string;
    title: string;
    createdTime: string;
    invited: number;
    proposals: number;
    messaged: number;
    desc: string;
    category: string;
    speciality: string;
    budget: string;
    scope: string;
    skills: string[];
  }[];
  setCurrentPage: (value: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  jobsData,
  setCurrentPage,
}) => {
  return (
    <main className="pt-[36px] sm:pt-[57px] lg:pt-[106px] 2xl:pt-[117px] px-[20px] sm:px-[40px] overflow-x-hidden">
      <div className="sm:max-w-[780px] lg:max-w-[1200px] 2xl:max-w-[1380px] mx-auto">
        <div>
          <div
            className={`${
              jobsData.length // has data
                ? " mb-[27px] "
                : " mb-[110px] sm:mb-[130px] lg:mb-[190px] "
            }  flex justify-between items-center gap-[30px] flex-wrap`}
          >
            <span className="text-[20px] sm:text-[30px] xl:text-[40px] font-medium text-[#18470D]">
              Welcome back, User
            </span>
            <button
              onClick={() => setCurrentPage("create-job")}
              className="cursor-pointer w-[200px] h-[40px] text-nowrap sm:w-[200px] sm:h-[48px] p-[8px_20px] lg:p-[12px_35px] rounded-full bg-[#CBEC5E] text-[#18470D] text-[16px] font-medium"
              type="button"
            >
              + Post a job
            </button>
          </div>
          {jobsData.length ? ( // has data
            <JobFieldCards
              setCurrentPage={setCurrentPage}
              jobsData={jobsData}
            />
          ) : (
            <EmptyJobField setCurrentPage={setCurrentPage} />
          )}
        </div>
        <div className="lg:mt-[127px] 2xl:mt-[70px] sm:mt-[85px] mt-[70px]">
          <span className="text-[20px] sm:text-[24px] lg:text-[30px] font-medium text-[#18470D] sm:mb-[50px] lg:mb-[60px] mb-[18px] block">
            Work together again on something new
          </span>
          <CardSlider personsData={personsData} />
        </div>
        <div className="sm:mt-[50px] lg:mt-[30px] 2xl:mt-[70px] mt-[93px]">
          <span className="text-[20px] sm:text-[24px] lg:text-[30px] font-medium text-[#18470D] sm:mb-[27px] lg:mb-[32px] 2xl:mb-[60px] mb-[27px] block">
            Top Talents
          </span>
          <CardSlider personsData={personsData} />
        </div>
      </div>
    </main>
  );
};
