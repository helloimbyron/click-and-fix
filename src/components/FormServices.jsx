// Component:
import { FormAlert } from "./FormAlert";

// Context:
import { useFormContext } from "../context/FormContext";

export function FormServices() {
  const { data, handleUpdateCheckbox, servicesList, anyServices, awsStatus } =
    useFormContext();

  const isChecked = (actualService) =>
    data["services"].some((service) => service === actualService);

  return (
    <>
      {!awsStatus && (
        <FormAlert content="Los siguientes servicios no están sincronizados con la base de datos. 🙃" />
      )}

      {anyServices ? (
        <ul className="list-group mb-3">
          {servicesList.map((item) => (
            <li
              key={item.id}
              className="list-group-item list-group-item-action py-3 mb-3 border-1 rounded-1"
              aria-current="true"
            >
              <input
                type="checkbox"
                name={item.id}
                id={item.id}
                value={item.id}
                onChange={handleUpdateCheckbox}
                checked={isChecked(item.id)}
                className="form-check-input me-3"
              />
              <label htmlFor={item.id} className="form-check-label">
                {item.name}
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center lead mb-3">
          <hr className="mt-4" />
          <p>Uy, por el momento no tenemos servicios disponibles. 😵</p>
          <p>
            ¡Vuelve en un chance y tendremos las mejores opciones para arreglar
            tu carro! 😉
          </p>
        </div>
      )}
    </>
  );
}
