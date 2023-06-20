// Component:
import { FormAlert } from "./FormAlert";

// Context:
import { useEffect } from "react";
import { useFormContext } from "../context/FormContext";

// Utils:
import { getValueByProperty, getTotal } from "../utils/calculateServices.js";
import { getTimes } from "../utils/calculateTimes.js";

export function FormInvoice() {
  const { data, awsStatus } = useFormContext();

  const {
    timeRegister,
    timeRegisterFormatted,
    timeDelivery,
    timeDeliveryFormatted,
  } = getTimes(data.services);

  useEffect(() => {
    data.timeRegister = timeRegister;
    data.timeDelivery = timeDelivery;
  }, []);

  return (
    <>
      {!awsStatus && (
        <FormAlert content="Tu cita no se guardará en la base de datos. Modo demo, ¿recuerdas? 👀" />
      )}

      <div className="card mb-3">
        <div className="card-body mx-4 my-4">
          <div className="container">
            {/* Header */}
            <div className="row">
              <ul className="list-unstyled col-md-6">
                <li>
                  <span className="fw-bold">Nombre: </span>
                  <span>{data.clientName}</span>
                </li>
                <li>
                  <span className="fw-bold">Correo: </span>
                  <span>{data.clientEmail}</span>
                </li>
                <li>
                  <span className="fw-bold">Teléfono: </span>
                  <span>{data.clientPhone}</span>
                </li>
                <li>
                  <span className="fw-bold">{data.clientIdType}: </span>
                  <span>{data.clientIdNumber}</span>
                </li>
              </ul>
              <ul className="list-unstyled col-md-6">
                <li>
                  <span className="fw-bold">Marca: </span>
                  <span>{data.carBrand}</span>
                </li>
                <li>
                  <span className="fw-bold">Modelo: </span>
                  <span>{data.carModel}</span>
                </li>
                <li>
                  <span className="fw-bold">Placa: </span>
                  <span>{data.carLicensePlate}</span>
                </li>
                <li>
                  <span className="fw-bold">Nivel del tanque: </span>
                  <span>{data.carTankLevel}%</span>
                </li>
              </ul>
              <hr />
            </div>

            {/* External State */}
            <div className="row">
              <p className="fw-bold m-0">Estado externo del carro:</p>
              <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                {data.carExternalState}
              </p>
              <hr />
            </div>

            {/* Chosen services */}
            <div>
              <p className="fw-bold m-0">Servicios adquiridos:</p>
              {data.services.sort().map((service, index) => (
                <div key={index} className="row">
                  <div className="col-md-10">
                    {getValueByProperty("name", service)}
                  </div>
                  <div className="text-end col-md-2">
                    ${getValueByProperty("price", service).toFixed(2)}
                  </div>
                </div>
              ))}
              <p className="text-end fw-bold">
                Total: ${getTotal(data.services).toFixed(2)}
              </p>
              <hr />
            </div>

            {/* Times */}
            <div className="row text-center">
              <div className="col-lg-6 ">
                <p className="fw-bold m-0">Fecha de reserva:</p>
                <p>{timeRegisterFormatted}</p>
              </div>
              <div className="col-lg-6">
                <p className="fw-bold m-0">Fecha de entrega:</p>
                <p>{timeDeliveryFormatted}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
