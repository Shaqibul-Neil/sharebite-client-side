import axios from "axios";
import { useEffect } from "react";

const axiosSecureInstance = axios.create({
  baseURL: "http://localhost:5000/",
});
const useAxiosSecure = () => {
  useEffect(() => {
    const requestInterceptors = axiosSecureInstance.interceptors.request.use(
      (config) => {
        return config;
      }
    );
  }, []);
  return axiosSecureInstance;
};

export default useAxiosSecure;
