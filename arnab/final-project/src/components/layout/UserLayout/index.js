/** @format */

import AuthProvider from "../../AuthProvider";
import Header from "../Header";

const UserLayout = (props) => {
  return (
    <AuthProvider>
      {" "}
      <Header />
      {props.children}
    </AuthProvider>
  );
};

export default UserLayout;
