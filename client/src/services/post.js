import axiosConfig from "../axiosConfig";

export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/posts",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
