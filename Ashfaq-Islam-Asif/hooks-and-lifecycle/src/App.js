import { Route, Routes } from 'react-router-dom';
import Product from './Components/Product';
import ProductDetails from './Components/ProductDetails';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
    );
};

export default App;
