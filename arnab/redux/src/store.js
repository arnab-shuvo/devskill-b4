/** @format */

import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./Reducer/counterSlice";
import productReducer from "./Reducer/productSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
  },
  devTools: true,
});
