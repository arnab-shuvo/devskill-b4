import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./reducer/exampleReducer";
import productsReducer from "./reducer/productsReducer";

export default configureStore({
  reducer: {
    exampleReducer,
    productsReducer,
  },
});
