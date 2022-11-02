import axios from "axios";
const api = axios.create({
  // 로그인 했을 때 서버통신
  baseURL: "http://10.80.161.189:8000/api",
  // baseURL: "http://10.80.161.250:8000/api",
  timeout: 1000,
});

api.interceptors.request.use(
  function (config) {
    // 로그인 되있을 때 access_token
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
