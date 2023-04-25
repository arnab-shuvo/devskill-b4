/** @format */

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import ProductList from "./pages/ProductList";
import AuthProvider from "./components/AuthProvider";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/product-list" element={<ProductList />} />
      <Route>
        <Route index path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path="*" element={<>404</>} />
    </Routes>
  );
}

export default App;
