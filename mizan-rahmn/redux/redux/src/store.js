/** @format */

import productReducer from "./Reducer/productSlice";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    products: productReducer,
  },
});