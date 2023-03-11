import React from "react";
import { Card, Typography } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Service = (props) => {
  return (
    <Card variant="outlined">
      <WorkOutlineIcon sx={{ p: 1, m: 1 }} />
      <h4>{props.children.title}</h4>
      <Typography>{props.children.description}</Typography>
    </Card>
  );
};

export default Service;
