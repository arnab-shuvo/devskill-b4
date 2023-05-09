import React from "react";
import { Route, Routes } from "react-router-dom";

import Shared from "./shared/shared";
import Admin from "./admin/admin";
import Client from "./client/client";
import Login from './shared/components/login/login';
import Logout from './shared/components/logout/logout';
import Home from './shared/components/home/home';
import Signup from './shared/components/signup/signup.jsx';
import Product from './shared/components/product/product';
import About from './shared/components/about/about';
import ProductDetail from './shared/components/productDetail/productDetail';
import Profile from './client/components/profile/profile.view';
//import Profile from './shared/components/profile/profile';
import Cart from './client/components/cart/cart';
import Users from './admin/components/users/users.form';
import AdminProfile from './admin/components/profile/profile.view';
import Products from './admin/components/products/products.form';
import Categories from './admin/components/categories/categories.form';
import Orders from './admin/components/orders/orders';
import { LOGIN } from "utils/constants";

import { CustomerRoutes, AdminRoutes } from "utils/protected.routes";

import NotFound from "./shared/components/404/404";

export default function Router() {
    return (
        <Routes>
            {/* <Route exact path="/404" element={<NotFound />}/> */}
            <Route path="/*" element={<NotFound/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/productDetail/:id" element={<ProductDetail/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/admin/users" element={<Users/>}/>
            <Route path="/admin/profile" element={<AdminProfile/>}/>
            <Route path="/admin/create-product" element={<Products/>}/>
            <Route path="/admin/categories" element={<Categories/>}/>
            <Route path="/admin/orders" element={<Orders/>}/>
            <Route path="/app" cond="auth" dest={LOGIN} element={<Client />}/>
            <Route
            element={<>
            <CustomerRoutes path="/app" cond="auth" dest={LOGIN}>
                <Client />
            </CustomerRoutes>
            </>}/>
            
            <Route
             element={<>
            <AdminRoutes path="/admin" cond="auth" dest={LOGIN}>
                <Admin />
            </AdminRoutes>
            </>}/>
            <Route path="/" element={<Shared />}/>
                
           
        </Routes>
  
    );
}
