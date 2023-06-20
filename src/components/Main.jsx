// Components:
import { Form } from "./Form";
import { NoServices } from "./NoServices";

// Context:
import { useFormContext } from "../context/FormContext";

export function Main() {
  const { anyServices } = useFormContext();

  return (
    <main className="d-flex flex-column flex-grow-1">
      <div className="container px-5 my-5 px-5">
        <div className="row gx-5 justify-content-center">
          {anyServices ? <Form /> : <NoServices />}
        </div>
      </div>
    </main>
  );
}
