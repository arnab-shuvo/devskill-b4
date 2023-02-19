import { Component } from "react";
import ProductDetails from "./Component/ProductDetails";
import Products from "./Component/Products";

class App extends Component {
  state = {
    product: null
  }
  selectProduct = (product) => {
    this.setState(product);
  }
  render() {
    return (
      <>
        {this.state.product ? (
          <ProductDetails selectProduct={this.selectProduct} product={this.state.product} />
        ) : (
          <Products selectProduct={this.selectProduct} />
        )}
      </>
    );
  }
}

export default App;
