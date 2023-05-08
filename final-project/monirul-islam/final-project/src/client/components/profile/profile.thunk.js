import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { BASE_URL, ORDER_URL } from "utils/constants";

export const getOrders = createAsyncThunk("profile/getOrders", async () => {
    const token = sessionStorage.getItem("token");

    const res = await axios.get(`${ORDER_URL}/my-order`, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${token ? token : ""}`,
        },
    });

    return res.data;
});

export const createOrder = createAsyncThunk("profile/createOrder", async () => {
    const token = sessionStorage.getItem("token");

    const res = await axios.get(`${ORDER_URL}/checkout`, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${token ? token : ""}`,
        },
    });

    return res.data;
});

export const getUserInfo = createAsyncThunk("profile/getUserInfo", async () => {
    const token = sessionStorage.getItem("token");
    console.log(BASE_URL);
    const res = await axios.get(`${BASE_URL}/my-detail`, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${token ? token : ""}`,
        },
    });

    return res.data;
});

export const editUserInfo = createAsyncThunk(
    "profile/editUserInfo",
    async (values) => {
        const token = sessionStorage.getItem("token");

        const data = {
            email: values.email,
            username: values.username,
            role: values.role,
            password: values.password,
            firstname: values.firstname,
            lastname: values.lastname,
            address: {
                city: values.city,
                street: values.street,
                number: values.number,
                zipcode: values.zipcode,
                geolocation: {
                    lat: values.lat,
                    long: values.long,
                },
            },
            phone: values.phone,
        };

        const res = await axios.patch(`${BASE_URL}/my-detail`, data, {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${token ? token : ""}`,
            },
        });

        return res.data;
    },
);
