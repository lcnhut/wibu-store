import axios from "axios";
const instance = axios.create({
  baseURL: "https://629afeb4656cea05fc319faa.mockapi.io/",
  timeout: 3000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
