import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "../NavLink/NavLink";
import { Grid } from "@mui/material";

export default function Sidebar() {
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
            <NavLink to="/">Home</NavLink>
          </Grid>
          <Grid item xs={12} md={1}>
            <NavLink to="/create-product">Create</NavLink>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
