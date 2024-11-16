import { Post } from "@/types/type";
import axios from "redaxios";
// import Cookies from "js-cookie"

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const api = {
  posts: {
    getPosts: () =>
      apiClient.get("/posts").then((res) => {
        return res.data;
      }),
    createPost: (data: Post) =>
      apiClient.post("/posts", data).then((res) => {
        return res.data;
      })
  },
  departments: {
    getDep: () =>
      apiClient.get("/departments").then((res) => {
        return res.data;
      })
  }
};

export default apiClient;
