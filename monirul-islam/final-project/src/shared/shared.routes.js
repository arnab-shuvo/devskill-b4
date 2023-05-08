import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import { CustomerRoutes } from "utils/protected.routes";
import { HOME, LOGIN, ABOUT, PRODUCT, LOGOUT, SIGNUP } from "utils/constants";
import Home from "./components/home/home";
import About from "./components/about/about";
import Product from "./components/product/product";
import ProductDetail from "./components/productDetail/productDetail";
import Login from "./components/login/login";
import Logout from "./components/logout/logout";
import Signup from "./components/signup/signup";

export default function SharedRoutes({ isLoggedIn }) {
   
    
    return (
        <Routes>
            <Route exact path={HOME} 
            element={<Home isLoggedIn={isLoggedIn} />}
            />
                
            <Route exact path={ABOUT} element={<About />}/>
            
            <Route exact path={PRODUCT} element={ <Product />}/>
               
            
            <Route exact path={`${PRODUCT}/:id`} element={ <ProductDetail />}/>
          <Route  
          element={ <>
            <CustomerRoutes exact path={LOGIN} cond="no-auth" dest={HOME}>
                <Login />
            </CustomerRoutes>
           
            <CustomerRoutes exact path={SIGNUP} cond="no-auth" dest={HOME}>
                <Signup />
            </CustomerRoutes>
            </>}
            />
            <Route
            element={<>
            <Navigate exact from="/" to={HOME} />
            <Navigate exact to="/404" from="*" /></>}
            />
        </Routes>
    );
}
