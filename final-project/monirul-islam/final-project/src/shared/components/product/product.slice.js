import { createSlice } from "@reduxjs/toolkit";

import { getSingleProduct } from "./product.thunk";
import { deleteProduct } from "admin/components/products/products.thunk";

export const productInitialState = {
    products: [],
    isLoading: true,
    error: null,
};

export const productSlice = createSlice({
    name: "product",
    initialState: productInitialState,
    reducers: {
        reset: (state) => {
            state.products = productInitialState.products;
            state.isLoading = productInitialState.isLoading;
            state.error = productInitialState.error;
        },
    },
    extraReducers: {
        [getSingleProduct.pending]: (state) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [getSingleProduct.fulfilled]: (state, action) => {
            state.products = action.payload;
            if (state.isLoading) state.isLoading = false;
        },
        [getSingleProduct.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
        [deleteProduct.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [deleteProduct.fulfilled]: (state, action) => {
            state.products = state.products.filter(
                (product) => product._id !== action.payload,
            );
            if (state.isLoading) state.isLoading = false;
        },
        [deleteProduct.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
    },
});

export const { reset } = productSlice.actions;
export const productReducer = productSlice.reducer;

// common selectors
export const loaderSelector = (state) => state.productReducer.isLoading;
export const productsSelector = (state) => state.productReducer.products;
export const errorSelector = (state) => state.productReducer.error;
