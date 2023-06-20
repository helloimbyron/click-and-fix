// Hooks:
import { useState } from "react";

import { saveInvoice } from "../aws/saveInvoice";

export function useForm(formComponents) {
  const [currentStep, setCurrentStep] = useState(0);

  const changeStep = (step, event) => {
    if (event) event.preventDefault();
    if (step < 0 || step >= formComponents.length) return;
    setCurrentStep(step);
  };

  const handleNext = (event) => {
    changeStep(currentStep + 1, event);
  };

  const handleBack = () => {
    changeStep(currentStep - 1);
  };

  const handleSubmit = async (event, formData, awsStatus) => {
    event.preventDefault();

    if (awsStatus) {
      const data = JSON.stringify(formData);
      saveInvoice(data);
    } else {
      console.warn("Estos son los datos de tu cita 🤗:\n", formData);
    }

    handleNext(event);
  };

  return {
    currentStep,
    currentPercentage:
      (100 / (formComponents.length - 1)) * (currentStep + 1) - 25,
    handleNext,
    handleBack,
    handleSubmit,
    isFirstStep: currentStep === 0,
    isInputSteps: currentStep >= 0 && currentStep < formComponents.length - 2,
    isConfirmStep: currentStep === formComponents.length - 2,
    isThanksStep: currentStep === formComponents.length - 1,
  };
}
