import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer/productsReducer";
import loaderReducer from "./reducer/loaderReducer";
import userReducer from "./reducer/userReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    products: productsReducer,
    loader: loaderReducer,
    user: persistUserReducer,
  },
});

export const persistor = persistStore(store);
