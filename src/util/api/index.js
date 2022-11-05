import axios from "axios";
import config from "../../config/config.json"

const api = axios.create({
  baseURL: `${config.server}/api`,
  timeout: 1000
})

api.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers = {
        Authorization: accessToken,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
