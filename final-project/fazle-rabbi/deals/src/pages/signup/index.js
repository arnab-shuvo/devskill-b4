import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userSignup } from "../../store/action/user";

const Signup = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signup = (data) => {
    dispatch(userSignup(data));
  };
  return (
    <>
      <form onSubmit={handleSubmit(signup)}>
        <input
          type="text"
          placeholder="Username"
          {...register("username", {
            required: true,
          })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
          })}
        />
        <input
          type="text"
          placeholder="First Name"
          {...register("firstname")}
        />
        <input type="text" placeholder="Last Name" {...register("lastname")} />
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
          })}
        />
        <input type="text" placeholder="Phone" {...register("phone")} />
        <button type="submit">Sign Up</button>
      </form>
      <Box sx={{ padding: "20px 0px 0 0" }}>
        <p>
          Already have account? Please <Link href="/login">Log in</Link>
        </p>
      </Box>
    </>
  );
};

export default Signup;
