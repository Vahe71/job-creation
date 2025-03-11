import StepsPanel from "@/components/StepsPanel";
import { FilePickerIcon } from "../../../public/icons/FilePickerIcon";
import { useState } from "react";
import Link from "next/link";

const headingItems = [
  "Clearly define your task or deliverables.",
  "List the essential skills needed.",
  "Emphasize good communication.",
  "Provide insights on your preferred work style.",
];
interface FifthStepProps {
  handleChangeStep: (step: number) => void;
  currentStepsData: Array<{
    stepCount: number;
    active: boolean;
    checked: boolean;
  }>;
}

export const FifthStep: React.FC<FifthStepProps> = ({ currentStepsData }) => {
  const [desc, setDesc] = useState("");
  return (
    <div className="2xl:max-w-[1650px] lg:max-w-[1200px] mx-auto mb-[40px]">
      <div className="w-full mx-auto px-[20px] sm:px-[40px] lg:justify-center xl:justify-between lg:max-w-[1110px] 2xl:max-w-[1330px] lg:pt-[157px] sm:pt-[77px] pt-[48px] flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-y-[25px] md:gap-y-[40px] sm:gap-y-[34px]">
        <div className="max-w-[380px] lg:max-w-[500px] w-full">
          <StepsPanel stepsData={currentStepsData} />
          <h1 className="text-[#000] text-[20px] font-medium sm:text-[30px] lg:text-[40px] mt-[48px]">
            Begin the Discussion.
          </h1>
          <div className="sm:min-w-[328px] lg:max-w-[328px] xl:min-w-[514px] mt-[28px] sm:mt-[38px] lg:mt-[22px] ">
            <p className="text-[14px] text-[#545454] sm:text-[16px] lg:text-[18px] flex items-center gap-[10px]">
              Share key details to help find the right talent:
            </p>
            <ul className="w-full mt-[25px] sm:mt-[20px] lg:max-w-none lg:mt-[11px] leading-[22px] sm:leading-[26px]">
              {headingItems.map((item, i) => {
                return (
                  <li
                    className="text-[14px] text-[#545454] sm:text-[16px] lg:text-[18px] pl-[10px] flex items-center gap-[10px]"
                    key={i}
                  >
                    <div className="w-[4px] h-[4px] bg-[#545454] rounded-full"></div>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="max-w-[350px] lg:max-w-[450px] w-full">
          <div>
            <label
              className="text-[#000] sm:text-[16px] lg:text-[18px]"
              htmlFor="input"
            >
              Describe job responsibilities
            </label>
            <div className="border-1 border-[#AEB3BC] rounded-[12px] mt-[8px] p-[10px] min-h-[146px] flex flex-col">
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                name=""
                id="input"
                placeholder="Already have a description? Past here"
                className="text-[#000] text-[14px] placeholder:text-[14px] lg:text-[16px] lg:placeholder:text-[16px] outline-none placeholder:text-[#8B939F] resize-y w-full min-h-[125px] max-h-[500px]"
              ></textarea>
            </div>
          </div>
          <div className="mt-[57px] sm:mt-[77px] lg:mt-[120px]">
            <label
              className="w-[170px] h-[42px] border-1 border-[#B9B9B9] rounded-[6px] flex p-[9px_12px] cursor-pointer"
              htmlFor="file-input"
            >
              <FilePickerIcon />
              <span className="text-[#18470D] text-[14px] lg:text-[16px] ml-[11px]">
                Attach File
              </span>
              <input className="hidden" id="file-input" type="file" />
            </label>
            <span className="mt-[14px] block text-[#545454] text-[14px]">
              Max file size: 1000MB
            </span>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-[#18470D] mt-[145px] sm:mt-[420px] lg:mt-[250px] pt-[30px] sm:pt-[37px] flex justify-end mx-[20px]">
        <Link href="/job-details">
          <button
            className="cursor-pointer w-[167px] h-[40px] text-nowrap lg:w-[200px] lg:h-[48px] p-[8px_20px] lg:p-[12px_35px] rounded-full bg-[#CBEC5E] text-[#18470D] text-[16px] font-medium"
            type="button"
          >
            Review Job Post
          </button>
        </Link>
      </div>
    </div>
  );
};
