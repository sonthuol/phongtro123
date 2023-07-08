export const getNumberPrices = (string) =>
  string
    .split(" ")
    .map((item) => +item)
    .filter((item) => !item === false);

export const getNumberAcreages = (string) =>
  string
    .split(" ")
    .map((item) => +item.match(/\d+/))
    .filter((item) => item !== 0);
