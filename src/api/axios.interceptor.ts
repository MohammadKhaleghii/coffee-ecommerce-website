import axios from "axios";

const axiosInterceptor = axios.create({
  baseURL: process.env.BASE_URL,
});

axiosInterceptor.interceptors.request.use((config) => {
  return config;
});

axiosInterceptor.interceptors.response.use((response) => {
  return response;
});

export default axiosInterceptor;
