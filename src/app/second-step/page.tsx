"use client";
import StepDropDown from "@/components/StepDropDown";
import StepsPanel from "@/components/StepsPanel";
import { useEffect, useState } from "react";
import { GreenCloseIcon } from "../../../public/icons/GreenCloseIcon";

const categories = [
  { id: 1, title: "House Cleaning", checked: false },
  { id: 2, title: "Furniture and Carpet Cleaning", checked: false },
  { id: 3, title: "Window and Façade Washing", checked: false },
  { id: 4, title: "Finishing Works", checked: false },
  { id: 5, title: "Construction and Repair", checked: false },
  { id: 6, title: "Electrical Installation Works", checked: false },
  { id: 7, title: "Plumbing Works", checked: false },
  { id: 8, title: "Pet Walking", checked: false },
];

interface SecondStepProps {
  handleChangeStep: (step: number) => void;
  currentStepsData: Array<{
    stepCount: number;
    active: boolean;
    checked: boolean;
  }>;
  jobsData: Job[];
  setJobsData: React.Dispatch<React.SetStateAction<Job[]>>;
}

interface Job {
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
}

export const SecondStep: React.FC<SecondStepProps> = ({
  handleChangeStep,
  currentStepsData,
}) => {
  const [dropDownData, setDropDrownData] = useState(categories);
  const [dropdDownValid, setDropDownValid] = useState(true);
  const [buttonValid, setButtonValid] = useState(false);

  useEffect(() => {
    const isValid = dropDownData.some((item) => item.checked);
    setButtonValid(isValid);
  }, [dropDownData]);

  const handleDataChange = () => {
    const isValid = dropDownData.some((item) => item.checked);
    setDropDownValid(isValid);

    if (isValid) {
      handleChangeStep(3);
    }
  };

  const toggleCheckbox = (id: number) => {
    setDropDrownData((prevProps) => {
      return prevProps.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
    });
  };
  return (
    <div className="px-[40px] sm:justify-center xl:justify-between lg:max-w-[1240px] 2xl:max-w-[1530px] mx-auto lg:pt-[157px] sm:pt-[134px] pt-[48px] flex justify-between flex-wrap gap-y-[56px] gap-x-[20px] mb-[111px]">
      <div className="sm:max-w-[371px] lg:max-w-[596px]">
        <StepsPanel stepsData={currentStepsData} />
        <h1 className="text-[#000] text-[20px] font-medium sm:text-[30px] lg:text-[40px] sm:mt-[19px] xl:mt-[40px] 2xl:mt-[27px] mt-[40px]  xl:max-w-[596px]">
          What skills are needed to get the job done?
        </h1>
      </div>
      <div className="max-w-[384px] xl:max-w-[460px] 2xl:max-w-[590px] w-full sm:min-h-[539px] min-h-[300px] flex flex-col gap-[8px]">
        <div className="flex flex-wrap gap-[8px]">
          {dropDownData.map((item, i) => {
            return item.checked ? (
              <div
                key={i}
                className="font-medium flex items-center gap-[3px] text-[14px] sm:text-[16px] text-[#000] p-[6px_7px_6px_26px] border-[#000000] border-1 rounded-full"
              >
                {item.title}{" "}
                <div
                  className="cursor-pointer"
                  onClick={() => toggleCheckbox(item.id)}
                >
                  <GreenCloseIcon />
                </div>
              </div>
            ) : (
              ""
            );
          })}
        </div>
        <div className="flex-1">
          <StepDropDown
            hasCheckboxes={true}
            list={dropDownData}
            placeholder="Select Category"
            toggleCheckbox={toggleCheckbox}
            searchField={true}
            isValid={dropdDownValid}
          />
          {!dropdDownValid && (
            <p className="text-[#DD331D] text-[12px]">lalalal</p>
          )}
        </div>
        <div className="flex gap-[16px] mt-[20px] justify-end">
          <button
            onClick={() => handleChangeStep(1)}
            className="w-[140px] h-[40px] lg:w-[193px] lg:h-[48px] text-[#18470D] text-[16px] border-1 border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium"
          >
            Back
          </button>
          <button
            onClick={() => handleDataChange()}
            className={`w-[140px] h-[40px] lg:w-[193px] lg:h-[48px] text-[16px] rounded-[50px] cursor-pointer font-medium ${
              buttonValid
                ? " bg-[#CBEC5E] text-[#18470D] cursor-pointer "
                : " bg-[#EAEAEA] text-[#B8B8B8] "
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
