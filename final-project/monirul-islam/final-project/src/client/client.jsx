import React from "react";
import { useSelector } from "react-redux";

import ClientRoutes from "./client.routes";
import Navbar from "shared/components/navbar/navbar";
import Footer from "shared/components/footer/footer";
import { loginSelector } from "shared/components/login/login.slice";

export default function Client() {
    const isLoggedIn = useSelector(loginSelector);

    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} />
            <main>
                <ClientRoutes />
            </main>
            <Footer />
        </>
    );
}
