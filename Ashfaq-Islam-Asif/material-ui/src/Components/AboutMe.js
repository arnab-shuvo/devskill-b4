import React from "react";
import { Box, Button, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        height={720}
        sx={{
          backgroundImage: `url(https://demo.acmethemes.com/portfolio-web/wp-content/uploads/2019/01/portfolio_man_5.png)`,
          backgroundRepeat: "no-repeat",
        }}
        mt={-15}
        ml={10}
      >
        <Box mt={15} ml={80} mr={40}>
          <Typography fontSize={30} fontWeight={700}>
            About Me
          </Typography>
          <Typography fontSize={20} mt={1}>
            Hello, I’m a UI/UX Designer & Frontend Developer from Victoria,
            Australia. I hold a master degree of Web Design from the World
            University.
          </Typography>
          <Typography mt={5}>
            Lorem ipsum dolor sit amet, consectetur adipisicing el sed dhyjuo
            eiusmod in dunt ut labore et dolore magna aliqua. Ut enim ahyuihd
            minim veniam, quihs nos trud exercitation ullamco laboris nisi ut
            aliquip excommodo consequat. Duihys aute irure dolor ineniyht
            hgtyul.
          </Typography>
          <Button
            sx={{
              mt: 8,
              ":hover": {
                backgroundColor: "#1976d2",
                color: "white",
              },
            }}
            variant={"outlined"}
          >
            Download Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
