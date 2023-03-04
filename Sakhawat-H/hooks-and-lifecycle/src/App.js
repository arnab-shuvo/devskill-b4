import { useState } from "react";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const setSelected = (product) => {
    setSelectedProduct(product);
  }

  return (
    <div className="App">
      {(selectedProduct ?
          <ProductDetails setSelected={setSelected} product={selectedProduct}/>
          : <Products setSelected={setSelected}/>)}
    </div>
  );
}

export default App;
