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
import ProfileForm from "./profile.form";
import {
    loaderSelector,
    ordersSelector,
    userInfoSelector,
} from "./profile.slice";
import { getOrders, getUserInfo } from "./profile.thunk";
import ProfileView from "./profile.view";

export default function Profile() {
    const match = useMatch();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const loader = useSelector(loaderSelector);
    const orderItems = useSelector(ordersSelector);
    const user = useSelector(userInfoSelector);
     console.log(user);
    useEffect(() => {
        dispatch(getOrders());
        dispatch(getUserInfo());
    }, [dispatch, location]);
 
    const updateHandler = async (id = null) => {
        navigate(`${match.url}/update`);
    };

    return (
        <>
        <Routes>
            {/* <Route exact path={`${match.url}/update`}>
                <ProfileForm />
            </Route> */}
            <Route exact path={match.url}>
                <ProfileView
                    loader={loader}
                    orderItems={orderItems}
                    user={user}
                    updateHandler={updateHandler}
                />
            </Route>
            <Navigate exact from="*" to="/404" />
        </Routes>
        </>
    );
}
