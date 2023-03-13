import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const DesignedButton = styled(Button)({
  color: "red",
  border: "2px solid red",
  "&:hover": {
    backgroundColor: "red",
    color: "#fff",
  },
});

const MyButton = ({ text, onClick }) => {
  return (
    <DesignedButton onClick={onClick} variant="outlined">
      {text}
    </DesignedButton>
  );
};

export default MyButton;
