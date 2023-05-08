import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { MenuLink, MenuBar } from "./styled";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import Typography from "@mui/material";
import MenuItem from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Button from "@mui/material";

const pages = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Product",
    url: "/product",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Login",
    url: "/Login",
  },
  {
    name: "SignUp",
    url: "/SignUp",
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