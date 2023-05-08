import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Navigate,
    Route,
    Routes,
    useNavigate,
    useMatch,
    useLocation,
} from "react-router-dom";

import { deleteProduct } from "./products.thunk";
import { getSingleProduct } from "shared/components/product/product.thunk";
import {
    productsSelector,
    loaderSelector,
} from "shared/components/product/product.slice";
//import { getSingleProduct } from "shared/components/productDetail/productDetail.thunk";
import ProductsForm from "./products.form";
import ProductsView from "./products.view";

export default function Categories() {
    const match = useMatch();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const products = useSelector(productsSelector);
    const loader = useSelector(loaderSelector);

    const createURL = `${match.url}/create`;
    const updateURL = `${match.url}/update`;

    useEffect(() => {
        dispatch(getSingleProduct());
    }, [dispatch, location]);

    const productHandler = async (id = null) => {
        if (id) {
            await dispatch(getSingleProduct(id));
            navigate(`${updateURL}/${id}`);
        } else {
            navigate(createURL);
           
        }
    };

    const productDelete = (id) => {
        dispatch(deleteProduct(id));
    };

    return (
        <Routes>
            <Route exact path={createURL}>
                <ProductsForm action="create" />
            </Route>
            <Route exact path={`${updateURL}/:id`}>
                <ProductsForm action="update" />
            </Route>
            <Route exact path={match.url}>
                <ProductsView
                    productHandler={productHandler}
                    products={products}
                    loader={loader}
                    productDelete={productDelete}
                />
            </Route>
            <Navigate exact from="*" to="/404" />
        </Routes>
    );
}
