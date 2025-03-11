"use client";
import { JobDetail } from "@/components/JobDetail";
import { EditIcon } from "../../../public/icons/EditIcon";
import { useState } from "react";
import { JobDetailsPopup } from "@/components/JobDetailsPopup";

const jobData = {
  title: "Hairstylist Needed for Special Events",
  desc: `We are looking for a talented and professional Hairstylist to provide  event-ready hairstyling for weddings, parties, corporate functions, 
and photoshoots.

Services – Bridal, Glam, Formal, Casual, Editorial Styling
Techniques – Updos, Curls, Braiding, Blowouts, Sleek Styles
Products & Tools – Professional Haircare Brands, Styling Tools
Hair Prep – Wash, Treatment, Heat Protection, Volume Boosting
Photo-Ready Styles – Long-Lasting Hold, Frizz-Free Finish
Extras – Hair Extensions, Accessories Styling, Quick Touch-Ups`,
  category: "Beauty and Wellness",
  speciality: "Hairdressing and Styling",
  budget: "$1,000.00",
  scope: "One-time Job",
  skills: ["Hairdressing & Styling"],
};
export default function JobDetails() {
  const [popupVisible, setPopupVisible] = useState(false);
  return (
    <>
      <main className="px-[20px] sm:px-[40px] lg:px-[120px] 2xl:mt-[88px] lg:mt-[50px] sm:mt-[60px] mt-[33px]">
        <div className="mx-auto 2xl:max-w-[1430px] 2xl:mt-[50px]">
          <div className="flex justify-between gap-[10px]">
            <span className="text-[20px] sm:text-[30px] lg:text-[40px] text-[#000] font-medium text-nowrap">
              Job Details
            </span>
            <div className="flex flex-wrap gap-[14px] 2xl:gap-[20px] justify-end">
              <button className="w-[140px] h-[40px] lg:w-[167px] 2xl:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] border-1 border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium">
                Save as Draft
              </button>
              <button
                onClick={() => setPopupVisible(true)}
                className="cursor-pointer w-[140px] h-[40px] text-nowrap lg:w-[167px] 2xl:w-[200px] lg:h-[48px] p-[8px_20px] lg:p-[12px_35px] rounded-full bg-[#CBEC5E] text-[#18470D] text-[16px] font-medium"
                type="button"
              >
                Post a job
              </button>
            </div>
          </div>
          <div className="border-1 border-[#DCDCDC] rounded-[20px] sm:mt-[40px] mt-[25px] ">
            <div className="">
              <div className="p-[8px] sm:p-[12px] lg:p-[17px_16px] 2xl:p-[12px_18px]">
                <div className="border-1 border-[#CBEC5E] rounded-[16px] p-[8px] sm:p-[12px_10px] lg:p-[16px] 2xl:p-[21px_12px] flex justify-between">
                  <div>
                    <span className="text-[14px] sm:text-[20px] lg:text-[24px] text-black font-medium">
                      {jobData.title}
                    </span>
                  </div>
                  <div className="border-1 border-[#CBEC5E] rounded-full min-w-[36px] h-[36px] cursor-pointer flex justify-center items-center">
                    <EditIcon />
                  </div>
                </div>
              </div>
              <hr className="border-b-1 bg-[#B9B9B9]" />
              <div className="p-[8px] sm:p-[12px] lg:p-[17px_16px] 2xl:p-[12px_18px] flex flex-col gap-[20px]">
                <div className="border-1 border-[#CBEC5E] rounded-[16px] flex justify-between p-[8px] sm:p-[12px_10px] lg:p-[16px] 2xl:p-[21px_12px]">
                  <div>
                    <span className="text-[16px] sm:text-[20px] text-black font-medium">
                      Description
                    </span>
                    <p className="text-[14px] sm:text-[16px] text-[#302F2F] max-w-[1075px] mt-[10px]">
                      We are looking for a talented and professional Hairstylist
                      to provide event-ready hairstyling for weddings, parties,
                      corporate functions, and photoshoots. <br />
                      <br />
                      Services – Bridal, Glam, Formal, Casual, Editorial Styling{" "}
                      <br />
                      Techniques – Updos, Curls, Braiding, Blowouts, Sleek
                      Styles <br />
                      Products & Tools – Professional Haircare Brands, Styling
                      Tools <br />
                      Hair Prep – Wash, Treatment, Heat Protection, Volume
                      Boosting <br />
                      Photo-Ready Styles – Long-Lasting Hold, Frizz-Free Finish{" "}
                      <br />
                      Extras – Hair Extensions, Accessories Styling, Quick
                      Touch-Ups
                    </p>
                  </div>
                  <div className="border-1 border-[#CBEC5E] rounded-full min-w-[36px] h-[36px] cursor-pointer flex justify-center items-center">
                    <EditIcon />
                  </div>
                </div>
                <JobDetail title="Category" desc={jobData.category} />
                <JobDetail title="Speciality" desc={jobData.speciality} />
                <JobDetail title="Budget" desc={jobData.budget} />
                <JobDetail title="Scope" desc={jobData.scope} />
                <JobDetail title="Skills" skills={jobData.skills} />
              </div>
            </div>
            <div className="border-t-1 border-[#B9B9B9] py-[30px]">
              <div className="flex gap-[16px] justify-between sm:px-[12px] lg:px-[16px] 2xl:px-[18px] px-[8px]">
                <button className="w-[140px] h-[40px] lg:w-[167px] 2xl:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] border-1 border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium">
                  Back
                </button>
                <button
                  onClick={() => setPopupVisible(true)}
                  className="w-[140px] h-[40px] lg:w-[167px] 2xl:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] rounded-[50px] cursor-pointer font-medium bg-[#CBEC5E]"
                >
                  Post a job
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {popupVisible && <JobDetailsPopup setPopupVisible={setPopupVisible} />}
    </>
  );
}
