import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

const MyTextComponent = styled(Grid)({
  fontSize: 20,
  fontWeight: "bold",
});

const Home = () => {
  const contactUs = () => {
    alert("I am Contact Us");
  };
  return (
    <MyTextComponent container spacing={2} justifyContent={"center"}>
      <Grid spacing={3} container lg={9} item>
        <Grid className="black-bg" item lg={3}>
          <MyTextComponent>1</MyTextComponent>
        </Grid>
        <Grid style={{ color: "red" }} className="black-bg" item lg={3}>
          <MyTextComponent>2</MyTextComponent>
        </Grid>
        <Grid className="black-bg" item lg={3}>
          <MyTextComponent>3</MyTextComponent>
        </Grid>
        <Grid className="black-bg" item lg={3}>
          <MyTextComponent>4</MyTextComponent>
        </Grid>
      </Grid>
    </MyTextComponent>
  );
};

export default Home;
