import { createSlice } from "@reduxjs/toolkit";

import {
    getAllCategories,
    getSingleCategory,
    createUpdateCategory,
    deleteCategory,
} from "./categories.thunk";

export const categoryInitialState = {
    error: null,
    categories: [],
    category: {
        name: "",
        description: "",
        image: "",
    },
    isLoading: false,
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: categoryInitialState,
    reducers: {
        resetForm: (state) => {
            state.category = { ...categoryInitialState.category };
        },
    },
    extraReducers: {
        [getAllCategories.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [getAllCategories.fulfilled]: (state, action) => {
            state.categories = action.payload;
            if (state.isLoading) state.isLoading = false;
        },
        [getAllCategories.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
        [getSingleCategory.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [getSingleCategory.fulfilled]: (state, action) => {
            state.category = action.payload;
            if (state.isLoading) state.isLoading = false;
        },
        [getSingleCategory.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
        [createUpdateCategory.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [createUpdateCategory.fulfilled]: (state, action) => {
            if (state.isLoading) state.isLoading = false;
        },
        [createUpdateCategory.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
        [deleteCategory.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [deleteCategory.fulfilled]: (state, action) => {
            state.categories = state.categories.filter(
                (category) => category._id !== action.payload,
            );
            if (state.isLoading) state.isLoading = false;
        },
        [deleteCategory.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
    },
});

export const { resetForm } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;

// common selectors
export const loaderSelector = (state) => state.categoriesReducer.isLoading;
export const categoriesSelector = (state) => state.categoriesReducer.categories;
export const categorySelector = (state) => state.categoriesReducer.category;
export const errorSelector = (state) => state.categoriesReducer.error;
