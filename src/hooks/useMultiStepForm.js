import { useState } from "react";

function useMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return {
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep,
  };
}

export default useMultiStepForm;
