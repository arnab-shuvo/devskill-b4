import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import SideMenu from "./SideMenu";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box display={"flex"} justifyContent="space-between" px={5} pt={1}>
      <Box>
        <img src="https://demo.acmethemes.com/portfolio-web/wp-content/uploads/2019/01/logo_free_version.png" />
      </Box>
      <IconButton
        onClick={() => {
          setOpenDrawer(true);
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <SideMenu
        openDrawer={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      />
    </Box>
  );
};

export default Header;
