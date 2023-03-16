

import { useEffect, useState } from "react";
import Preloader from "./PreLoader";

const ProductDetails = ({ product }) => {
    const {name,brand,price,quality} = product || {};
    const [showPreloader, setShowPreloader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowPreloader(false)
        }, 1500);
    }, [])

    return (
        <>
            {showPreloader ? <Preloader /> : <div className="products-main">
                <h1>Product Details</h1>
                <div className="product">
                    <span>Product Name : {name}</span>
                    <span>Product Brand : {brand}</span>
                    <span>Product Price : {price}</span>
                    <span>Product quality : {quality}</span>
                </div>
            </div>}
        </>
    )
}

export default ProductDetails;