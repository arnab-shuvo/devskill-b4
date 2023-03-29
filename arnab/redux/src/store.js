/** @format */

import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./Reducer/counterSlice";
import productReducer from "./Reducer/productSlice";
import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
  },
});
