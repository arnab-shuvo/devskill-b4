import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/product-details";
import NotFound from "./pages/404";
import CreateProduct from "./pages/create-product";
import EditProduct from "./pages/edit-product";
import Home from "./pages/home";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout title="All Products">
            {<Home products={products} setProducts={setProducts} />}
          </Layout>
        }
      />
      <Route
        path="/product-details/:id"
        element={
          <Layout title="Product Detail">
            {<ProductDetails setProducts={setProducts} />}
          </Layout>
        }
      />
      <Route
        path="/create-product"
        element={
          <Layout title="Create a Product">
            {<CreateProduct products={products} setProducts={setProducts} />}
          </Layout>
        }
      />
      <Route
        path="/edit-product/*"
        element={
          <Layout title="Edit Product">
            {<EditProduct setProducts={setProducts} />}
          </Layout>
        }
      />
      <Route
        path="/*"
        element={<Layout title="Invalid Link">{<NotFound />}</Layout>}
      />
    </Routes>
  );
}

export default App;
