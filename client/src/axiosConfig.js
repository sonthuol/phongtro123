import axios from "axios";

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

axiosConfig.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("persist:auth");
    console.log(token);
    return config;
  },
  function (err) {
    console.log(err);
    return Promise.reject(err);
  }
);

export default axiosConfig;