import { Component } from "react";
import { ProductDetails } from "../Product-Details/productDetails";

export class Product extends Component {
  state = {
    products: [
      { id: 0, name: "Laptop", price: 50000, description: "This is a laptop" },
      { id: 1, name: "Mobile", price: 15000, description: "This is a mobile" },
      { id: 2, name: "Watch", price: 2000, description: "This is a watch" },
      { id: 3, name: "Camera", price: 25000, description: "This is a camera" },
      {
        id: 4,
        name: "Headphone",
        price: 1000,
        description: "This is a headphone",
      },
      {
        id: 5,
        name: "Keyboard",
        price: 500,
        description: "This is a keyboard",
      },
    ],
    selectedProduct: {
      id: -999,
      name: "",
      price: 0,
      description: "",
    },
  };

  componentDidUpdate() {
    alert("Showing Product Details");
  }

  setActiveProduct = (id) => {
    this.setState({ ...this.state, selectedProduct: this.state.products[id] });
  };
  render() {
    const products = this.state.products;
    const productList = (
      <ol>
        <h2>Products</h2>
        <li>
          <button onClick={() => this.setActiveProduct(products[0].id)}>
            {products[0].name} ----------- {products[0].price}
          </button>
        </li>
        <li>
          <button onClick={() => this.setActiveProduct(products[1].id)}>
            {products[1].name} ----------- {products[1].price}
          </button>
        </li>
        <li>
          <button onClick={() => this.setActiveProduct(products[2].id)}>
            {products[2].name} ----------- {products[2].price}
          </button>
        </li>
        <li>
          <button onClick={() => this.setActiveProduct(products[3].id)}>
            {products[3].name} ----------- {products[3].price}
          </button>
        </li>
        <li>
          <button onClick={() => this.setActiveProduct(products[4].id)}>
            {products[4].name} ----------- {products[4].price}
          </button>
        </li>
        <li>
          <button onClick={() => this.setActiveProduct(products[5].id)}>
            {products[5].name} ----------- {products[5].price}
          </button>
        </li>
      </ol>
    );
    return (
      <div>
        {this.state.selectedProduct.id !== -999 ? (
          <ProductDetails info={this.state.selectedProduct} />
        ) : (
          productList
        )}
      </div>
    );
  }
}
