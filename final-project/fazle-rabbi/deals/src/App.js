import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/product-details";
import NotFound from "./pages/404";
import EditProduct from "./components/AddToCart/AddToCart";
import Home from "./pages/home";
import Layout from "./components/Layout/Layout";
import Login from "./pages/login";
import User from "./pages/user";
import Cart from "./pages/cart";
import SignUp from "./components/SignUp/SignUp";
import Admin from "./pages/admin";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout title="All Products">{<Home />}</Layout>}
      />
      <Route
        path="/login"
        element={
          <Layout
            title=""
            background={
              "url(https://images.unsplash.com/photo-1602330041000-4b8119482edf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80)"
            }
          >
            {<Login />}
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout
            title=""
            background={
              "url(https://images.unsplash.com/photo-1630618148126-74d18effc1b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"
            }
          >
            {<SignUp />}
          </Layout>
        }
      />
      <Route
        path="/product-details/:id"
        element={<Layout title="Product Detail">{<ProductDetails />}</Layout>}
      />
      <Route
        path="/edit-product/:id"
        element={<Layout title="Edit Product">{<EditProduct />}</Layout>}
      />
      <Route
        path="/*"
        element={<Layout title="Invalid Link">{<NotFound />}</Layout>}
      />
      <Route
        path="/profile"
        element={<Layout title="Profile">{<User />}</Layout>}
      />
      <Route
        path="/logout"
        element={<Layout title="Login">{<Login logOut={true} />}</Layout>}
      />
      <Route path="/cart" element={<Layout title="">{<Cart />}</Layout>} />
      <Route path="/admin" element={<Layout title="">{<Admin />}</Layout>} />
    </Routes>
  );
}

export default App;
