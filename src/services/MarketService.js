import axios from "axios";
import { toastError } from "../utils/Toast";

const UYGUNALDIM_MARKET_URL = "http://localhost:8080/api/market";

export const getMarkets = async (toast) => {
    return axios
        .get(UYGUNALDIM_MARKET_URL)
        .catch((error) => {
        if (!error.response) {
            toastError("Error: Network Error", toast);
        } else if (error.response.status !== 200) {
            toastError(error.response.data, toast);
        }
    });
};