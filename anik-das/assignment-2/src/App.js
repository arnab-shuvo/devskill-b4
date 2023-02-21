import React from "react";
import ProductPage from "./ProductPage";
import ProductDetailPage from "./ProductDetailPage";

class App extends React.Component {
  render(){
    return(
      <div>
          <ProductPage/>
          <ProductDetailPage />
      </div>
    );
  }
}

export default App;
