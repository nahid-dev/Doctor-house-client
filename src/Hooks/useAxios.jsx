import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Base Url
const axiosSecure = axios.create({
  baseURL: "https://server-nahid-dev.vercel.app",
});

const useAxios = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate("/authentication/login");
        }
      }
    );
  }, [logOut, navigate]);

  return [axiosSecure];
};

export default useAxios;
