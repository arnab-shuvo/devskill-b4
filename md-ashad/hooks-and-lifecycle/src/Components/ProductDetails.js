import { useEffect, useState } from "react";
import Loader from "./Loader";

function ProductDetails({ selectedProduct }) {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    if (selectedProduct) {
      setTimeout(() => {
        setShowLoader(false);
      }, 500);
    }
  }, []);
  const { name, description, price, category } = selectedProduct;
  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <div>
          <ul>
            <li key={name}>
              <h2>{name}</h2>
              <p>{name}</p>
              <p>{description}</p>
              <p>{price}</p>
              <p>{category}</p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
