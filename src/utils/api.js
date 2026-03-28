// // Axios config
// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// API.interceptors.request.use((req) => {
//   if (typeof window !== "undefined") {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user?.token) {
//       req.headers.Authorization = `Bearer ${user.token}`;
//     }
//   }
//   return req;
// });

// export default API;


// src/utils/api.js
import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Unga backend URL
});

// Request anuppura ovvoru muraiyum Token-a Cookies-la irunthu eduthu anuppum
API.interceptors.request.use((req) => {
  const token = Cookies.get("token"); // 👈 LocalStorage-ku bathila Cookies!
  
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
    // console.log("Token sent to backend:", token); // Debug panna itha uncomment panni parunga
  } else {
    console.log("No token found in Cookies!");
  }
  
  return req;
});

export default API;