import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
}));

const Home = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const [validation, setValidation] = useState(false);

  const submit = () => {
    setValidation(true);
    if (data.fname === "" || data.lname === "" || data.email === "") {
      return;
    }
    alert("Form Submitted");
    setValidation(false);
    setData({
      fname: "",
      lname: "",
      email: "",
      phone: "",
    });
  };

  const setValue = (value, component) => {
    const formData = { ...data };
    formData[component] = value;
    setData(formData);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid container item xs={9}>
        <Item>
          <Box>
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              onChange={(e) => setValue(e.target.value, "fname")}
              value={data.fname}
            />
            {validation && data.fname === "" && <p>Value Reuired</p>}
          </Box>
          <Box>
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              onChange={(e) => setValue(e.target.value, "lname")}
              value={data.lname}
            />
            {validation && data.lname === "" && <p>Value Reuired</p>}
          </Box>
          <Box>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              onChange={(e) => setValue(e.target.value, "email")}
              value={data.email}
            />
            {validation && data.email === "" && <p>Value Reuired</p>}
          </Box>
          <Box>
            <TextField
              id="standard-basic"
              label="Phone"
              variant="standard"
              onChange={(e) => setValue(e.target.value, "phone")}
              value={data.phone}
            />
          </Box>
          <Button onClick={submit} variant="contained">
            Register
          </Button>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Home;
