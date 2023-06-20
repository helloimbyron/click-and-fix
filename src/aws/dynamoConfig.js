import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

/* Modo demo:
Por defecto, el proyecto viene configurado con una región,
para que disfrutes la aplicación web sin conexión a DynamoDB. */

const client = new DynamoDBClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
    sessionToken: "",
  },
});

export const docClient = DynamoDBDocumentClient.from(client);
