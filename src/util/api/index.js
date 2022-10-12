import axios from 'axios'

// const token = () => localStorage.getItem('access_token')

const api = axios.create({
  baseURL: 'http://10.80.162.42:8000/api',
//   headers: localStorage.getItem('access_token') && {
//     Authorization: `Bearer ${token()}`
//   }
})

export default api
