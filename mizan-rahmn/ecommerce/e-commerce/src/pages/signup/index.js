import { SignupContainer } from "./styled";
import Card from "@mui/material/Card";
import { CardContent, CardHeader } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Alert from "@mui/material/Alert";
import { userSignup } from "../../store/actions/userAction";
import { useDispatch } from "react-redux";
import Link from "@mui/material/Link";

const Signup = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(userSignup(data));
  };
  return (
    <SignupContainer container justifyContent={"center"} alignItems="center">
      <Card sx={{ width: 500, padding: "60px" }}>
        <CardHeader style={{ textAlign: "center" }} title="Signup" />
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              style={{ margin: "0 0 20px 0" }}
              id="standard-basic"
              label="Email *"
              placeholder="Please Enter Email"
              fullWidth
              variant="outlined"
              error={errors.userName}
              {...register("email", { required: true })}
            />
            {errors.email && <Alert severity="error">Email Required</Alert>}
            <TextField
              style={{ margin: "20px 0" }}
              id="standard-basic"
              label="Password *"
              placeholder="Please Enter Password"
              fullWidth
              type="password"
              variant="outlined"
              error={errors.password}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <Alert severity="error">Password Required</Alert>
            )}
            <TextField
              style={{ margin: "20px 0" }}
              id="standard-basic"
              label="User Name *"
              placeholder="Please Enter User Name"
              fullWidth
              variant="outlined"
              error={errors.password}
              {...register("username", { required: true })}
            />
            {errors.username && (
              <Alert severity="error">Username is Required</Alert>
            )}
            <TextField
              style={{ margin: "20px 0" }}
              id="standard-basic"
              label="First Name "
              placeholder="Please Enter First Name"
              fullWidth
              variant="outlined"
              {...register("firstname")}
            />
            <TextField
              style={{ margin: "20px 0" }}
              id="standard-basic"
              label="Last Name *"
              placeholder="Please Enter Last Name"
              fullWidth
              variant="outlined"
              {...register("lastname")}
            />
            <TextField
              style={{ margin: "20px 0" }}
              id="standard-basic"
              label="Phone"
              placeholder="Please Enter Phone Number"
              fullWidth
              type="number"
              variant="outlined"
              error={errors.phone}
              {...register("phone", { minLength: 11, maxLength: 11 })}
            />
            <Box sx={{ padding: "20px 0px 0 0" }}>
              <Button type="submit" variant="contained">
                Signup
              </Button>
            </Box>

            <Box sx={{ padding: "20px 0px 0 0" }}>
              <p>
                Already an user? Please <Link href="/login">Sign In</Link>
              </p>
            </Box>
          </form>
        </CardContent>
      </Card>
    </SignupContainer>
  );
};

export default Signup;
