import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "../NavLink/NavLink";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import { useRef } from "react";
import IconButton from "@mui/material/IconButton";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 6)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function Navbar() {
  const ref = useRef();
  const navigate = useNavigate();
  const loggedIn = useSelector((store) => store.user.activeUser.loggedIn);
  const firstname = useSelector((store) => store.user.userDetails.firstname);
  const lastname = useSelector((store) => store.user.userDetails.lastname);
  const { products } = useSelector((store) => store.user.activeUser.cart);

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
              <IconButton color="#fff" onClick={() => navigate("/")}>
                <CottageOutlinedIcon />
              </IconButton>
            </Grid>
            <Grid>
              {products?.length > 0 && (
                <IconButton onClick={() => navigate("/cart")}>
                  <Badge badgeContent={products.length} color="success">
                    <ShoppingCartIcon color="action" />
                  </Badge>
                </IconButton>
              )}
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
                  {loggedIn ? (
                    <Avatar {...stringAvatar(`${firstname} ${lastname}`)} />
                  ) : (
                    <NavLink ref={ref} to={"/login"}>
                      Log In
                    </NavLink>
                  )}
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
              ></Box>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
