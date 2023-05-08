
import Header from "../Header/header";
import Footer from "../Footer";
import Product from "../../../pages/products/product-list";

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