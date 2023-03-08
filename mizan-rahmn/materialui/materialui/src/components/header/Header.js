import React from "react";
import CustomSeparator from "./CustomSeparator";
import ProminentAppBar from "./ProminentAppBar";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";

const Header = () => {
    return(
        <>
        <p>I am Header</p>
        <ProminentAppBar />
        <CustomSeparator />
        <SwipeableTemporaryDrawer />
        </>
    );
};

export default Header;