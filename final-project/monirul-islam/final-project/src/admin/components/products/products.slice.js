import { createSlice } from "@reduxjs/toolkit";

import { createUpdateProduct } from "./products.thunk";

export const productInitialState = {
    error: null,
    isLoading: false,
};

export const productsSlice = createSlice({
    name: "products",
    initialState: productInitialState,
    reducers: {},
    extraReducers: {
        [createUpdateProduct.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [createUpdateProduct.fulfilled]: (state, action) => {
            if (state.isLoading) state.isLoading = false;
        },
        [createUpdateProduct.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
    },
});

export const productsReducer = productsSlice.reducer;

// common selectors
export const loaderSelector = (state) => state.productsReducer.isLoading;
export const errorSelector = (state) => state.productsReducer.error;
