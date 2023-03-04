import { Component } from "react";

class ProductDetails extends Component {
  componentDidMount() {
    this.props.changeLoaderState();

    setTimeout(() => {
      this.props.changeLoaderState();
    }, 2500);
  }

  render() {
    console.log(this.props.productInfo);
    return (
      <div>
        {this.props.isLoading ? null : (
          <div>
            <h2>Product Details</h2>
            <p>Id: {this.props.productInfo.id}</p>
            <p>Name: {this.props.productInfo.name}</p>
            <p>Category: {this.props.productInfo.category}</p>
            <p>Price: {this.props.productInfo.price}</p>
            <p>Description: {this.props.productInfo.description}</p>
            <button onClick={() => this.props.setActiveProduct(-1000)}>
              Back to Product List
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ProductDetails;