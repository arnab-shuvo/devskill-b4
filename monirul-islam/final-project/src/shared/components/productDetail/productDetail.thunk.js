import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { PRODUCTS_URL } from "utils/constants";

export const getSingleProduct = createAsyncThunk(
    "product/getSingleProduct",
    async (id) => {
        const res = await axios.get(`${PRODUCTS_URL}/${id}`);
        return res.data;
    },
);
