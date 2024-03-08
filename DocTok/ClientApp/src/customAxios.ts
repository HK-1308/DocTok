import globalRouter from "./globalRouter";
import axios from "axios";

const customAxios = axios.create();
customAxios.defaults.baseURL = "https://localhost:7048"
customAxios.interceptors.response.use(
   function(response) {
      return response;
   },
   function(error) {
      if (error.response.status === 401 && globalRouter.navigate) {
         globalRouter.navigate("/login");
      }
      return Promise.reject(error);
   }
);

export default customAxios;