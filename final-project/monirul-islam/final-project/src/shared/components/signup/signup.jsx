import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LOGIN } from "utils/constants";
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { signupHandler } from "./signup.thunk";
import { errorSelector } from "./signup.slice";
import SignupView from "./signup.view";

export default function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector(errorSelector);

    const submitHandler = async (values, submitProps) => {
        const { type } = await dispatch(signupHandler(values));
        if (type !== "signup/signupHandler/rejected") {
            navigate(LOGIN);
        } else {
            submitProps.setSubmitting(false);
        }
    };

    return (<>
        <Navbar/>
        <SignupView submitHandler={submitHandler} errorMessage={error?.name} />
        <Footer/>
        </>
    );
}
