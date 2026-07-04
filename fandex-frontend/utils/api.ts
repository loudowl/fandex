import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-url.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
