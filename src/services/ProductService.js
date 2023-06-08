import axios from "axios";
import { toastError } from "../utils/Toast";

const UYGUNALDIM_PRODUCT_URL = "http://localhost:8080/api/product";

export const getProducts = async (
  currentPage,
  pageSize,
  searchCategory,
  searchProduct,
  minPrice,
  maxPrice,
  toast
) => {
  if (!minPrice) minPrice = 0;

  if (!maxPrice) maxPrice = 9999;

  if (searchProduct !== "") {
    console.log(searchProduct);
    return axios
      .get(
        UYGUNALDIM_PRODUCT_URL +
          "/name?offset=" +
          currentPage +
          "&pageSize=" +
          pageSize +
          "&name=" +
          searchProduct +
          "&minPrice=" +
          minPrice +
          "&maxPrice=" +
          maxPrice
      )
      .catch((error) => {
        if (!error.response) {
          toastError("Error: Network Error", toast);
        } else if (error.response.status !== 200) {
          toastError(error.response.data, toast);
        }
      });
  } else if (searchCategory) {
    return axios
      .get(
        UYGUNALDIM_PRODUCT_URL +
          "/category?offset=" +
          currentPage +
          "&pageSize=" +
          pageSize +
          "&category=" +
          searchCategory +
          "&minPrice=" +
          minPrice +
          "&maxPrice=" +
          maxPrice
      )
      .catch((error) => {
        if (!error.response) {
          toastError("Error: Network Error", toast);
        } else if (error.response.status !== 200) {
          toastError(error.response.data, toast);
        }
      });
  } else {
    return axios
      .get(
        UYGUNALDIM_PRODUCT_URL +
          "?offset=" +
          currentPage +
          "&pageSize=" +
          pageSize +
          "&minPrice=" +
          minPrice +
          "&maxPrice=" +
          maxPrice
      )
      .catch((error) => {
        if (!error.response) {
          toastError("Error: Network Error", toast);
        } else if (error.response.status !== 200) {
          toastError(error.response.data, toast);
        }
      });
  }
};

export const getCategories = async (toast) => {
  return axios.get(UYGUNALDIM_PRODUCT_URL + "/category/all").catch((error) => {
    if (!error.response) {
      toastError("Error: Network Error", toast);
    } else if (error.response.status !== 200) {
      toastError(error.response.data, toast);
    }
  });
};
