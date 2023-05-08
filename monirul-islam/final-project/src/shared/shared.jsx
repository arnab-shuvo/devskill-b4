import React from "react";
import { useSelector } from "react-redux";

import SharedRoutes from "./shared.routes";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { loginSelector } from "./components/login/login.slice";

export default function Shared() {
    const isLoggedIn = useSelector(loginSelector);

    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} />
            <main>
                <SharedRoutes isLoggedIn={isLoggedIn} />
            </main>
            <Footer />
        </>
    );
}
