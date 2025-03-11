"use client";
import StepsPanel from "@/components/StepsPanel";
import { useState } from "react";

const shortCardData = [
  { title: "Entry" },
  { title: "Intermediate" },
  { title: "Expert" },
  { title: "Not Defined" },
];

interface ThirdStepProps {
  handleChangeStep: (step: number) => void;
  currentStepsData: Array<{ stepCount: number; active: boolean; checked: boolean }>;
}

export const ThirdStep: React.FC<ThirdStepProps> = ({ handleChangeStep, currentStepsData }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const handleRadioChange = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className="px-[20px] lg:justify-center xl:justify-between max-w-[569px] lg:max-w-[1240px] 2xl:max-w-[1530px] mx-auto lg:pt-[157px] sm:pt-[77px] pt-[48px] flex justify-between flex-wrap gap-x-[20px] mb-[111px] gap-y-[40px] sm:gap-y-[34px]">
      <div className="sm:max-w-[482px] lg:max-w-[500px]">
        <StepsPanel stepsData={currentStepsData} />
        <h1 className="text-[#000] text-[20px] font-medium sm:text-[30px] lg:text-[40px] sm:mt-[40px] xl:mt-[20px] 2xl:mt-[22px] mt-[48px]">
          Estimate the scope of the work
        </h1>
        <div className="text-[#545454] text-[16px] sm:text-[14px] lg:text-[18px] mt-[19px] 2xl:mt-[7px] max-w-[520px]">
          <span>
            These aren’t final answers, but this information helps us recommend
            the right talent for what you need.
          </span>
        </div>
      </div>
      <div className="lg:max-w-[500px] 2xl:max-w-[590px] min-h-[373px] xl:min-h-[670px] w-full flex flex-col">
        <div className="flex-1">
          <h1 className="text-[#000] text-[16px] sm:text-[20px] font-medium lg:text-[24px] xl:mt-[13px] sm:mt-[48px] mb-[22px] sm:mb-[16px] lg:mb-[10px]">
            What level of experience will it need?
          </h1>
          <ul className="flex flex-col gap-y-[10px]">
            {shortCardData.map((option, i) => (
              <li
                key={i}
                className="flex items-center gap-[8px] text-[16px] text-[#545454]"
              >
                <div className="relative">
                  <input
                    type="radio"
                    name="reason"
                    checked={selectedOption === i}
                    onChange={() => handleRadioChange(i)}
                    className="absolute h-[24px] w-[24px] cursor-pointer opacity-0"
                  />
                  <div
                    className={`flex h-[24px] w-[24px] items-center justify-center rounded-full ${
                      selectedOption === i
                        ? "bg-[#18470D]"
                        : "border-2 border-[#AEB3BC]"
                    }`}
                  >
                    {selectedOption === i && (
                      <div className="h-[12px] w-[12px] rounded-full bg-white"></div>
                    )}
                  </div>
                </div>
                <span className="cursor-pointer">{option.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-[16px] pt-[20px]  justify-end">
          <button className="w-[140px] h-[40px] lg:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] border-1 border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium">
            Back
          </button>
          <button onClick={() => handleChangeStep(4)} className="w-[140px] h-[40px] lg:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] rounded-[50px] cursor-pointer font-medium bg-[#CBEC5E]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
