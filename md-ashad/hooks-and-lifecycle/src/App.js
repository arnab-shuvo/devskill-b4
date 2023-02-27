import ProductPage from "./Components/Products";
import { useState } from "react";
import ProductDetails from "./Components/ProductDetails";

function App() {
  let [selectedProduct, setSelectedProduct] = useState(null);

  const setProduct = (selectedProduct) => {
    setSelectedProduct(selectedProduct);
  };
  console.log("from app");

  return (
    <>
      {selectedProduct ? (
        <ProductDetails selectedProduct={selectedProduct} />
      ) : (
        <ProductPage setProduct={setProduct} />
      )}
    </>
  );
}

export default App;
