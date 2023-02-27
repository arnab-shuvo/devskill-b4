
import { useState } from "react";
import ProductDetails from "./Component/ProductDetails";
import Products from "./Component/Products";

const App = () => {
  const [singlePrd, setSinglePrd] = useState();

  const selectProduct = (prd) => {
    setSinglePrd(prd)
  }
  return (
    <>
      {singlePrd ? <ProductDetails selectProduct={selectProduct} product={singlePrd} /> 
      : 
      <Products selectProduct={selectProduct} />}
    </>
  )
}

export default App;
