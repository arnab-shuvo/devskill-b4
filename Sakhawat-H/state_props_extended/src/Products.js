import { Component } from "react";

class Products extends Component {
  state = {
    products: [
      {
        name: "Product 1 Name",
        description: "Product 1 Description",
        price: "price 1",
        category: "Product 1 Category",
      },
      {
        name: "Product 2 Name",
        description: "Product 2 Description",
        price: "price 2",
        category: "Product 2 Category",
      },
      {
        name: "Product 3 Name",
        description: "Product 3 Description",
        price: "price 3",
        category: "Product 3 Category",
      },
    ],
  };
  render() {
    return (
      <>
        { this.state.products.map((product) => {
            return (
            <div onClick={() => this.props.selectProduct(product)}>
                <div>name : {product.name}</div>
                {/* <div>description: {product.description}</div> */}
                <div>price: {product.price}</div>
                {/* <div>category: {product.category}</div> */}
            </div>
            );
        })}
      </>
    );
  }
}

export default Products;
