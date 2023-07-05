import db from "../models";

export const getProvinces = () =>
  new Promise(async (resovle, reject) => {
    try {
      const response = db.Province.findAll({ raw: true });
      resovle(response);
    } catch (error) {
      reject(error);
    }
  });
