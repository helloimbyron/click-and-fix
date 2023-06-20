// After build the project, 'confetti' doesn't work. 😭
// Throw the following error: 'Uncaught ReferenceError: __name is not defined'.
// import confetti from "canvas-confetti";

// Hooks
// import { useEffect } from "react";

// Context:
import { useFormContext } from "../context/FormContext";

// Util
import { formatStringToTime } from "../utils/calculateTimes";

export function FormThanks() {
  const { data, awsStatus } = useFormContext();
  const { timeFormmatted: timeRegisterFormatted } = formatStringToTime(
    data.timeRegister
  );
  const { timeFormmatted: timeDeliveryFormatted } = formatStringToTime(
    data.timeDelivery
  );

  // useEffect(() => {
  //   confetti();
  // }, []);

  return (
    <div className="text-center lead">
      <hr className="mt-4" />

      {awsStatus ? (
        <p>Has reservado una cita éxitosamente. 👏🏻</p>
      ) : (
        <>
          <p>
            No nos importa el modo demo. Te atenderemos porque primero eres tú.
            ❤️
          </p>
        </>
      )}

      <p>Notarás que tu carro desapareció, ¡pero no te asustes! 👀</p>
      <p>
        Lo teletransportamos hacia nuestro taller futurístico para iniciar las
        reparaciones. 💯
      </p>
      <hr />

      <p className="fw-bold">💡 Por si lo olvidaste:</p>
      <div className="row text-center">
        <div className="col-md-6 ">
          <p className="fw-bold m-0">Fecha de reserva:</p>
          <p>{timeRegisterFormatted}</p>
        </div>
        <div className="col-md-6">
          <p className="fw-bold m-0">Fecha de entrega:</p>
          <p>{timeDeliveryFormatted}</p>
        </div>
      </div>
      <hr className="mb-4" />

      {!awsStatus && (
        <>
          <p>En modo demo solo se imprime tu cita por consola. 😅</p>
          <p>¡Así que ábrela presionando la tecla F12! 🤘</p>
          <p>
            Después vemos cómo guardarla cuando se restablezca la conexión con
            AWS. 🐢
          </p>
          <hr className="mt-4" />
        </>
      )}

      <a className="btn btn-primary" href="/">
        Página Principal
      </a>
    </div>
  );
}
