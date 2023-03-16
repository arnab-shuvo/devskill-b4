import React from "react";
import { Container, Typography, Divider, Box } from "@mui/material";
// import Social from "../Social";

const Footer = () => {
  return (
    <Container>
      <Divider />
      <Box>
        <Typography variant="body1" color="initial">
          copyright &copy; Fazle Rabbi
        </Typography>
        <Typography>all rights reserved</Typography>
      </Box>
    </Container>
  );
};

export default Footer;
