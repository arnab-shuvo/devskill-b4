
import { createSlice } from "@reduxjs/toolkit";

// const productInitialState={
//     productList: [],
//     isLoading: true,
//     error: null,
// }
export const productsSlice = createSlice({
    name: "product-slice",
    initialState: {
        productList:[],
        isLoading: true,
        error: null,
    },
    reducers: {
        getProductList: (state,action)=>{
            state.productList=action.payload;
        },
    },
   
});
export default productsSlice.reducer;
export  const {getProductList}=productsSlice.actions;
