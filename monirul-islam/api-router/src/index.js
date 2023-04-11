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
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
     <Provider store={store}>   
             <App/>
       </Provider>
      
      
);


reportWebVitals();
