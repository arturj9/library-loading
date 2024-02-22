import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-books.fly.dev/api/v1/",
});

api.interceptors.request.use(
  async (config) => {
    // const token = localStorage.getItem("token")
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDg2MDIwMTYsImV4cCI6MTcwODY4ODQxNiwic3ViIjoiOTg2YjBjOTAtN2FmYi00ZTRhLWI1NjItM2VkNGM2MTE1OTNkIn0.U7AUX3fX9jOkpRyHPdJutRkQtb55Pq-R2LvwohXe67E";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
