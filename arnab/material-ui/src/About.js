import React from "react";
import Button from "@mui/material/Button";

const About = () => {
  const portfolio = () => {
    alert("I am Portfolio");
  };
  return (
    <>
      <p>I am about Page</p>
      <Button variant="outlined">Portfolio</Button>
    </>
  );
};

export default About;
