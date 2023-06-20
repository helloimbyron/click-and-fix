// Component:
import { FormInput } from "./FormInput";

// Hook:
import { useState } from "react";

// Context:
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export function FormSelect({
  selectLabel,
  selectName,
  selectId,
  optionName,
  optionId,
  optionsConfig,
}) {
  const { data, handleUpdateData } = useContext(FormContext);
  const [option, setOption] = useState(data?.[selectName] || "");

  let chosenInputConfig = "";

  if (option) {
    chosenInputConfig = optionsConfig.filter(
      (config) => config.optionValue === option
    )[0];
  }

  const handleSelect = (event) => {
    setOption(event.target.value);
    handleUpdateData(event);
    data[optionName] = "";

    // If I don't want identification card or RUC as passport. And vice versa.
    // const previousOption = option;
    // setOption(event.target.value);
    // handleUpdateData(event);
    // const actualOption = event.target.value;

    // if (
    //   !(
    //     (previousOption === "Cédula" && actualOption === "RUC") ||
    //     (previousOption === "RUC" && actualOption === "Cédula")
    //   )
    // ) {
    //   data[optionName] = "";
    // }
  };

  return (
    <>
      <div className="form-floating mb-3">
        <select
          name={selectName}
          id={selectId}
          defaultValue={data[selectId] || "message"}
          onChange={handleSelect}
          className="form-select"
          required
        >
          <option value="message" disabled>
            Escoja una opción
          </option>
          {optionsConfig.map((option, index) => (
            <option value={option.optionValue} key={index}>
              {option.optionLabel}
            </option>
          ))}
        </select>
        <label htmlFor={selectId}>{selectLabel}</label>
      </div>

      {option && (
        <FormInput
          label={chosenInputConfig.inputLabel}
          type={chosenInputConfig.inputType}
          name={optionName}
          id={optionId}
          placeholder={chosenInputConfig.inputPlaceholder}
          pattern={chosenInputConfig.inputPattern}
          min={chosenInputConfig.min}
          max={chosenInputConfig.max}
        />
      )}
    </>
  );
}
