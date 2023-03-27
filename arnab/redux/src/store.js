/** @format */

import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./Reducer/counterSlice";
import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: applyMiddleware(thunk),
});
