import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { PRODUCTS_URL } from "utils/constants";

export const getSingleProduct = createAsyncThunk("product/getProducts", async () => {
    const res = await axios.get(PRODUCTS_URL);
    return res.data;
});
