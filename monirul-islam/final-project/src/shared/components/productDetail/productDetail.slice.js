import { createSlice } from "@reduxjs/toolkit";

import { getSingleProduct } from "./productDetail.thunk";

export const productDetailInitialState = {
    product: {
        title: "",
        price: "",
        description: "",
        image: "",
        stock: "",
        category: "",
    },
    isLoading: true,
    error: null,
};

export const productDetailSlice = createSlice({
    name: "product",
    initialState: productDetailInitialState,
    reducers: {
        reset: (state) => {
            state.product = productDetailInitialState.product;
            state.isLoading = productDetailInitialState.isLoading;
            state.error = productDetailInitialState.error;
        },
    },
    extraReducers: {
        [getSingleProduct.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [getSingleProduct.fulfilled]: (state, action) => {
            state.product = action.payload;
            if (state.isLoading) state.isLoading = false;
        },
        [getSingleProduct.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
    },
});

export const { reset } = productDetailSlice.actions;
export const productDetailReducer = productDetailSlice.reducer;

// common selectors
export const loaderSelector = (state) => state.productDetailReducer.isLoading;
export const productSelector = (state) => state.productDetailReducer.product;
export const errorSelector = (state) => state.productDetailReducer.error;
