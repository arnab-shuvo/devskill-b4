import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const loggedIn = useSelector((store) => store.user.activeUser.loggedIn);
  const role = useSelector((store) => store.user.activeUser.role);
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });
  const [userMenu, setUserMenu] = React.useState([]);

  const handleClick = (item) => {
    const { link } = item;
    navigate(link);
  };

  useEffect(() => {
    const newUserMenu = [];
    if (loggedIn) {
      if (role === "admin") {
        newUserMenu.push({ name: "Dashboard", link: "/admin" });
      }
      newUserMenu.push({ name: "View cart", link: "/cart" });
      newUserMenu.push({ name: "Profile", link: "/profile" });
      newUserMenu.push({ name: "Logout", link: "/logout" });
    } else {
      newUserMenu.push({ name: "Login", link: "/login" });
    }
    setUserMenu(newUserMenu);
  }, [loggedIn]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {userMenu.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton onClick={() => handleClick(item)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const anchor = "left";
  return (
    <div>
      <React.Fragment>
        <IconButton ccolor="#fff" onClick={toggleDrawer(anchor, true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
