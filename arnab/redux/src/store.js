/** @format */

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Reducer/counterSlice";
import productReducer from "./Reducer/productSlice";
import userReducer from "./Reducer/userSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user-info",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    user: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
