"use client";

import { useState } from "react";
import { GetStarted } from "../get-started/page";
import { FirstStep } from "../first-step/page";
import { SecondStep } from "../second-step/page";
import { ThirdStep } from "../third-step/page";
import { FourthStep } from "../fourth-step/page";
import { FifthStep } from "../fifth-step/page";
import { JobDetails } from "../job-details/page";

const data = {
  stepsData: [
    { stepCount: 1, active: false, checked: false },
    { stepCount: 2, active: false, checked: false },
    { stepCount: 3, active: false, checked: false },
    { stepCount: 4, active: false, checked: false },
    { stepCount: 5, active: false, checked: false },
  ],
};

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

interface CreateJobProps {
  jobsData: Job[];
  setCurrentPage: (value: string) => void;
  setJobsData: React.Dispatch<React.SetStateAction<Job[]>>;
}

export const CreateJob: React.FC<CreateJobProps> = ({
  jobsData,
  setJobsData,
  setCurrentPage,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentStepsData, setCurrentStepsData] = useState(data.stepsData);

  const handleChangeStep = (step: number) => {
    setCurrentStep(step);
    setCurrentStepsData((prevData) => {
      return prevData.map((prevStepData) => {
        return {
          ...prevStepData,
          active: prevStepData.stepCount === step ? true : false,
          checked: prevStepData.stepCount < step ? true : false,
        };
      });
    });
  };

  return (
    <main>
      {currentStep === 1 ? (
        <FirstStep
          currentStepsData={currentStepsData}
          handleChangeStep={handleChangeStep}
          setJobsData={setJobsData}
          jobsData={jobsData}
        />
      ) : currentStep === 2 ? (
        <SecondStep
          currentStepsData={currentStepsData}
          handleChangeStep={handleChangeStep}
          setJobsData={setJobsData}
          jobsData={jobsData}
        />
      ) : currentStep === 3 ? (
        <ThirdStep
          currentStepsData={currentStepsData}
          handleChangeStep={handleChangeStep}
          setJobsData={setJobsData}
          jobsData={jobsData}
        />
      ) : currentStep === 4 ? (
        <FourthStep
          currentStepsData={currentStepsData}
          handleChangeStep={handleChangeStep}
          setJobsData={setJobsData}
          jobsData={jobsData}
        />
      ) : currentStep === 5 ? (
        <FifthStep
          currentStepsData={currentStepsData}
          handleChangeStep={handleChangeStep}
          setJobsData={setJobsData}
          jobsData={jobsData}
        />
      ) : currentStep === 6 ? (
        <JobDetails
          handleChangeStep={handleChangeStep}
          setJobsData={setJobsData}
          jobsData={jobsData}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <GetStarted
          setCurrentPage={setCurrentPage}
          handleChangeStep={handleChangeStep}
        />
      )}
    </main>
  );
};
