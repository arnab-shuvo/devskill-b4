import { configureStore } from "@reduxjs/toolkit";
import {productsSlice} from './pages/product.slice.js';

// export const rootReducer = combineReducers({
//     productReducer :productReducer,
// });
const store= configureStore({
    reducer:{
    product: productsSlice.reducer,
   },
});

export default store;