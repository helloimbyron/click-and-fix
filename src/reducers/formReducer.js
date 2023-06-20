// Mock:
import { dataFormTemplate } from "../mocks/dataFormTemplate.json";

// Initial state:
export const formInitialState = dataFormTemplate;

// Reducer function:
export function formReducer(state, action) {
  const { type, event } = action;

  if (type === "update_data") {
    const { name: key, value } = event.target;
    return { ...state, [key]: value };
  }

  if (type === "update_services") {
    const { value, checked } = event.target;

    if (checked) {
      return { ...state, services: [...state["services"], value] };
    }

    return {
      ...state,
      services: [...state["services"].filter((service) => service !== value)],
    };
  }
}
