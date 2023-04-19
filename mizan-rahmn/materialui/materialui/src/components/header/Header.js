import React from "react";
import CustomSeparator from "./CustomSeparator";
import Navbar from "./Navbar";
import ProminentAppBar from "./ProminentAppBar";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";
// import logo from './components/images/logo.png';

const Header = () => {
    return(
        <>
        <p>I am Header</p>
        <Navbar />
        {/* <img src={logo} /> */}
        {/* <ProminentAppBar />
        <CustomSeparator />
        <SwipeableTemporaryDrawer /> */}
        </>
    );
};

export default Header;