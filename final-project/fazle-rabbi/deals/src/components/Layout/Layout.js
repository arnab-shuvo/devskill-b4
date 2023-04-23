import React from "react";
import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Layout({ children, title }) {
  document.title = title;
  return (
    <Box>
      <Navbar />
      <Typography ml={2} mt={2} gutterBottom paragraph variant="h6">
        {title}
      </Typography>
      {children}
    </Box>
  );
}
