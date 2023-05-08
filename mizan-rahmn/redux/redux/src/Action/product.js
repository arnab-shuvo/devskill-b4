/** @format */

import axios from "axios";
import { getProductList } from "../Reducer/productSlice";

const getAllProduct = () => {
  return async function (dispatch) {
    const result = await axios.get(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=30"
    );
    dispatch(getProductList(result.data));
  };
};

export default getAllProduct;