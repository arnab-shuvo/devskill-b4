import { Component } from "react";

export class ProductDetails extends Component {
  render() {
    return (
      <div>
        <h2>Product Details</h2>
        <p>Product Name: {this.props.info.id}</p>
        <p>Product Name: {this.props.info.name}</p>
        <p>Product Name: {this.props.info.price}</p>
        <p>Product Name: {this.props.info.description}</p>
      </div>
    );
  }
}
