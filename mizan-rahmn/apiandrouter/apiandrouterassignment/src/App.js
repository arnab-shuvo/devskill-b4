import Grid from '@mui/material/Grid';
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ProductDetail from './pages/product-detail';
import NotFound from './pages/404';

function App() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
      .then((res) => {        
        setProduct(res.data);
      });      
  }, []);
  console.log(products, "===products");
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
