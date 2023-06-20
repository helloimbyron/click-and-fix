// Context:
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

// CSS:
import "./FormInputAndTextArea.css";

export function FormTextArea({ label, name, id, placeholder }) {
  const { data, handleUpdateData } = useContext(FormContext);

  return (
    <div className="form-floating mb-3">
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        value={data[name] || ""}
        onChange={handleUpdateData}
        className="form-control"
        style={{ height: "150px" }}
        required
      ></textarea>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
