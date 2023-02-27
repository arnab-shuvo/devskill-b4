import { useState } from "react";
import { ProductDetails } from "../Product-Details/productDetails";
import { Loader } from "../Loader/loader";

const defaultProduct = {
  id: -999,
  name: "",
  price: 0,
  description: "",
};

export const Product = (props) => {
  const [products, setProducts] = useState([
    { id: 0, name: "Laptop", price: 50000, description: "This is a laptop" },
    { id: 1, name: "Mobile", price: 15000, description: "This is a mobile" },
    { id: 2, name: "Watch", price: 2000, description: "This is a watch" },
    { id: 3, name: "Camera", price: 25000, description: "This is a camera" },
    {
      id: 4,
      name: "Headphone",
      price: 1000,
      description: "This is a headphone",
    },
    {
      id: 5,
      name: "Keyboard",
      price: 500,
      description: "This is a keyboard",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(defaultProduct);
  const [isLoading, setIsLoading] = useState(false);

  const productList = (
    <ol style={{ lineHeight: "2em" }}>
      <h2>Products</h2>
      {products.map((product) => (
        <li key={product.id}>
          <button
            onClick={() =>
              setActiveProduct(product.id, products, setSelectedProduct)
            }
          >
            {product.name}: {product.price} Taka
          </button>
        </li>
      ))}
    </ol>
  );

  return (
    <div>
      {selectedProduct.id !== -999 ? (
        <ProductDetails
          info={selectedProduct}
          setActiveProduct={setActiveProduct}
          products={products}
          setSelectedProduct={setSelectedProduct}
          changeLoaderState={changeLoaderState}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ) : (
        productList
      )}

      {isLoading === true ? <Loader /> : null}
    </div>
  );
};

const setActiveProduct = (id, products, setSelectedProduct) => {
  const product = products.find((product) => product.id === id);
  if (!product) {
    setSelectedProduct(defaultProduct);
  } else {
    setSelectedProduct(product);
  }
};

const changeLoaderState = (isLoading, setIsLoading) => {
  setIsLoading(!isLoading);
};
