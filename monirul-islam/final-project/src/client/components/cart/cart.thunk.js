import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { CART_URL } from "utils/constants";

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
    const token = sessionStorage.getItem("token");

    const res = await axios.get(CART_URL, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${token ? token : ""}`,
        },
    });
    return res.data;
});

export const updateCart = createAsyncThunk(
    "cart/updateCart",
    async ({ id, action }, { getState }) => {
        const token = sessionStorage.getItem("token");
        const state = getState();

        // find item with id in store
        const item = state.cartReducer.cartItems?.find(
            (item) => item.productId._id === id,
        );

        // calc quantity
        let quantity = null;
        if (action === "add") {
            quantity = !item ? 1 : item.quantity + 1;
        }
        if (action === "remove") {
            if (item.quantity <= 1) quantity = 0;
            else quantity = item.quantity - 1;
        }

        // construct req object
        const data = {
            product: {
                id: id,
                quantity: quantity,
            },
        };
        const res = await axios.post(CART_URL, data, {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${token}`,
            },
        });

        return res.data.products;
    },
);
