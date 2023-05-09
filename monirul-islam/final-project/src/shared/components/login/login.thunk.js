import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { LOGIN_URL } from "utils/constants";

export const loginHandler = createAsyncThunk(
    "login/loginHandler",
    async (values) => {
        const res = await axios.post(LOGIN_URL, values);
        const { userInfo } = res.data;
         console.log(res.data);
        sessionStorage.setItem("user", userInfo.user);
        sessionStorage.setItem("role", userInfo.role);
        sessionStorage.setItem("token", userInfo.token);
        sessionStorage.setItem("expire_at", userInfo.expire_at);
        return res.data;
    },
);
