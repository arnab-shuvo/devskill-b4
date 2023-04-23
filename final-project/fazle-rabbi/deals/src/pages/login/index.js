import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../store/action/user";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setOpen } from "../../store/reducer/loaderReducer";
import BackDrop from "../../components/BackDrop/BackDrop";
import { setLogout } from "../../store/reducer/userReducer";

const Login = ({ logOut }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = useSelector((store) => store.loader.open);
  const loggedIn = useSelector((store) => store.user.activeUser.loggedIn);
  const login = (data) => {
    dispatch(userLogin(data));
  };

  useEffect(() => {
    dispatch(setOpen(true));
    if (logOut) {
      dispatch(setLogout());
    }
    setTimeout(() => {
      if (loggedIn) {
        navigate("/");
      }
      dispatch(setOpen(false));
    }, 600);
  }, [loggedIn]);

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
          autocomplete="off"
          placeholder="Email"
          {...register("email", {
            required: true,
          })}
        />
        <input
          type="password"
          autocomplete="off"
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
      <BackDrop open={open} />
    </>
  );
};

export default Login;
