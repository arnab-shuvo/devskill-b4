import React from "react";
import { Box, Typography } from "@mui/material";
import Progress from "./Progress";

const MySkills = () => {
  return (
    <Box>
      <Typography mt={2} mb={5} fontSize={30} textAlign={"center"}>
        My Skills
      </Typography>
      <Box display={"flex"} justifyContent={"center"}>
        <Progress name={"React JS"} progress={75} />
        <Progress name={"Angular JS"} progress={75} />
        <Progress name={"Node JS"} progress={75} />
      </Box>
    </Box>
  );
};

export default MySkills;
