"use client";

import { useEffect, useState } from "react";
import { GetStarted } from "../get-started/page";
import { FirstStep } from "../first-step/page";
import { SecondStep } from "../second-step/page";
import { ThirdStep } from "../third-step/page";
import { FourthStep } from "../fourth-step/page";
import { FifthStep } from "../fifth-step/page";

const stepsData = [
  { stepCount: 1, active: false, checked: false },
  { stepCount: 2, active: false, checked: false },
  { stepCount: 3, active: false, checked: false },
  { stepCount: 4, active: false, checked: false },
  { stepCount: 5, active: false, checked: false },
];

export default function page() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentStepsData, setCurrentStepsData] = useState(stepsData);

  const handleChangeStep = (step: number) => {
    setCurrentStep(step);
    setCurrentStepsData((prevData) => {
      return prevData.map((prevStepData) => {
        return {
          ...prevStepData,
          active: prevStepData.stepCount === step ? true : false,
          checked: prevStepData.stepCount < step ? true : false
        };
      });
    });
  };

  return (
    <main>
      {currentStep === 1 ? (
        <FirstStep currentStepsData={currentStepsData} handleChangeStep={handleChangeStep} />
      ) : currentStep === 2 ? (
        <SecondStep currentStepsData={currentStepsData} handleChangeStep={handleChangeStep} />
      ) : currentStep === 3 ? (
        <ThirdStep currentStepsData={currentStepsData} handleChangeStep={handleChangeStep} />
      ) : currentStep === 4 ? (
        <FourthStep currentStepsData={currentStepsData} handleChangeStep={handleChangeStep} />
      ) : currentStep === 5 ? (
        <FifthStep currentStepsData={currentStepsData} handleChangeStep={handleChangeStep} />
      ) : (
        <GetStarted handleChangeStep={handleChangeStep} />
      )}
    </main>
  );
}
