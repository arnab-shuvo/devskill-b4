import { Component } from "react";

class ProductDetails extends Component {
  state = {
    product: null,
  };
  componentDidMount() {
    this.setState({product: this.props.product});
  }
  render() {
    return (
      <>
        {
            this.state.product?
            <div>
                <div>name : {this.state.product.name}</div>
                <div>description: {this.state.product.description}</div>
                <div>price: {this.state.product.price}</div>
                <div>category: {this.state.product.category}</div>
            </div>:
            <div>Loading...</div>
        }
        <input type="button" onClick={() => this.props.selectProduct(null)} value="Back"></input>
      </>
    );
  }
}

export default ProductDetails;
