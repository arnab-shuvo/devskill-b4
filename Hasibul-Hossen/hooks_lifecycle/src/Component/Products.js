import { useEffect, useState } from "react";
import Preloader from "./PreLoader";


const Products = ({selectProduct}) => {
    const [productItems, setProductItems] = useState([
        {
            id: 1,
            name: "Samsung A59",
            brand: "Samsung",
            price: "$300",
            quality: "primium",
        },
        {
            id: 2,
            name: "Redmi Note10",
            brand: "Redmi",
            price: "$300",
            quality: "primium",
        },
        {
            id: 3,
            name: "Dell inspiron-3567",
            brand: "Dell",
            price: "$700",
            quality: "primium",
        },
        {
            id: 4,
            name: "HP L120",
            brand: "HP",
            price: "$800",
            quality: "primium",
        }
    ])
    const [showPreloader, setShowPreloader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowPreloader(false)
        }, 1500);
    }, [])
    return (
        <>
            {showPreloader ? <Preloader /> : <div className="products-main">
                <h1>All Product</h1>
                <div className="products-wrapper">
                    {productItems.map((product) => (
                        <div className="product" key={product.id}>
                            <span>Name : {product.name}</span>
                            <span>Brand : {product.brand}</span>
                            <span>Price : {product.price}</span>
                            <span>quality : {product.quality}</span>
                            <button onClick={() => selectProduct(product)}>
                                Product Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>}
        </>
    )
}

export default Products;