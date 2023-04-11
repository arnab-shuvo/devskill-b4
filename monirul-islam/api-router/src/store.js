import { configureStore } from "@reduxjs/toolkit";
import {productsSlice} from './pages/product.slice.js';


const store= configureStore({
    reducer:{
    product: productsSlice.reducer,
   },
});

export default store;