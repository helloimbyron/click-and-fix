// Hooks:
import { useRef } from "react";

import { dynamo } from "../services/awsConfig";

export function useServices() {
  const services = useRef();

  const params = {
    TableName: "Servicios",
  };

  dynamo.scan(params, (error, data) => {
    if (!error) {
      services.current = data.Items;
    }
  });

  return { services };
}
