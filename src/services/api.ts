import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.storerestapi.com/'
});

export default api;