import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-books.fly.dev/api/v1/",
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
