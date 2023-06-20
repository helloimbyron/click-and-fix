// Hooks:
import { useReducer } from "react";

// Reducers:
import { formInitialState, formReducer } from "../reducers/formReducer";

export function useFormReducer() {
  const [state, dispatch] = useReducer(formReducer, formInitialState);

  const handleUpdateData = (event) => {
    dispatch({ type: "update_data", event });
  };

  const handleUpdateCheckbox = (event) => {
    dispatch({ type: "update_services", event });
  };

  return { state, handleUpdateData, handleUpdateCheckbox };
}
