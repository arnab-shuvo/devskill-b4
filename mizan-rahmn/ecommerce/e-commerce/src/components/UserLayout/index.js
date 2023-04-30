
import Header from "../Header";

const UserLayout = (props) => {
  return (
    <>
      {" "}
      <Header />
      {props.children}
    </>
  );
};

export default UserLayout;