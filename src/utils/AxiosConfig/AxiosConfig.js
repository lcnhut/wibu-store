import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://629f1565461f8173e4e04579.mockapi.io/',
  timeout: 3000,
  headers: { 'X-Custom-Header': 'foobar' },
});
