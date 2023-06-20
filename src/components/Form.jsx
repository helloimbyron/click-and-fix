// Component:
import { FormProgressBar } from "./FormProgressBar";

// Hook:
import { useForm } from "../hooks/useForm";

// Context:
import { useFormContext } from "../context/FormContext";

// Data:
import { formMetadata } from "../data/formMetadata";
import { areFieldsFilled } from "../utils/areFieldsFilled";

export function Form() {
  const { formTitles, formKeywords, formComponents } = formMetadata;

  const {
    currentStep,
    currentPercentage,
    handleNext,
    handleBack,
    handleSubmit,
    isFirstStep,
    isInputSteps,
    isConfirmStep,
    isThanksStep,
  } = useForm(formComponents);

  const { data, awsStatus } = useFormContext();

  return (
    <form
      className="col-lg-8"
      onSubmit={
        isConfirmStep
          ? (event) => handleSubmit(event, data, awsStatus)
          : handleNext
      }
      action="#"
      method="post"
    >
      {/* Titles form */}
      <h1 className="text-center mb-4">{formTitles[currentStep]}</h1>

      {/* Progress bar */}
      <FormProgressBar currentPercentage={currentPercentage} />

      {/* Inputs form */}
      <div>{formComponents[currentStep]}</div>

      {/* Buttons form */}
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        {!isFirstStep && !isThanksStep && (
          <button
            type="button"
            onClick={handleBack}
            className="btn btn-outline-primary"
          >
            Atrás
          </button>
        )}

        {isInputSteps && (
          <button
            type="submit"
            className={`btn btn-primary ${
              areFieldsFilled(data, formKeywords[currentStep]) ? "" : "disabled"
            }`}
          >
            Siguiente
          </button>
        )}

        {isConfirmStep && (
          <button type="submit" className="btn btn-primary">
            Confirmar
          </button>
        )}
      </div>
    </form>
  );
}
