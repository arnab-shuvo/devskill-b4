import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "../NavLink/NavLink";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import { setLogout } from "../../store/reducer/loginReducer";
import { useRef } from "react";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const ref = useRef();
  const dispatch = useDispatch();
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
            <NavLink
              ref={ref}
              to={"/login"}
              onClick={() => {
                if (ref.current.innerHTML === "Log Out") {
                  dispatch(setLogout());
                }
              }}
            >
              {loggedIn ? "Log Out" : "Log In"}
            </NavLink>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
