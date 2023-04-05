
import { createSlice } from "@reduxjs/toolkit";
import getProducts from './product.thunk';

const productInitialState = {
    product: [],
    isLoading: true,
    error: null,
};

export const productsSlice = createSlice({

    name: "data",
    initialState: {
        data: [],
    isLoading: true,
    error: null,
    },
    reducers: {
      
    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.product = action.payload;
            if (state.isLoading) state.isLoading = false;
        },
        [getProducts.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
    },


});

export const reset=productsSlice.actions;
//export const productReducer = productsSlice.reducer;

//export default productsSlice;