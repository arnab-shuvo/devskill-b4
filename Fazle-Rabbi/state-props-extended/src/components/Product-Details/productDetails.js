import { Component } from "react";

export class ProductDetails extends Component {
  componentDidMount() {
    this.props.changeLoaderState();

    setTimeout(() => {
      this.props.changeLoaderState();
    }, 3000);
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? null : (
          <div>
            <h2>Product Details</h2>
            <p>Product Id: {this.props.info.id}</p>
            <p>Product Name: {this.props.info.name}</p>
            <p>Product Name: {this.props.info.price}</p>
            <p>Product Name: {this.props.info.description}</p>
            <button onClick={() => this.props.setActiveProduct(-999)}>
              Go back
            </button>
          </div>
        )}
      </div>
    );
  }
}
