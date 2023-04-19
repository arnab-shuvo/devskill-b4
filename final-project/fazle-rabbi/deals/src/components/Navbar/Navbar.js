import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "../NavLink/NavLink";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import { setLogout } from "../../store/reducer/userReducer";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import CottageIcon from "@mui/icons-material/Cottage";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((store) => store.user.activeUser.loggedIn);
  return (
    <AppBar position="sticky">
      <Toolbar component="div">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={1}>
            {" "}
            <IconButton onClick={() => navigate("/")}>
              <CottageIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={1}>
            <Sidebar />
          </Grid>
          {/* <Grid item xs={12} md={1}>
            <NavLink to="/create-product">Create</NavLink>
          </Grid> */}
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
