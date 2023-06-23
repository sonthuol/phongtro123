import axiosConfig from "../axiosConfig";

export const apiGetCategories = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/categories",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
