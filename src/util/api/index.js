import axios from 'axios'

// const token = () => localStorage.getItem('access_token')

const api = axios.create({
  baseURL: 'http://10.80.162.42:8000/api',
  headers: {Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJ0b21hdG80MTE2IiwiaWF0IjoxNjY1NTYzODg1LCJleHAiOjE3MDg3NjM4ODUsImlzcyI6ImJsYW5rIiwic3ViIjoiYWNjZXNzVG9rZW4ifQ.q0lZa3it0ZvB-yUulVk4i5XQ9w5LdK-TbH1mUOQYVOw"}
//   headers: localStorage.getItem('access_token') && {
//     Authorization: `Bearer ${token()}`
//   }
})

export default api
