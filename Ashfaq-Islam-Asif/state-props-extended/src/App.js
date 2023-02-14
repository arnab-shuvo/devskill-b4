import { Component } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Product from './Components/Product';
import ProductDetails from './Components/ProductDetails';

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Routes>
            <Route path="/" element={<Product navigate={navigate} />} />
            <Route path="/product-details" element={<ProductDetails location={location} />} />
        </Routes>
    );
};

export default App;
