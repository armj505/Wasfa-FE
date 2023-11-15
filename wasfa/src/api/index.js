import axios from "axios";

const base_URL = "http://localhost:8000";
const instance = axios.create({
  baseURL: base_URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { instance, base_URL };
