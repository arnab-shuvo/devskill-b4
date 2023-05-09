import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { logout } from "../login/login.slice";
import { LOGIN } from "utils/constants";

export default function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
        navigate('/login');
    }, [dispatch, navigate]);

    return <></>;
}
