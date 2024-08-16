import axios from 'axios';

const api = axios.create({
  baseURL: 'https://66b67363b5ae2d11eb66e0bd.mockapi.io'
})

export default api;