// src/utils/api.js
import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: "https://exlabour-backend.onrender.com/api",
  withCredentials: true,

});

API.interceptors.request.use((req) => {
  const token = Cookies.get("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  } else {
    console.log("No token found in Cookies!");
  }

  return req;
});

export default API;