import { createSlice } from "@reduxjs/toolkit";

import { getAllOrders, updateOrder } from "./orders.thunk";

export const orderInitialState = {
    error: null,
    isLoading: true,
    orders: [],
};

export const orderSlice = createSlice({
    name: "orders",
    initialState: orderInitialState,
    reducers: {},
    extraReducers: {
        [getAllOrders.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [getAllOrders.fulfilled]: (state, action) => {
            state.orders = action.payload;
            if (state.isLoading) state.isLoading = false;
        },
        [getAllOrders.rejected]: (state, action) => {
            if (state.error === null) state.error = action.payload;
            if (state.isLoading) state.isLoading = false;
        },
        [updateOrder.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [updateOrder.fulfilled]: (state, action) => {
            const { _id, status } = action.payload;
            state.orders = state.orders.map((order) => {
                if (order._id === _id) order.status = status;
                return order;
            });

            if (state.isLoading) state.isLoading = false;
        },
        [updateOrder.rejected]: (state, action) => {
            if (state.error === null) state.error = action.payload;
            if (state.isLoading) state.isLoading = false;
        },
    },
});

export const ordersReducer = orderSlice.reducer;

// common selectors
export const loaderSelector = (state) => state.ordersReducer.isLoading;
export const ordersSelector = (state) => state.ordersReducer.orders;
export const errorSelector = (state) => state.ordersReducer.error;
