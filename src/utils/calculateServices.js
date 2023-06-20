// AWS DynamoDB:
import { dataFromDynamo } from "../aws/getServices.js";

const { servicesList } = dataFromDynamo;

export function getValueByProperty(property, actualService) {
  return servicesList.filter((service) => service.id === actualService)[0][
    property
  ];
}

export function getTotal(chosenServices) {
  const result = chosenServices.reduce((count, actualService) => {
    count += getValueByProperty("price", actualService);
    return count;
  }, 0);

  return result;
}
