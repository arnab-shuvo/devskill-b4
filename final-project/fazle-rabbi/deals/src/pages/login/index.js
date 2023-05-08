import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setOpen } from "../../store/reducer/loaderReducer";
import BackDrop from "../../components/BackDrop/BackDrop";
import { setLogout } from "../../store/reducer/userReducer";
import SignIn from "../../components/SignIn/SignIn";

const Login = ({ logOut }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = useSelector((store) => store.loader.open);
  const loggedIn = useSelector((store) => store.user.activeUser.loggedIn);

  useEffect(() => {
    dispatch(setOpen(true));
    if (logOut) {
      dispatch(setLogout());
      navigate("/login");
    } else if (loggedIn) {
      navigate("/");
    }
    dispatch(setOpen(false));
  }, [loggedIn]);

  return (
    <>
      <SignIn />
      <BackDrop open={open} />
    </>
  );
};

export default Login;
