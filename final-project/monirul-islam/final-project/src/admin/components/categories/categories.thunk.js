import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { CATEGORIES_URL } from "utils/constants";
import { imageToBase64 } from "utils/helper";

export const getAllCategories = createAsyncThunk(
    "categories/getAllCategories",
    async () => {
        const token = sessionStorage.getItem("token");

        const res = await axios.get(CATEGORIES_URL, {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${token ? token : ""}`,
            },
        });
        return res.data;
    },
);

export const getSingleCategory = createAsyncThunk(
    "categories/getSingleCategory",
    async (id) => {
        const token = sessionStorage.getItem("token");

        const res = await axios.get(`${CATEGORIES_URL}/${id}`, {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${token ? token : ""}`,
            },
        });
        return res.data;
    },
);

export const createUpdateCategory = createAsyncThunk(
    "categories/createUpdateCategory",
    async ({ values, id, action }) => {
        const token = sessionStorage.getItem("token");

        const image = await imageToBase64(values.image);

        const data = {
            name: values.name,
            description: values.description,
            image: image,
        };

        let res;
        if (action === "update") {
            res = await axios.patch(`${CATEGORIES_URL}/${id}`, data, {
                headers: {
                    Accept: "application/json",
                    Authorization: `bearer ${token}`,
                },
            });
        } else {
            res = await axios.post(CATEGORIES_URL, data, {
                headers: {
                    Accept: "application/json",
                    Authorization: `bearer ${token}`,
                },
            });
        }
        console.log(res.data);
        return res.date;
    },
);

export const deleteCategory = createAsyncThunk(
    "categories/deleteCategory",
    async (id) => {
        const token = sessionStorage.getItem("token");

        await axios.delete(`${CATEGORIES_URL}/${id}`, {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${token ? token : ""}`,
            },
        });
        return id;
    },
);
