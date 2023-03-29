import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Product from './pages/product.js';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home.js';
import ProductDetail from './pages/productDetail';
import CreateProduct from './pages/create-product/index';
import NotFound from './pages/404/index';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home/>}/>
           <Route path="product-list" element={<Product/>}/>
           <Route path="/productDetail/:id" element={<ProductDetail/>}/>
           <Route path="create-product" element={<CreateProduct/>}/>
           <Route path="/*" element={<NotFound/>}/>
       </Routes>
       </BrowserRouter>
);


reportWebVitals();
