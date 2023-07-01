import db from "../models";

export const getAcreages = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Acreage.findAll({
        attributes: ["code", "value"],
        order: [["order", "ASC"]],
        raw: true,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
