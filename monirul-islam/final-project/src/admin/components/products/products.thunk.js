import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { PRODUCTS_URL } from "utils/constants";
import { imageToBase64 } from "utils/helper";

export const createUpdateProduct = createAsyncThunk(
    "products/createUpdateProduct",
    async ({ values, id, action }) => {
        const token = sessionStorage.getItem("token");

        const image = await imageToBase64(values.image);

        let res;
        if (action === "update") {
            const data = {
                title: values.title,
                price: values.price,
                description: values.description,
                image: image,
                stock: values.stock,
                category_id: values.category,
            };
            res = await axios.patch(`${PRODUCTS_URL}/${id}`, data, {
                headers: {
                    Accept: "application/json",
                    Authorization: `bearer ${token}`,
                },
            });
        } else {
            const data = {
                title: values.title,
                price: values.price,
                description: values.description,
                image: image,
                stock: values.stock,
                category: {
                    _id: values.category,
                },
            };
            res = await axios.post(PRODUCTS_URL, data, {
                headers: {
                    Accept: "application/json",
                    Authorization: `bearer ${token}`,
                },
            });
        }

        return res.date;
    },
);

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (id) => {
        const token = sessionStorage.getItem("token");

        await axios.delete(`${PRODUCTS_URL}/${id}`, {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${token ? token : ""}`,
            },
        });
        return id;
    },
);
