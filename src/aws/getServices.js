import { docClient } from "./dynamoConfig";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";

async function getServices() {
  const command = new ScanCommand({
    TableName: "services",
  });

  try {
    const response = (await docClient.send(command)).Items;
    const sortedList = response.sort((a, b) => a["id"].localeCompare(b["id"]));
    return { awsStatus: true, servicesList: sortedList };
  } catch (error) {
    return {
      awsStatus: false,
      servicesList: await import("../mocks/servicesList.json").then(
        ({ servicesList }) => servicesList
      ),
    };
  }
}

export const dataFromDynamo = await getServices();
