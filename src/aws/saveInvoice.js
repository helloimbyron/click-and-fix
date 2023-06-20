import { docClient } from "./dynamoConfig";
import { PutCommand } from "@aws-sdk/lib-dynamodb";

export async function saveInvoice(data) {
  const formData = JSON.parse(data);

  const command = new PutCommand({
    TableName: "invoices",
    Item: {
      clientName: formData.clientName,
      clientPhone: formData.clientPhone,
      clientEmail: formData.clientEmail,
      clientIdType: formData.clientIdType,
      clientIdNumber: formData.clientIdNumber,
      carBrand: formData.carBrand,
      carModel: formData.carModel,
      carLicensePlate: formData.carLicensePlate,
      carTankLevel: formData.carTankLevel,
      carExternalState: formData.carExternalState,
      services: [...formData.services],
      timeRegister: formData.timeRegister,

      timeDelivery: formData.timeDelivery,
    },
  });

  try {
    docClient.send(command);
  } catch (error) {
    console.log(error);
    throw new Error(
      "No se pudo guardar la cita. Verifica la función 'saveInvoice()' o tu configuración de DynamoDB, por favor. 😭"
    );
  }
}
