import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "./Header";
import { KeyboardArrowRight } from "@mui/icons-material";

const Introduction = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(https://demo.acmethemes.com/portfolio-web/wp-content/uploads/2019/01/portfolio_man_41920x800.png)`,
      }}
      height={800}
    >
      <Box>
        <Header />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        mt={30}
        ml={40}
      >
        <Typography fontSize={60} fontWeight={700} lineHeight={"80px"}>
          Keiths Williams
        </Typography>
        <Typography fontSize={14} letterSpacing={6} fontWeight={700}>
          SENIOR DEVELOPER
        </Typography>
        <Box mt={4}>
          <Button
            sx={{
              mr: 1,
              ":hover": {
                backgroundColor: "#1976d2",
                color: "white",
              },
            }}
            variant={"outlined"}
            endIcon={<KeyboardArrowRight />}
          >
            View Portfolio
          </Button>
          <Button variant={"contained"} endIcon={<KeyboardArrowRight />}>
            Download Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction;
