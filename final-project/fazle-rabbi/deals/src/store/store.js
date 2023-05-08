import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer/productsReducer";
import loaderReducer from "./reducer/loaderReducer";
import userReducer from "./reducer/userReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const userPersistConfig = {
  key: "user",
  storage,
  stateReconciler: autoMergeLevel2,
};

const productsPersistConfig = {
  key: "products",
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistUserReducer = persistReducer(userPersistConfig, userReducer);
const persistProductReducer = persistReducer(
  productsPersistConfig,
  productsReducer
);

export const store = configureStore({
  reducer: {
    products: persistProductReducer,
    loader: loaderReducer,
    user: persistUserReducer,
  },
});

export const persistor = persistStore(store);
