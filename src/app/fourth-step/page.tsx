import StepsPanel from "@/components/StepsPanel";

interface FourthStepProps {
  handleChangeStep: (step: number) => void;
  currentStepsData: Array<{ stepCount: number; active: boolean; checked: boolean }>;
}

export const FourthStep: React.FC<FourthStepProps> = ({ handleChangeStep, currentStepsData }) => {

  return (
    <div className="px-[20px] lg:justify-center xl:justify-between max-w-[500px] lg:max-w-[1240px] 2xl:max-w-[1360px] mx-auto lg:pt-[157px] sm:pt-[77px] pt-[48px] flex justify-between flex-wrap gap-x-[20px] mb-[111px] gap-y-[30px] sm:gap-y-[18px]">
      <div className="sm:max-w-[482px] lg:max-w-[500px]">
        <StepsPanel stepsData={currentStepsData} />
        <h1 className="text-[#000] text-[20px] font-medium sm:text-[30px] lg:text-[40px] sm:mt-[30px] lg:mt-[20px] 2xl:mt-[48px] mt-[48px]">
          Define the budget
        </h1>
        <div className="text-[#545454] text-[16px] sm:text-[14px] lg:text-[18px] mt-[26px] 2xl:mt-[8px] lg:max-w-[385px] sm:max-w-[300px]">
          <p>This will help us match you to talent within your range.</p>
        </div>
      </div>
      <div className="lg:max-w-[518px] min-h-[373px] xl:min-h-[670px] w-full flex flex-col">
        <div className="flex-1">
          <div>
            <h2 className="text-[#000] text-[16px] sm:text-[20px] font-medium lg:text-[30px]">
              Fixed Price
            </h2>
            <div className="text-[#545454] text-[16px] sm:text-[16px] lg:text-[18px] lg:mt-[8px] mt-[12px]">
              <span>
                Set a price for the project and pay at the end , or you can
                divide the project into milestones and pay as each milestone is
                completed.
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-[#000] text-[16px] font-medium sm:text-[20px] lg:text-[24px] sm:mt-[40px] xl:mt-[46px] 2xl:mt-[46px] mt-[22px] lg:mb-[7px] mb-[12px] 2xl:max-w-[412px]">
              What is the best cost estimate for your project?
            </h2>
            <span className="text-[#545454] text-[16px] sm:text-[16px] lg:text-[18px] mt-[19px] ">
              You can negotiate this cost and create milestones when you chat
              with your freelancer.
            </span>
          </div>
          <div className="mt-[18px] lg:mt-[35px] sm:mt-[30px]">
            <label
              className="text-[#545454] xl:text-[18px] text-[16px] 2xl:text-[18px]"
              htmlFor="input"
            >
              Budget
            </label>
          </div>
          <div className="border-[1px] border-[#AEB3BC] mt-[8px] h-[42px]  rounded-[12px] flex items-center p-[8px] w-[350px]">
            <input
              placeholder="e.g. $1,000.00"
              className="w-full h-[24px] placeholder:text-[#8B939F] text-[14px] lg:text-[16px] placeholder:text-[14px] lg:placeholder:text-[16px] text-[#2B2C2D] focus:outline-0 text-ellipsis"
              id="input"
              type="text"
              required
            />
          </div>
        </div>
        <div className="flex gap-[16px] sm:mt-[140px] mt-[48px] justify-end">
          <button className="w-[140px] h-[40px] lg:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] border-1 border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium">
            Back
          </button>
          <button onClick={() => handleChangeStep(5)} className="w-[140px] h-[40px] lg:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] rounded-[50px] cursor-pointer font-medium bg-[#CBEC5E]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
