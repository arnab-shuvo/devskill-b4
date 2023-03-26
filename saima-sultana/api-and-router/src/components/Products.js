import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products').then(res => {
            setProducts(res.data);
        })
    }, []);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-10 justify-center'>
            {products.length > 0 ? products.map(product => <Product key={product.id} product={product}></Product>) : <p>Loading...</p>}
        </div>
    );
};

export default Products;