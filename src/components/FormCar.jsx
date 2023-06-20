// Components:
import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextArea";

export function FormCar() {
  return (
    <>
      <FormInput
        label="Marca"
        type="text"
        name="carBrand"
        id="carBrand"
        placeholder="Chevrolet"
      />

      <FormInput
        label="Modelo"
        type="text"
        name="carModel"
        id="carModel"
        placeholder="Onix Turbo RS MT"
      />

      <FormInput
        label="Placa"
        type="text"
        name="carLicensePlate"
        id="carLicensePlate"
        placeholder="ABC-1234"
        pattern="ecuadorianLicensePlate"
      />

      <FormInput
        label="Nivel del tanque de gasolina (%)"
        type="number"
        name="carTankLevel"
        id="carTankLevel"
        placeholder="45"
        min="0"
        max="100"
      />

      <FormTextArea
        label="Descripción del estado exterior"
        name="carExternalState"
        id="carExternalState"
        placeholder="Abolladuras, rayones, pintura descarapelada"
      />
    </>
  );
}
