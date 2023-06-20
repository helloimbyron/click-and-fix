// Components:
import { FormAlert } from "./FormAlert";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";

// Context:
import { useFormContext } from "../context/FormContext";

export function FormUser() {
  const { awsStatus } = useFormContext();
  const optionsConfig = [
    {
      optionLabel: "Cédula",
      optionValue: "Cédula",
      inputLabel: "Número de cédula",
      inputType: "number",
      inputPlaceholder: "098-765-432-1",
      min: 1,
      max: 9_999_999_999,
    },
    {
      optionLabel: "RUC",
      optionValue: "RUC",
      inputLabel: "Número de RUC",
      inputType: "number",
      inputPlaceholder: "098-765-432-1-001",
      min: 1001,
      max: 9_999_999_999_001,
    },
    {
      optionLabel: "Pasaporte",
      optionValue: "Pasaporte",
      inputLabel: "Número de pasaporte",
      inputType: "text",
      inputPlaceholder: "A-1234567",
      inputPattern: "ecuadorianPassport",
    },
  ];

  return (
    <>
      {!awsStatus && (
        <FormAlert content="Estás en modo demo porque no se pudo conectar con AWS. Así que las funciones de DynamoDB están deshabilitadas. 👉👈" />
      )}

      <FormInput
        label="Nombre"
        type="text"
        name="clientName"
        id="clientName"
        placeholder="Byron León Liang"
      />

      <FormInput
        label="Teléfono"
        type="tel"
        name="clientPhone"
        id="clientPhone"
        placeholder="098-765-4321"
        pattern="ecuadorianPhoneNumber"
      />

      <FormInput
        label="Correo electrónico"
        type="email"
        name="clientEmail"
        id="clientEmail"
        placeholder="hello@imbyron.com"
      />

      <FormSelect
        selectLabel="Identificación"
        selectName="clientIdType"
        selectId="clientIdType"
        optionName="clientIdNumber"
        optionId="clientIdNumber"
        optionsConfig={optionsConfig}
      />
    </>
  );
}
