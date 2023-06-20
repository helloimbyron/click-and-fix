// Context:
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

// CSS:
import "./FormInputAndTextArea.css";

export function FormInput({
  label,
  type,
  name,
  id,
  placeholder,
  pattern,
  min,
  max,
}) {
  const { data, handleUpdateData } = useContext(FormContext);

  const patterns = {
    ecuadorianPhoneNumber: "[0-9]{10}",
    ecuadorianPassport: "[A-Za-z]{1}-[0-9]{7}",
    ecuadorianLicensePlate: "[A-Za-z]{3}-[0-9]{4}",
  };

  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={data[name] || ""}
        onChange={handleUpdateData}
        className="form-control"
        pattern={patterns?.[pattern]}
        min={min}
        max={max}
        required
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
