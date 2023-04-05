import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./reducer/exampleReducer";
import productsReducer from "./reducer/productsReducer";
import loaderReducer from "./reducer/loaderReducer";

export default configureStore({
  reducer: {
    example: exampleReducer,
    products: productsReducer,
    loader: loaderReducer,
  },
});
