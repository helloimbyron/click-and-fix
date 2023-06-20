// Hooks:
import { createContext, useContext } from "react";
import { useFormReducer } from "../hooks/userFormReducer";

// AWS DynamoDB:
import { dataFromDynamo } from "../aws/getServices.js";

export const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export function FormProvider({ children }) {
  const { state, handleUpdateData, handleUpdateCheckbox } = useFormReducer();
  const { awsStatus, servicesList } = dataFromDynamo;

  return (
    <FormContext.Provider
      value={{
        data: state,
        handleUpdateData,
        handleUpdateCheckbox,
        awsStatus,
        servicesList,
        anyServices: servicesList.length > 0,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
