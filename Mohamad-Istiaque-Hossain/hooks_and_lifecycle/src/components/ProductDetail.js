import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const ProductDetail = ({ productDetails }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [productDetails]);
    const { name, description, price, category } = productDetails;
    return (
        <div>
            {
                !isLoading ? <div>
                    <h3>Product Details</h3>
                    <p><b>Name:</b> {name}</p>
                    <p><b>Category:</b> {category}</p>
                    <p><b>Price:</b> {price}</p>
                    <p><b>Description:</b> {description}</p>
                </div> : <Loader />
            }
        </div>
    );
};

export default ProductDetail;