import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { SIGNUP_URL } from "utils/constants";

export const signupHandler = createAsyncThunk(
    "signup/signupHandler",
    async (values) => {
        const data = {
            email: values.email,
            username: values.username,
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
        const res = await axios.post(SIGNUP_URL, data);
        return res.data;
    },
);
