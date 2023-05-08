import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllOrders, updateOrder } from "./orders.thunk";
import { ordersSelector, loaderSelector } from "./orders.slice";
import OrdersView from "./orders.view";
//import Navbar from '../navbar/navbar.jsx';

export default function Orders() {
    const dispatch = useDispatch();
    const orders = useSelector(ordersSelector);
    const loader = useSelector(loaderSelector);

    useEffect(() => {
        dispatch(getAllOrders());
    }, [dispatch]);

    const orderHandler = (id, status) => {
        dispatch(updateOrder({ id: id, status: status }));
    };

    return (
        <>
       <OrdersView
            loader={loader}
            orders={orders}
            orderHandler={orderHandler}
        />
       
    </>);
}
