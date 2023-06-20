import { Temporal } from "@js-temporal/polyfill";
import { getValueByProperty } from "./calculateServices";

function formatTime(date) {
  const time = date.toString();

  const timeFormmatted = date.toLocaleString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return { time, timeFormmatted };
}

export function formatStringToTime(date) {
  const time = Temporal.ZonedDateTime.from(date);
  return formatTime(time);
}

export function getTimes(chosenServices) {
  const timeTotal = chosenServices.reduce((count, service) => {
    count += getValueByProperty("duration", service);
    return count;
  }, 0);

  const now = Temporal.Now.zonedDateTimeISO();
  const delivery = now.add({ minutes: timeTotal });

  const { time: timeRegister, timeFormmatted: timeRegisterFormatted } =
    formatTime(now);
  const { time: timeDelivery, timeFormmatted: timeDeliveryFormatted } =
    formatTime(delivery);

  return {
    timeRegister,
    timeRegisterFormatted,
    timeDelivery,
    timeDeliveryFormatted,
  };
}
