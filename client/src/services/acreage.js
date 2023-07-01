import axiosConfig from "../axiosConfig";

export const apiGetAcreages = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/acreages",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
