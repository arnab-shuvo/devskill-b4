import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { reset, loaderSelector, productsSelector } from "./product.slice";
import { getSingleProduct } from "./product.thunk";
import ProductView from "./product.view";

import Loader from "../loader/loader";
import { loginSelector } from "../login/login.slice";
import { updateCart } from "client/components/cart/cart.thunk";
import { getAllCategories } from "admin/components/categories/categories.thunk";
import { categoriesSelector } from "admin/components/categories/categories.slice";
import { LOGIN } from "utils/constants";
import { PRODUCTS_URL } from "utils/constants";
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Swal from "sweetalert2";

export default function Product() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const loader = useSelector(loaderSelector);
    const cartLoader = useSelector((state) => state.cartReducer.isLoading);
    const products = useSelector(productsSelector);
    const isLoggedIn = useSelector(loginSelector);
    const categories = useSelector(categoriesSelector);

    useEffect(() => {
        dispatch(getSingleProduct());
        dispatch(getAllCategories());
        return () => {
            dispatch(reset());
        };
    }, [dispatch, location]);

    const viewDetails = (id) => {
        navigate(`/productDetail/${id}`);
        console.log(id);
    };

    const cartHandler = (id, action) => {
        if (isLoggedIn){
            dispatch(updateCart({ id: id, action: action }));
            Swal.fire("Add to Cart Successfully");
         }
        else{
            navigate(LOGIN)
        };
    };

    return (
        <div>
            {loader ? (
                <Loader />
            ) : (<>
                <Navbar/>
                <ProductView
                    viewDetails={viewDetails}
                    products={products}
                    cartHandler={cartHandler}
                    cartLoader={cartLoader}
                    categories={categories}
                />
                <Footer/>
                </>
            )}
        </div>
    );
}
