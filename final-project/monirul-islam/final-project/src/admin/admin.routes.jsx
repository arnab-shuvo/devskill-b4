import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import {
    ADMIN_HOME,
    ADMIN_USERS,
    ADMIN_CATEGORIES,
    ADMIN_PRODUCTS,
    ADMIN_ORDERS,
    ADMIN_PROFILE,
} from "utils/constants";

import Users from "./components/users/users";
import Categories from "./components/categories/categories";
import Products from "./components/products/products";
import Orders from "./components/orders/orders";
import AdminProfile from "./components/profile/profile";

export default function AdminRoutes() {
    return (
        <Routes>
            <Route path={ADMIN_USERS} element={<Users />} />

            <Route path={ADMIN_PROFILE} element={<AdminProfile />} />
              
            <Route path={ADMIN_PRODUCTS} element={<Products />} />
                
            <Route path={ADMIN_CATEGORIES} element={<Categories />} />
           
            <Route path={ADMIN_ORDERS} element={ <Orders />} />
               
           <Route
           element={<>
            <Navigate exact from={ADMIN_HOME} to={ADMIN_USERS} />
            <Navigate exact from="*" to="/404" />
            </>} />
        </Routes>
    );
}
