import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/product-details";
import NotFound from "./pages/404";
import CreateProduct from "./pages/create-product";
import EditProduct from "./pages/edit-product";
import Home from "./pages/home";
import Layout from "./components/Layout/Layout";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout title="All Products">{<Home />}</Layout>}
      />
      <Route
        path="/login"
        element={<Layout title="Login">{<Login />}</Layout>}
      />
      <Route
        path="/signup"
        element={<Layout title="Sign up">{<Signup />}</Layout>}
      />
      <Route
        path="/product-details/:id"
        element={<Layout title="Product Detail">{<ProductDetails />}</Layout>}
      />
      <Route
        path="/create-product"
        element={<Layout title="Create a Product">{<CreateProduct />}</Layout>}
      />
      <Route
        path="/edit-product/:id"
        element={<Layout title="Edit Product">{<EditProduct />}</Layout>}
      />
      <Route
        path="/*"
        element={<Layout title="Invalid Link">{<NotFound />}</Layout>}
      />
    </Routes>
  );
}

export default App;
