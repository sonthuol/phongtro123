import db from "../models";

// Get all category
export const getCategories = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        attributes: ["code", "value"],
        raw: true,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
