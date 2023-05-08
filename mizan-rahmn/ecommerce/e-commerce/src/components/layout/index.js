
import Header from "../Header/header";
import Footer from "../Footer";

const UserLayout = (props) => {
  return (
    <>
      {" "}
      <Header />      
      {props.children}
      <Footer />
    </>
  );
};

export default UserLayout;