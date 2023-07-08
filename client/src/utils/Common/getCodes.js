import { getNumberAcreages, getNumberPrices } from "./getNumbers";

export const getCodePrices = (totals) => {
  let arr = [];
  return totals.map((item) => {
    let arrMaxMin = getNumberPrices(item.value);
    if (arrMaxMin.length === 1) arr.push(arrMaxMin[0]);
    let sortedArr = arr.sort();
    return {
      ...item,
      min: sortedArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
      max:
        sortedArr.indexOf(arrMaxMin[0]) === 0
          ? arrMaxMin[0]
          : sortedArr.indexOf(arrMaxMin[0]) === 1
          ? 9999999
          : arrMaxMin[1],
    };
  });
};

export const getCodeAcreages = (totals) => {
  let arr = [];
  return totals.map((item) => {
    let arrMaxMin = getNumberAcreages(item.value);
    if (arrMaxMin.length === 1) arr.push(arrMaxMin[0]);
    let sortedArr = arr.sort();
    return {
      ...item,
      min: sortedArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
      max:
        sortedArr.indexOf(arrMaxMin[0]) === 0
          ? arrMaxMin[0]
          : sortedArr.indexOf(arrMaxMin[0]) === 1
          ? 9999999
          : arrMaxMin[1],
    };
  });
};

export const getPrices = (arrMaxMin, prices) => {
  const pricesWithMinMax = getCodePrices(prices);
  return pricesWithMinMax.filter(
    (item) =>
      (item.min >= arrMaxMin[0] && item.min <= arrMaxMin[1]) ||
      (item.max >= arrMaxMin[0] && item.max <= arrMaxMin[1])
  );
};

export const getAcreages = (arrMaxMin, prices) => {
  const pricesWithMinMax = getCodeAcreages(prices);
  return pricesWithMinMax.filter(
    (item) =>
      (item.min >= arrMaxMin[0] && item.min <= arrMaxMin[1]) ||
      (item.max >= arrMaxMin[0] && item.max <= arrMaxMin[1])
  );
};
