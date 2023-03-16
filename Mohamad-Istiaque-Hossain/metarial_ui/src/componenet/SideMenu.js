import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ContactPage, Home, Info } from "@mui/icons-material";

const SideMenu = ({ openDrawer, onClose }) => {
  return (
    <Drawer anchor="left" open={openDrawer} onClose={onClose}>
      <Box
        sx={{
          width: 250,
          backgroundColor: "rgba(0,0,0, 0.7)",
          height: "100%",
        }}
        role="presentation"
      >
        <List>
          {["Home", "About", "Contact"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton disableGutters>
                <ListItemIcon sx={{ pl: 2, mr: -2 }}>
                  {text === "Home" ? (
                    <Home sx={{ color: "white" }} />
                  ) : text === "About" ? (
                    <Info sx={{ color: "white" }} />
                  ) : (
                    <ContactPage sx={{ color: "white" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
