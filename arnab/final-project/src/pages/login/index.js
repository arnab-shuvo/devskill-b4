/** @format */

import { LoginContainer } from "./styled";
import Card from "@mui/material/Card";
import { CardContent, CardHeader } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Alert from "@mui/material/Alert";
import { userLogin } from "../../store/actions/userAction";
import { useDispatch } from "react-redux";
import Link from "@mui/material/Link";

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(userLogin(data));
  };
  return (
    <LoginContainer container justifyContent={"center"} alignItems="center">
      <Card sx={{ width: 500, padding: "60px" }}>
        <CardHeader style={{ textAlign: "center" }} title="Login" />
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              style={{ margin: "0 0 20px 0" }}
              id="standard-basic"
              label="Email *"
              fullWidth
              variant="standard"
              type="email"
              error={errors.email}
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && <Alert severity="error">Email Required</Alert>}
            <TextField
              style={{ margin: "20px 0" }}
              id="standard-basic"
              label="Password *"
              type="password"
              fullWidth
              variant="standard"
              error={errors.password}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <Alert severity="error">Password Required</Alert>
            )}

            <Box sx={{ padding: "20px 0px 0 0" }}>
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Box>
            <Box sx={{ padding: "20px 0px 0 0" }}>
              <p>
                Not Registered? Please <Link href="/signup">Sign Up</Link>
              </p>
            </Box>
          </form>
        </CardContent>
      </Card>
    </LoginContainer>
  );
};

export default Login;
