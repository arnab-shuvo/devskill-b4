import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {productInitialState}  from './login.slice';
import { loginHandler } from "./login.thunk";
import { errorSelector } from "./login.slice";
import LoginView from "./login.view";
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { Toast } from "react-bootstrap";
import { toast } from "react-toastify";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector(errorSelector);
    
    const submitHandler = async (values, submitProps) => {
        const { type } = await dispatch(loginHandler(values));
        console.log(type);
        if (type !== "login/loginHandler/rejected") {
         
            if(productInitialState.userInfo.role==="user"){
                navigate('/product');
            }else if(productInitialState.userInfo.role==="admin"){
                navigate('/admin/profile');
            }
            
        } else {
            submitProps.setSubmitting(false);
        }
    };

    return (
        <>
         <Navbar />
        <LoginView submitHandler={submitHandler} errorMessage={error?.name} />
        <Footer/>
        </>
    );
}
