import React from "react";
import { Container, Card, Typography, Box } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Service = (props) => {
  return (
    <Card variant="outlined">
      <WorkOutlineIcon />
      <h4>{props.children.title}</h4>
      <Typography>{props.children.description}</Typography>
    </Card>
  );
};

export default Service;
