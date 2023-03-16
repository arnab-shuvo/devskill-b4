import React from "react";
import CustomSeparator from "./CustomSeparator";
import Navbar from "./Navbar";
import ProminentAppBar from "./ProminentAppBar";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";

const Header = () => {
    return(
        <>
        <p>I am Header</p>
        <Navbar />
        {/* <ProminentAppBar />
        <CustomSeparator />
        <SwipeableTemporaryDrawer /> */}
        </>
    );
};

export default Header;