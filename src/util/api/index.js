import axios from 'axios'
const api = axios.create({
  baseURL: 'http://10.80.161.189:8000/api',
  timeout: 1000
})

api.interceptors.request.use (
  function (config) {
    const accessToken = localStorage.getItem("access_token");
    console.log(accessToken)
    if (accessToken) {
      config.headers = {
        Authorization: accessToken,
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
)

export default api