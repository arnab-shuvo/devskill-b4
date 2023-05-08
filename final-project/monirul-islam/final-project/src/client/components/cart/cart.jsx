import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { loaderSelector, cartItemsSelector, resetCart } from "./cart.slice";
import { getCartItems, updateCart } from "./cart.thunk";
import CartView from "./cart.view";
import Navbar from '../navbar/navbar';
import { PROFILE } from "utils/constants";
import { createOrder } from "../profile/profile.thunk";
import Loader from "shared/components/loader/loader";
import Swal from "sweetalert2";

export default function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loader = useSelector(loaderSelector);
    const cartItems = useSelector(cartItemsSelector);

    useEffect(() => {
        dispatch(getCartItems());
    }, [dispatch]);

    const cartHandler = (id, action) => {
        dispatch(updateCart({ id: id, action: action }));
    };

    const checkoutHandler = async () => {
        await dispatch(createOrder());
        navigate(PROFILE);
        await dispatch(resetCart());
        Swal.fire("Checkout successfully");
    };

    return (
        <div>
            <Navbar/>
            {loader ? (
                <Loader />
            ) : (
                <CartView
                    loader={loader}
                    cartItems={cartItems}
                    cartHandler={cartHandler}
                    checkoutHandler={checkoutHandler}
                />
            )}
        </div>
    );
}
