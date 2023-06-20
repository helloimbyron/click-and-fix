export function areFieldsFilled(data, criteria) {
  const array = Object.entries(data);
  const filteredArray = array.filter(([key]) => key.includes(criteria));

  if (criteria === "services") {
    const count = filteredArray[0][1].length;
    return count > 0;
  }

  const count = filteredArray.filter((field) => field[1] === "").length;
  return count === 0;
}
