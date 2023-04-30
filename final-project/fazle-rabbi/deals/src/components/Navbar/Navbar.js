import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "../NavLink/NavLink";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import { useRef } from "react";
import IconButton from "@mui/material/IconButton";
import CottageIcon from "@mui/icons-material/Cottage";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

export default function Navbar() {
  const ref = useRef();
  const navigate = useNavigate();
  const loggedIn = useSelector((store) => store.user.activeUser.loggedIn);
  const user = useSelector((store) => store.user.userDetails.firstname);
  return (
    <AppBar position="sticky">
      <Toolbar component="div">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item container direction="row" xs={6} md={6}>
            <Grid>
              <Sidebar />
            </Grid>
            <Grid>
              <IconButton color="primary" onClick={() => navigate("/")}>
                <CottageIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="column"
            alignItems="flex-end"
            xs={6}
            md={6}
          >
            <Grid>
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  fontSize: "0.875rem",
                  fontWeight: "700",
                  mb: 1,
                }}
              >
                <NavLink ref={ref} to={"/profile"}>
                  {loggedIn ? `Hi ${user}!` : ""}
                </NavLink>
              </Box>
            </Grid>
            <Grid>
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  mb: 0,
                  fontSize: "0.875rem",
                }}
              >
                <NavLink ref={ref} to={loggedIn ? "/logout" : "/login"}>
                  {loggedIn ? "Log Out" : "Log In"}
                </NavLink>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
