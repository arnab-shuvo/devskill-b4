/** @format */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { MenuLink, MenuBar } from "./styled";

const pages = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Product",
    url: "/product-list",
  },
  {
    name: "Blog",
    url: "/blog",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = (props) => {
  return (
    <MenuBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <MenuLink
                to={page.url}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                {page.name}
              </MenuLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </MenuBar>
  );
};

export default Header;
