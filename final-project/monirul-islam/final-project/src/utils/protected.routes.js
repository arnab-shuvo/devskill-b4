import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

export const CustomerRoutes = ({ children, cond, dest, ...rest }) => {
    const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);

    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (cond === "no-auth") {
                    return isLoggedIn ? (
                        <Navigate
                            to={{
                                pathname: "/home",
                                state: { from: location.pathname },
                            }}
                        />
                    ) : (
                        children
                    );
                }
                if (cond === "auth") {
                    return isLoggedIn ? (
                        children
                    ) : (
                        <Navigate
                            to={{
                                pathname: dest,
                                state: { from: location.pathname },
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export const AdminRoutes = ({ children, cond, dest, ...rest }) => {
    const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);
    const isAdmin = useSelector(
        (state) => state.loginReducer.userInfo.role === "admin",
    );

    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (cond === "no-auth") {
                    return isLoggedIn && isAdmin ? (
                        <Navigate
                            to={{
                                pathname: "/home",
                                state: { from: location.pathname },
                            }}
                        />
                    ) : (
                        children
                    );
                }
                if (cond === "auth") {
                    return isLoggedIn && isAdmin ? (
                        children
                    ) : (
                        <Navigate
                            to={{
                                pathname: dest,
                                state: { from: location.pathname },
                            }}
                        />
                    );
                }
            }}
        />
    );
};
