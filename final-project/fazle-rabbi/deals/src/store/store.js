import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer/productsReducer";
import loaderReducer from "./reducer/loaderReducer";
import loginReducer from "./reducer/loginReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

// const persistProductReducers = persistReducer(persistConfig, productsReducer);
// const persistLoaderReducers = persistReducer(persistConfig, loaderReducer);
const persistLoginReducer = persistReducer(persistConfig, loginReducer);

export const store = configureStore({
  reducer: {
    products: productsReducer,
    loader: loaderReducer,
    login: persistLoginReducer,
  },
});

// export default configureStore({
//   reducer: {
//     products: productsReducer,
//     loader: loaderReducer,
//     login: loginReducer,
//   },
// });

export const persistor = persistStore(store);
