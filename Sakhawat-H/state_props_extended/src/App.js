import { Component } from "react";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

class App extends Component {
  state = {
    product: null,
  };
  selectProduct = (product) => {
    this.setState({product: product});
  }
  render() {
    return (
      <>
        {
          this.state.product?
          <ProductDetails selectProduct={this.selectProduct} product={this.state.product}/>:
          <Products selectProduct={this.selectProduct}/>
        }
      </>
    );
  }
}

export default App;
