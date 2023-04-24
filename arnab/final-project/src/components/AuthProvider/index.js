/** @format */

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const {
    userInfo: { token },
  } = useSelector((store) => store.user);
  return (
    <>{token ? <>{children}</> : <Navigate to="/login" replace={true} />}</>
  );
};

export default AuthProvider;
