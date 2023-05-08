import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { APP, CART, HOME, PROFILE } from "utils/constants";

import Cart from "./components/cart/cart";
import Profile from "./components/profile/profile";

export default function ClientRoutes() {

    return (
        <>
        
        <Routes>
            <Route path={CART} element={ <Cart />}/>
               
           
            <Route path={PROFILE} element={<Profile />} />
             <Route 
             element={<>
            <Navigate exact from={APP} to={HOME} />
            <Navigate exact from="*" to="/404" />
            </>
             }/>
        </Routes>
        </>
    );
}
