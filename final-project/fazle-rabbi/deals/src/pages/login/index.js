import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../store/action/user";
import { useEffect } from "react";
import { setLogout } from "../../store/reducer/loginReducer";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((store) => store.login.activeUser.loggedIn);
  const { state } = useLocation();
  const login = (data) => {
    dispatch(userLogin(data)).then(navigate("/"));
  };

  useEffect(() => {
    console.log(state);
    if (state && state.logout) {
      dispatch(setLogout());
    } else if (loggedIn) {
      navigate("/");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(login)}>
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
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
        <button type="submit">Login</button>
      </form>
      <Box sx={{ padding: "20px 0px 0 0" }}>
        <p>
          Not Registered? Please <Link href="/signup">Sign Up</Link>
        </p>
      </Box>
    </>
  );
};

export default Login;
