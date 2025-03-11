"use client"
import StepDropDown from "@/components/StepDropDown";
import StepsPanel from "@/components/StepsPanel";
import { useEffect } from "react";

const categories = [
  { id: 1, title: "Hairdressing and Styling" },
  { id: 2, title: "Need to tweak and reuse a past job post." },
  { id: 3, title: "Planning to repost a previous job ad." },
  { id: 4, title: "Want to update and use an old job posting." },
  { id: 5, title: "Reusing a prior job description with some edits." },
  { id: 6, title: "Modifying an existing job ad for reuse." },
  { id: 7, title: "Refreshing a previous job post with updates." },
  { id: 8, title: "Adapting an old job listing for a new role." },
  { id: 9, title: "Reposting a job ad with slight modifications." },
  { id: 10, title: "Using a past job description as a template." },
  { id: 11, title: "Making minor changes to an old job post." },
  { id: 12, title: "Updating a previous job listing for relevancy." },
  { id: 13, title: "Recycling a job ad with necessary adjustments." },
  { id: 14, title: "Tweaking an older job posting for current needs." },
  {
    id: 15,
    title: "Revising a past job description to fit today’s requirements.",
  },
];

const subCategories = [
  { id: 1, title: "House Cleaning", checked: true },
  { id: 2, title: "Furniture and Carpet Cleaning", checked: false },
  { id: 3, title: "Window and Façade Washing", checked: false },
  { id: 4, title: "Finishing Works", checked: true },
  { id: 5, title: "Construction and Repair", checked: false },
  { id: 6, title: "Electrical Installation Works", checked: false },
  { id: 7, title: "Plumbing Works", checked: true },
  { id: 8, title: "Pet Walking", checked: true },
];

interface FirstStepProps {
  handleChangeStep: (step: number) => void;
  currentStepsData: Array<{ stepCount: number; active: boolean; checked: boolean }>;
}

export const FirstStep: React.FC<FirstStepProps> = ({ handleChangeStep, currentStepsData }) => {

  useEffect(() => {console.log(currentStepsData)}, [currentStepsData])
  return (
    <div className="px-[20px] lg:justify-center xl:justify-between max-w-[569px] lg:max-w-[1240px] 2xl:max-w-[1530px] mx-auto lg:pt-[157px] sm:pt-[120px] pt-[48px] flex justify-between flex-wrap gap-x-[20px] mb-[111px] gap-y-[34px]">
      <div>
        <StepsPanel stepsData={currentStepsData} />
        <h1 className="text-[#000] text-[20px] font-medium sm:text-[30px] lg:text-[40px] sm:mt-[19px] xl:mt-[13px] 2xl:mt-[22px] mt-[48px]">
          Let’s start with a strong title.
        </h1>
        <div className="text-[#545454] text-[14px] sm:text-[16px] lg:text-[18px] mt-[19px] sm:mt-[35px] max-w-[520px]">
          <span>
            This helps your job post stand out to the right candidates. It’s the
            first thing they’ll see, so make it count!
          </span>
        </div>
      </div>
      <div className="lg:max-w-[560px] 2xl:max-w-[590px] min-h-[373px] lg:min-h-[512px] w-full flex flex-col">
        <div className="flex-1">
          <div>
            <div>
              <label
                className="text-[#000] xl:text-[16px] sm:text-[16px] 2xl:text-[18px]"
                htmlFor="input"
              >
                Write a title for your job post
              </label>
            </div>
            <div className="border-[1px] border-[#242524] mt-[8px] h-[42px]  rounded-[12px] flex items-center p-[8px]">
              <input
                placeholder="e.g. Photographer needed for professional event coverage"
                className="w-full h-[24px] placeholder:text-[#8B939F] text-[12px] sm:text-[14px] placeholder:text-[12px] sm:placeholder:text-[14px] 2xl:placeholder:text-[16px] text-[#2B2C2D] focus:outline-0 text-ellipsis"
                id="input"
                type="text"
                required
              />
            </div>
          </div>
          <div className="mt-[20px]">
            <label className="text-[#000] text-[16px] 2xl:text-[18px]">
              Category
            </label>
            <div className="mt-[8px]">
              <StepDropDown list={categories} placeholder="Select Category" />
            </div>
          </div>
          <div className="mt-[20px]">
            <label className="text-[#000] text-[16px] 2xl:text-[18px]">
              Subcategories
            </label>
            <div className="mt-[8px]">
              {" "}
              <StepDropDown
                list={subCategories}
                placeholder="Select Subcategory"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-[16px] pt-[20px]  justify-end">
          <button className="w-[140px] h-[40px] lg:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] border-1 border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium">
            Back
          </button>
          <button
            onClick={() => handleChangeStep(2)}
            className="w-[140px] h-[40px] lg:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] rounded-[50px] cursor-pointer font-medium bg-[#CBEC5E]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
