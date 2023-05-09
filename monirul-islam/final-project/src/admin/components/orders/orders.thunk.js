import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { ORDER_URL } from "utils/constants";

export const getAllOrders = createAsyncThunk(
    "orders/getAllOrders",
    async () => {
        const token = sessionStorage.getItem("token");

        const res = await axios.get(ORDER_URL, {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${token ? token : ""}`,
            },
        });
        return res.data;
    },
);

export const updateOrder = createAsyncThunk(
    "orders/updateOrder",
    async ({ id, status }) => {
        const token = sessionStorage.getItem("token");

        const res = await axios.patch(
            `${ORDER_URL}/${id}`,
            { status: status },
            {
                headers: {
                    Accept: "application/json",
                    Authorization: `bearer ${token ? token : ""}`,
                },
            },
        );
        return res.data;
    },
);
