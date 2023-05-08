import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Navigate,
    Route,
    Routes,
    useNavigate,
    useLocation,
    useMatch,
} from "react-router-dom";

import UserForm from "./users.form";
import UsersView from "./users.view";
import { deleteUser, getAllUsers, getSingleUser } from "./users.thunk";
import { loaderSelector, usersSelector } from "./users.slice";

export default function Users() {
    const match = useMatch();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const loader = useSelector(loaderSelector);

    const createURL = `${match.url}/create`;
    const updateURL = `${match.url}/update`;

    const userHandler = async (id = null) => {
        if (id) {
            await dispatch(getSingleUser(id));
            navigate(`${updateURL}/${id}`);
        } else {
            navigate(createURL);
        }
    };

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch, location]);

    const userDelete = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <Routes>
            <Route exact path={createURL}>
                <UserForm action="create" />
            </Route>
            <Route exact path={`${updateURL}/:id`}>
                <UserForm action="update" />
            </Route>
            <Route exact path={match.url}>
                <UsersView
                    userHandler={userHandler}
                    users={users}
                    loader={loader}
                    userDelete={userDelete}
                />
            </Route>
            <Navigate exact from="*" to="/404" />
        </Routes>
    );
}
