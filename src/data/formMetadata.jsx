// Components:
import { FormUser } from "../components/FormUser";
import { FormCar } from "../components/FormCar";
import { FormServices } from "../components/FormServices";
import { FormInvoice } from "../components/FormInvoice";
import { FormThanks } from "../components/FormThanks";

export const formMetadata = {
  formTitles: [
    "Datos personales 🧑",
    "Datos del carro 🚗",
    "Elige al menos un servicio 🤔",
    "Confirma tu cita ✔️",
    "¡Felicidades! 🥳",
  ],
  formKeywords: ["client", "car", "services", "confirm", "thanks"],
  formComponents: [
    <FormUser />,
    <FormCar />,
    <FormServices />,
    <FormInvoice />,
    <FormThanks />,
  ],
};
