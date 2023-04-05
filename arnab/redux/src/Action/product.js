/** @format */

import axios from "axios";
import { listOfProduct } from "../Reducer/productSlice";

export const getAllProduct = () => {
  return async (dispatch, store) => {
    const productList = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    dispatch(listOfProduct(productList.data));
  };
};
