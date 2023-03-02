import { useState } from "react";
import Loader from "./Loader";
import ProductDetail from "./ProductDetail";

const demoProduct = {
    id: -1000,
    name: "",
    category: "",
    price: 0,
    description: ""
};

const Product = (props) => {
    const [products, setProducts] = useState([
        {id: 0,
            name: 'iPhone 14 Pro Max(256GB)',
            category: 'Mobile',
            price: 169000,
            description: 'Product Description',
            },
            {id: 1,
            name: 'iPhone 13 Pro Max(256GB)',
            category: 'Mobile',
            price: 129000,
            description: 'Product Description',
            },
            {id: 2,
            name: 'OnePlus 10 Pro',
            category: 'Mobile',
            price: 99000,
            description: 'Product Description',
            },
            {id: 3,
            name: 'MacBook Pro',
            category: 'Laptop',
            price: 210000,
            description: 'Product Description',
            },
    ]);

    const [selectedProduct, setSelectedProduct] = useState(demoProduct);
    const [isLoading, setIsLoading] = useState(false);

    const listOfProduct = (
        <ol style={{ lineHeight: "2em" }}>
          <h2>List of Products</h2>
          {products.map((product) => (
            <li key={product.id}>
              <button
                onClick={() =>
                  setActiveProduct(product.id, products, setSelectedProduct)
                }
              >
                {product.name}: {product.price} BDT
              </button>
            </li>
          ))}
        </ol>
      );

      return (
        <div>
          {selectedProduct.id !== -1000 ? (
            <ProductDetail
              info={selectedProduct}
              setActiveProduct={setActiveProduct}
              products={products}
              setSelectedProduct={setSelectedProduct}
              changeLoaderState={changeLoaderState}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          ) : (
            listOfProduct
          )}
    
          {isLoading === true ? <Loader /> : null}
        </div>
      );
    };

    const setActiveProduct = (id, products, setSelectedProduct) => {
        const product = products.find((product) => product.id === id);
        if (!product) {
          setSelectedProduct(demoProduct);
        } else {
          setSelectedProduct(product);
        }
      };
      
      const changeLoaderState = (isLoading, setIsLoading) => {
        setIsLoading(!isLoading);
      };

export default Product;