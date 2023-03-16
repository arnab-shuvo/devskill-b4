import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Progress = ({ name, progress }) => {
  return (
    <Box mx={5}>
      <CircularProgress variant="determinate" value={progress} size={100} />
      <Typography mt={1} textAlign={"center"}>
        {name}
      </Typography>
    </Box>
  );
};

export default Progress;
