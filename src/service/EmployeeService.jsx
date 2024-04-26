import { baseUrl } from "./AuthService";
import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    if (!config.url.endsWith("/login") && !config.url.endsWith("/register")) {
      config.headers["Authorization"] = localStorage.getItem("AuthToken");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default function getEmployee() {
  return axios.get(baseUrl + "getEmployee");
}

export  function addEmployee(employee) {
  return axios.post(baseUrl + "createEmployee",employee);
}

export  function deleteEmployee(employee) {
  return axios.post(baseUrl + "deleteEmployee",employee);
}

export  function updateEmployee(employee) {
  return axios.put(baseUrl + "updateEmployee",employee);
}

