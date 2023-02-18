import ProductPage from "./Components/Products";
import { Component } from "react";
import ProductDetails from "./Components/ProductDetails";

class App extends Component {
  state = {
    product: null,
  };
  selectProduct = (product) => {
    this.setState(product);
  };
  render() {
    return (
      <>
        {this.state.product ? (
          <ProductDetails
            selectProduct={this.selectProduct}
            product={this.state.product}
          />
        ) : (
          <ProductPage selectProduct={this.selectProduct} />
        )}
      </>
    );
  }
}

export default App;
