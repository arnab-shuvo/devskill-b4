import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Route,
    Routes,
    useNavigate,
    useMatch,
    useLocation,
    Navigate,
} from "react-router-dom";

import {
    deleteCategory,
    getAllCategories,
    getSingleCategory,
} from "./categories.thunk";
import { loaderSelector, categoriesSelector } from "./categories.slice";
import CategoriesForm from "./categories.form";
import CategoriesView from "./categories.view";

export default function Categories() {
    const match = useMatch();
    const navigate = useNavigate()();
    const location = useLocation();
    const dispatch = useDispatch();
    const categories = useSelector(categoriesSelector);
    const loader = useSelector(loaderSelector);

    const createURL = `${match.url}/create`;
    const updateURL = `${match.url}/update`;

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch, location]);

    const categoryHandler = async (id = null) => {
        if (id) {
            await dispatch(getSingleCategory(id));
            navigate(`${updateURL}/${id}`);
        } else {
            navigate(createURL);
        }
    };

    const categoryDelete = (id) => {
        dispatch(deleteCategory(id));
    };

    return (
        <Routes>
            <Route exact path={createURL}>
                <CategoriesForm action="create" />
            </Route>
            <Route exact path={`${updateURL}/:id`}>
                <CategoriesForm action="update" />
            </Route>
            <Route exact path={match.url}>
                <CategoriesView
                    categoryHandler={categoryHandler}
                    categories={categories}
                    loader={loader}
                    categoryDelete={categoryDelete}
                />
            </Route>
            <Navigate exact from="*" to="/404" />
        </Routes>
    );
}
