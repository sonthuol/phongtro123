import db from "../models";

export const getPrices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Price.findAll({
        attributes: ["code", "value"],
        order: [["order", "ASC"]],
        raw: true,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
