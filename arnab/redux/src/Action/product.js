/** @format */

import axios from "axios";
import { listOfProduct } from "../Reducer/productSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProduct = () => {
  return async (dispatch, state) => {
    const productList = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    dispatch(listOfProduct(productList.data));
  };
};
