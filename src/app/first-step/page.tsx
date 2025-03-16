import StepDropDown from "@/components/StepDropDown";
import StepsPanel from "@/components/StepsPanel";
import { useEffect, useState } from "react";

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

interface FirstStepProps {
  handleChangeStep: (step: number) => void;
  currentStepsData: Array<{
    stepCount: number;
    active: boolean;
    checked: boolean;
  }>;
  jobsData: Job[];
  setJobsData: React.Dispatch<React.SetStateAction<Job[]>>;
}

export const FirstStep: React.FC<FirstStepProps> = ({
  handleChangeStep,
  currentStepsData,
}) => {
  const [jobTitle, setJobTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const [jobTitleValid, setJobTitleValid] = useState(true);
  const [categoryValid, setCategoryValid] = useState(true);
  const [buttonValid, setButtonValid] = useState(false);

  const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
  
    const regex = /^(?!^\p{N}+$)[\p{L}\p{N} ]+$/u;
  
    if (value === "" || regex.test(value)) {
      setJobTitle(value);
      setJobTitleValid(true); 
    } else {
      setJobTitleValid(false);
    }
  };

  useEffect(() => {
    if (jobTitle.length && category.length) {
      setButtonValid(true)
    } else {
      setButtonValid(false)
    }
  }, [jobTitle, category]);

  const validateForm = () => {
    let isValid = true;

    if (!jobTitle) {
      isValid = false;
      setJobTitleValid(false);
    } else {
      setJobTitleValid(true);
    }

    if (!category) {
      isValid = false;
      setCategoryValid(false);
    } else {
      setCategoryValid(true);
    }

    return isValid;
  };

  const handleNextClick = () => {
    if (validateForm()) {
      handleChangeStep(2);
    }
  };

  return (
    <div className=" xl:px-0 lg:justify-center lg:px-[20px] xl:px-none xl:justify-between max-w-[335px] sm:max-w-[569px] lg:max-w-[1240px] 2xl:max-w-[1430px] mx-auto lg:pt-[157px] sm:pt-[120px] pt-[48px] flex justify-between flex-wrap lg:flex-nowrap gap-x-[20px] mb-[111px] gap-y-[50px] sm:gap-y-[13px]">
      <div>
        <StepsPanel stepsData={currentStepsData} />
        <h1 className="text-[#000] text-[20px] font-medium sm:text-[30px] lg:text-[40px] sm:mt-[19px] xl:mt-[13px] 2xl:mt-[22px] mt-[48px]">
          Let’s start with a strong title.
        </h1>
        <div className="text-[#545454] text-[14px] sm:text-[16px] lg:text-[18px] mt-[19px] sm:mt-[5px] max-w-[520px]">
          <span>
            This helps your job post stand out to the right candidates. It’s the
            first thing they’ll see, so make it count!
          </span>
        </div>
      </div>
      <div className="lg:max-w-[540px] max-w-[335px] sm:max-w-[514px] 2xl:max-w-[590px] min-h-[373px] lg:min-h-[512px] w-full flex flex-col">
        <div className="flex-1">
          <div>
            <div>
              <label
                className="text-[#000] xl:text-[16px] sm:text-[16px] 2xl:text-[18px]"
                htmlFor="input"
              >
                Write a title for your job post*
              </label>
            </div>
            <div
              className={`border-[1px] mt-[8px] h-[42px] rounded-[12px] flex items-center p-[8px] ${
                !jobTitleValid ? "border-[#DD331D]" : "border-[#242524]"
              }`}
            >
              <input
                placeholder="e.g. Photographer needed for professional event coverage"
                className="w-full h-[24px] placeholder:text-[#8B939F] text-[12px] sm:text-[14px] placeholder:text-[12px] sm:placeholder:text-[14px] 2xl:placeholder:text-[16px] text-[#2B2C2D] focus:outline-0 text-ellipsis"
                id="input"
                type="text"
                value={jobTitle}
                onChange={handleJobTitleChange}
              />
              
            </div>
            {!jobTitleValid && (
                <p className="mt-[8px] text-[#DD331D] text-[12px]">Job title too short</p>
              )}
          </div>
          <div className="mt-[10px] sm:mt-[14px] lg:mt-[20px]">
            <label className="text-[#000] text-[16px] 2xl:text-[18px]">
              Category*
            </label>
            <div className="mt-[8px]">
              <StepDropDown
                isValid={categoryValid}
                inValidText="error"
                state={category}
                setState={setCategory}
                list={categories}
                placeholder="Select Category"
              />
            </div>
          </div>
          <div className="mt-[20px]">
            <label className="text-[#000] text-[16px] 2xl:text-[18px]">
              Subcategories
            </label>
            <div className="mt-[8px]">
              <StepDropDown
                state={subCategory}
                setState={setSubCategory}
                list={subCategories}
                placeholder="Select Subcategory"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-[16px] pt-[20px] justify-end">
          <button
            onClick={() => handleChangeStep(0)}
            className="w-[140px] h-[40px] lg:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] border-1 border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium"
          >
            Back
          </button>
          <button
            onClick={handleNextClick}
            className={`w-[140px] h-[40px] lg:w-[200px] lg:h-[48px]  text-[16px] rounded-[50px] font-medium  ${buttonValid ? ' bg-[#CBEC5E] text-[#18470D] cursor-pointer ' : ' bg-[#EAEAEA] text-[#B8B8B8] '}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
