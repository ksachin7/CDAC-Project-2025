import axios from "axios";

// const baseURL = import.meta.env.PROD
//   ? "http://backend:8080"
//   : "http://localhost:8080";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});


// Automatically attach token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
