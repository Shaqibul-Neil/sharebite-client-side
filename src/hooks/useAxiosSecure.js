import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const axiosSecureInstance = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    //setting token in the header for all the api called using axios secure
    //request interceptor
    const requestInterceptors = axiosSecureInstance.interceptors.request.use(
      (config) => {
        const token = user?.accessToken;
        if (token) config.headers.authorization = `Bearer ${token}`;
        return config;
      }
    );

    //response interceptor
    const responseInterceptor = axiosSecureInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const status = err.status;
        if (status === 401 || status === 403) {
          signOutUser()
            .then(() => {
              toast.success("Forbidden Access. Logged Out");
              navigate("/login");
            })
            .catch((err) => toast.error(err.message));
        }
      }
    );
    return () => {
      axiosSecureInstance.interceptors.response.eject(responseInterceptor);
      axiosSecureInstance.interceptors.request.eject(requestInterceptors);
    };
  }, [user, navigate, signOutUser]);
  return axiosSecureInstance;
};

export default useAxiosSecure;
