import { createSlice } from "@reduxjs/toolkit";
import { signupHandler } from "./signup.thunk";

export const signupSlice = createSlice({
    name: "signup",
    initialState: {
        error: null,
    },
    reducers: {},
    extraReducers: {
        [signupHandler.fulfilled]: (state) => {
            if (state.error) state.error = null;
        },
        [signupHandler.rejected]: (state, action) => {
            if (state.error === null) state.error = action.payload;
        },
    },
});

export const signupReducer = signupSlice.reducer;

// common selectors
export const errorSelector = (state) => state.signupReducer.error;
