import React, { Component, useState } from "react";
import ProductDetails from "./ProductDetails";

let uniqueIndex;
let index;

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          name: "Product 1",
          description: "Product 1 Description",
          price: "$100",
          category: "Category 1",
        },
        {
          name: "Product 2",
          description: "Product 2 Description",
          price: "$200",
          category: "Category 2",
        },
        {
          name: "Product 3",
          description: "Product 3 Description",
          price: "$300",
          category: "Category 3",
        },
      ],
      isClicked: false,
    };
  }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ isClicked: true });
//     }, 5000);
//   }

  handleButtonClick = (index) => {
    // window.alert("Hello");
    uniqueIndex = index;
    
    this.setState({ isClicked: true });
    // <ProductDetails information={this.state.products} />;
  };

  render() {
    const { products, isClicked } = this.state;
    // const [isVisible, setIsVisible] = useState(true);


    const productsMap = products.map((product, index) => (
      <div key={index}>
        Name: {product.name} <br />
        Price: {product.price}
        <br />
        <button type="button" id={index} onClick={this.handleButtonClick(index)}>
          Show Details
        </button>
        <br />
        <br />
      </div>
    ));

    return (
      <div>
        
        {isClicked ? <ProductDetails information={products} /> : {productsMap} }
          
        {/* : (
          <div>
            <h1>Product Page</h1>
            {productsMap}
          </div>
        )} */}
        <button type="button" onClick={this.handleButtonClick}>
          Show Details
        </button>
      </div>
    );
  }
}

export default Product;
