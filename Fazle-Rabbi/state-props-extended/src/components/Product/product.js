import { Component } from "react";
import { ProductDetails } from "../Product-Details/productDetails";
import { Loader } from "../Loader/loader";

const defaultProduct = {
  id: -999,
  name: "",
  price: 0,
  description: "",
};

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
    selectedProduct: defaultProduct,
    isLoading: false,
  };

  setActiveProduct = (id) => {
    const product = this.state.products.find((product) => product.id === id);
    if (!product) {
      this.setState({
        ...this.state,
        selectedProduct: defaultProduct,
      });
    } else {
      this.setState({ ...this.state, selectedProduct: product });
    }
  };

  changeLoaderState = () => {
    this.setState({ ...this.state, isLoading: !this.state.isLoading });
  };

  render() {
    const products = this.state.products;
    const productList = (
      <ol style={{ lineHeight: "2em" }}>
        <h2>Products</h2>
        {products.map((product) => (
          <li key={product.id}>
            <button onClick={() => this.setActiveProduct(product.id)}>
              {product.name}: {product.price} Taka
            </button>
          </li>
        ))}
      </ol>
    );

    return (
      <div>
        {this.state.selectedProduct.id !== -999 ? (
          <ProductDetails
            info={this.state.selectedProduct}
            isLoading={this.state.isLoading}
            setActiveProduct={this.setActiveProduct}
            changeLoaderState={this.changeLoaderState}
          />
        ) : (
          productList
        )}

        {this.state.isLoading === true ? <Loader /> : null}
      </div>
    );
  }
}
