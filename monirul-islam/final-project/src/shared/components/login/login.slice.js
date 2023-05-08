import { createSlice } from "@reduxjs/toolkit";

import { loginHandler } from "./login.thunk";

// is it okay to set initialState like this?
export const productInitialState = {
    error: null,
    userInfo: {
        user: sessionStorage.getItem("user"),
        role: sessionStorage.getItem("role"),
        token: sessionStorage.getItem("token"),
        expire_at: sessionStorage.getItem("expire_at"),
    },
    isLoggedIn:
        sessionStorage.getItem("token") &&
        Date.now() <= sessionStorage.getItem("expire_at")
            ? true
            : false,
};

export const loginSlice = createSlice({
    name: "login",
    initialState: productInitialState,
    reducers: {
        logout: (state) => {
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("role");
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("expire_at");
            state.error = null;
            state.userInfo = {};
            state.isLoggedIn = false;
        },
    },
    extraReducers: {
        [loginHandler.fulfilled]: (state, action) => {
            state.userInfo = action.payload;
            if (!state.isLoggedIn) state.isLoggedIn = true;
            if (state.error) state.error = null;
        },
        [loginHandler.rejected]: (state, action) => {
            if (state.error === null) state.error = action.payload;
        },
    },
});

export const { logout } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;

// common selectors
export const loginSelector = (state) => state.loginReducer.isLoggedIn;
export const errorSelector = (state) => state.loginReducer.error;
