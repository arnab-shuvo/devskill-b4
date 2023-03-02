import React, { useState, useEffect } from "react";
import Loader from "./Loader";

function ProductPage({ setProduct }) {
  const [showLoader, setShowLoader] = useState(true);
  let [products] = useState([
    {
      name: "Product A",
      description: "This is product A",
      price: "$9.99",
      category: "Category A",
    },
    {
      name: "Product B",
      description: "This is product B",
      price: "$19.99",
      category: "Category B",
    },
    {
      name: "Product C",
      description: "This is product C",
      price: "$29.99",
      category: "Category C",
    },
  ]);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
      console.log("from pruducts useEffect in settimeout");
    }, 2000);
  }, []);
  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <div>
          <h1>Product Page</h1>
          <ul>
            {products.map((product) => (
              <li key={product.name}>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <button onClick={() => setProduct(product)}>Click Me</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default ProductPage;
