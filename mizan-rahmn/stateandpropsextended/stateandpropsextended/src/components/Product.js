import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import Loader from './loader';

const demoProduct = {
    id: -1000,
    name: "",
    category: "",
    price: 0,
    description: ""
};

class Product extends Component {

    state  = {
        products: [
            {id: 0,
            name: 'iPhone 14 Pro Max(256GB)',
            category: 'Mobile',
            price: 169000,
            description: 'Product Description',
            },
            {id: 1,
            name: 'iPhone 13 Pro Max(256GB)',
            category: 'Mobile',
            price: 129000,
            description: 'Product Description',
            },
            {id: 2,
            name: 'OnePlus 10 Pro',
            category: 'Mobile',
            price: 99000,
            description: 'Product Description',
            },
            {id: 3,
            name: 'MacBook Pro',
            category: 'Laptop',
            price: 210000,
            description: 'Product Description',
            },
        ],
        selectedProduct: demoProduct,
        isLoading: false,
    }

    setProduct = (id) => {
        const product = this.state.products.find((product) => product.id === id);
        if (!product) {
          this.setState({
            ...this.state,
            selectedProduct: demoProduct,
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
            <h2>Product List</h2>
            {products.map((product) => (
              <li key={product.id}>
                <button onClick={() => this.setProduct(product.id)}>
                  {product.name}: {product.price} BDT
                </button>
              </li>
            ))}
          </ol>
        );
    
        return (
          <div>
            {this.state.selectedProduct.id !== -1000 ? (
              <ProductDetails
                productInfo={this.state.selectedProduct}
                isLoading={this.state.isLoading}
                setActiveProduct={this.setProduct}
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

export default Product;