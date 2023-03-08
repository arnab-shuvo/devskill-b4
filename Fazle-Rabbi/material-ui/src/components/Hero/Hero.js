import React from "react";
import { Divider } from "@mui/material";

import Box from "@mui/material/Box";

export default function Navbar(props) {
  return (
    <Box>
      <Divider />
      <h1>{props.children}</h1>
    </Box>
  );
}
