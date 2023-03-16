import React from "react";
import { Divider } from "@mui/material";

import Box from "@mui/material/Box";

export default function Hero(props) {
  return (
    <Box
      style={{
        height: props.height,
        width: "100%",
        position: "relative",
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Divider />
      {props.children}
    </Box>
  );
}
