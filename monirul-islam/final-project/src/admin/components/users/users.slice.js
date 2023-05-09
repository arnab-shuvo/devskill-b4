import { createSlice } from "@reduxjs/toolkit";

import {
    getAllUsers,
    getSingleUser,
    createUpdateUser,
    deleteUser,
} from "./users.thunk";

export const userInitialState = {
    error: null,
    users: [],
    user: {
        role: "",
        email: "",
        password: "",
        repassword: "",
        username: "",
        firstname: "",
        lastname: "",
        city: "",
        street: "",
        number: "",
        zipcode: "",
        lat: "",
        long: "",
        phone: "",
    },
    isLoading: false,
};

export const usersSlice = createSlice({
    name: "users",
    initialState: userInitialState,
    reducers: {
        resetForm: (state) => {
            state.user = { ...userInitialState.user };
        },
    },
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            if (state.isLoading) state.isLoading = false;
        },
        [getAllUsers.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
        [getSingleUser.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [getSingleUser.fulfilled]: (state, action) => {
            const { address, password, ...properties } = { ...action.payload };
            const { geolocation, ...partialAddress } = { ...address };
            state.user = {
                ...properties,
                ...partialAddress,
                ...geolocation,
                password: "",
                repassword: "",
            };

            if (state.isLoading) state.isLoading = false;
        },
        [getSingleUser.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
        [createUpdateUser.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [createUpdateUser.fulfilled]: (state, action) => {
            if (state.isLoading) state.isLoading = false;
        },
        [createUpdateUser.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
        [deleteUser.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.users = state.users.filter(
                (user) => user._id !== action.payload,
            );
            if (state.isLoading) state.isLoading = false;
        },
        [deleteUser.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
    },
});

export const { resetForm } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;

// common selectors
export const loaderSelector = (state) => state.usersReducer.isLoading;
export const usersSelector = (state) => state.usersReducer.users;
export const userSelector = (state) => state.usersReducer.user;
export const errorSelector = (state) => state.usersReducer.error;
