import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "../NavLink/NavLink";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar() {
  const loggedIn = useSelector((store) => store.login.activeUser.loggedIn);
  return (
    <AppBar position="static">
      <Toolbar component="div">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} md={1}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={1}>
            <NavLink to="/">Home</NavLink>
          </Grid>
          <Grid item xs={12} md={1}>
            <NavLink to="/create-product">Create</NavLink>
          </Grid>
          <Grid item xs={12} md={1}>
            <NavLink to={"/login"} state={{ logout: loggedIn }}>
              {loggedIn ? "Log Out" : "Log In"}
            </NavLink>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
