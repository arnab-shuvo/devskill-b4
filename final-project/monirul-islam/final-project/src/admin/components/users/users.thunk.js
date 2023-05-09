import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { USERS_URL } from "utils/constants";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
    const token = sessionStorage.getItem("token");

    const res = await axios.get(USERS_URL, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${token ? token : ""}`,
        },
    });
    console.log(res.data);
    return res.data;
    
});

export const getSingleUser = createAsyncThunk(
    "users/getSingleUser",
    async (id) => {
        const token = sessionStorage.getItem("token");

        const res = await axios.get(`${USERS_URL}/${id}`, {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${token ? token : ""}`,
            },
        });
        console.log(res.data);
        return res.data;
    },
);

export const createUpdateUser = createAsyncThunk(
    "users/createUpdateUser",
    async ({ values, id, action }) => {
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

        let res;
        if (action === "update") {
            res = await axios.patch(`${USERS_URL}/${id}`, data, {
                headers: {
                    Accept: "application/json",
                    Authorization: `bearer ${token}`,
                },
            });
        } else {
            res = await axios.post(USERS_URL, data, {
                headers: {
                    Accept: "application/json",
                    Authorization: `bearer ${token}`,
                },
            });
        }
        console.log(res.data);
        return res.data;
    },
);

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
    const token = sessionStorage.getItem("token");

    await axios.delete(`${USERS_URL}/${id}`, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${token ? token : ""}`,
        },
    });
    return id;
});
