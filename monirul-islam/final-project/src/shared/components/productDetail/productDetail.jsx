import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { reset, loaderSelector, productSelector } from "./productDetail.slice";
import { getSingleProduct } from "./productDetail.thunk";
import ProductView from "./productDetail.view";
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { updateCart } from "client/components/cart/cart.thunk";
import { loginSelector } from "shared/components/login/login.slice";
import Loader from "../loader/loader";
import { LOGIN } from "utils/constants";

export default function ProductDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const loader = useSelector(loaderSelector);
    const product = useSelector(productSelector);
    const isLoggedIn = useSelector(loginSelector);
    const cartLoader = useSelector((state) => state.cartReducer.isLoading);

    useEffect(() => {
        dispatch(getSingleProduct(id));
        return () => {
            dispatch(reset());
        };
    }, [dispatch, id]);

    const calcDecimal = (number) => {
        const decimal = (number - Math.floor(number))
            .toFixed(2)
            .toString()
            .replace(/^[0.]+/, ".");
        return decimal === "." ? ".0" : decimal;
    };
     console.log("id==",id);
    const cartHandler = (id, action) => {
        if (isLoggedIn) dispatch(updateCart({ id: id, action: action }));
        else navigate(LOGIN);
    };

    return (
        <div>
            {loader ? (
                <Loader />
            ) : (<>
                <Navbar/>
                <ProductView
                    product={product}
                    calcDecimal={calcDecimal}
                    cartHandler={cartHandler}
                    cartLoader={cartLoader}
                />
                <Footer/>
                </>
            )}
        </div>
    );
}
