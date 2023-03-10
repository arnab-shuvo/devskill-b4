import React, { Component } from "react";
import Loader from "./Loader";

class ProductPage extends Component {
  state = {
    products: [
      {
        name: "Product A",
        description: "This is product A",
        price: "$9.99",
        category: "Category A",
      },
      {
        name: "Product B",
        description: "This is product B",
        price: "$19.99",
        category: "Category B",
      },
      {
        name: "Product C",
        description: "This is product C",
        price: "$29.99",
        category: "Category C",
      },
    ],

    showLoader: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ ...this.state, showLoader: false });
    }, 2000);
  }

  render() {
    return (
      <>
        {this.state.showLoader ? (
          <Loader />
        ) : (
          <div>
            <h1>Product Page</h1>
            <ul>
              {this.state.products.map((product) => (
                <li key={product.name}>
                  <h2>{product.name}</h2>
                  <p>{product.price}</p>
                  <button onClick={() => this.props.selectProduct({ product })}>
                    Click Me
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default ProductPage;
