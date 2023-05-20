import axios from "axios";
import { toastError } from "../utils/Toast";

const UYGUNALDIM_AUTH_URL = "http://localhost:8080/api/auth";

export const login = async (userRequest, toast) => {
  return axios
    .post(UYGUNALDIM_AUTH_URL + "/login", userRequest)
    .catch((error) => {
      if (!error.response) {
        toastError("Error: Network Error", toast);
      } else if (error.response.status !== 200) {
        toastError(error.response.data, toast);
      }
    });
};

export const register = async (userRequest, toast) => {
  return axios
    .post(UYGUNALDIM_AUTH_URL + "/register", userRequest, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
    .catch((error) => {
      if (!error.response) {
        toastError("Error: Network Error", toast);
      } else if (error.response.status !== 200) {
        toastError(error.response.data, toast);
      }
    });
};

export const refreshToken = async (userRequest, toast) => {
  return axios
    .post(UYGUNALDIM_AUTH_URL + "/refresh", userRequest)
    .catch((error) => {
      if (!error.response) {
        toastError("Error: Network Error", toast);
      } else if (error.response.status !== 200) {
        toastError(error.response.data, toast);
      }
    });
};

export const validateToken = async (jwt, toast) => {
  return await axios
    .post(UYGUNALDIM_AUTH_URL + "/validate", null, {
      params: {
        token: jwt,
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
    .catch((error) => {
      if (!error.response) {
        toastError("Error: Network Error", toast);
      } else if (error.response.status !== 200) {
        toastError(error.response.data, toast);
      }
    });
};
