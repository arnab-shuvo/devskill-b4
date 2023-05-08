import { createSlice } from "@reduxjs/toolkit";
import {
    getOrders,
    createOrder,
    getUserInfo,
    editUserInfo,
} from "./profile.thunk";

export const orderInitialState = {
    error: null,
    user: {},
    orderItems: [],
    isLoading: false,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState: orderInitialState,
    reducers: {
        resetForm: (state) => {
            state.user = {};
            state.orderItems = [];
            state.isLoading = false;
            state.error = null;
        },
    },
    extraReducers: {
        [getOrders.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [getOrders.fulfilled]: (state, action) => {
            state.orderItems = action.payload || [];
            if (state.isLoading) state.isLoading = false;
        },
        [getOrders.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
        [createOrder.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [createOrder.fulfilled]: (state, action) => {
            if (state.isLoading) state.isLoading = false;
        },
        [createOrder.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
        [getUserInfo.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [getUserInfo.fulfilled]: (state, action) => {
            state.user = {
                email: action.payload.email,
                username: action.payload.username,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                role: action.payload.role,
                phone: action.payload.phone,
                city: action.payload.address.city,
                street: action.payload.address.street,
                number: action.payload.address.number,
                zipcode: action.payload.address.zipcode,
                lat: action.payload.address.geolocation.lat,
                long: action.payload.address.geolocation.long,
            };
            if (state.isLoading) state.isLoading = false;
        },
        [getUserInfo.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
        [editUserInfo.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [editUserInfo.fulfilled]: (state, action) => {
            if (state.isLoading) state.isLoading = false;
        },
        [editUserInfo.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
    },
});

export const { resetForm } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;

// common selectors
export const loaderSelector = (state) => state.profileReducer.isLoading;
export const userInfoSelector = (state) => state.profileReducer.user;
export const ordersSelector = (state) => state.profileReducer.orderItems;
export const errorSelector = (state) => state.profileReducer.error;
