import React from "react";
import {SpinnerCircular} from "spinners-react"
import ProductDetailPage from "./ProductDetailPage";

class ProductPage extends React.Component{

state  = {
    products: [],
    isProductDetails: false
}

componentDidMount() {
    setTimeout(() => {
        this.setState({
            products: [
                {
                    name: 'T-Shirt',
                    description: 'Cotton T-shirt for men.',
                    price: '450',
                    category: 'Clothing',
                },
                {
                    name: 'Laptop',
                    description: 'Core i3 Laptop of HP Brand.',
                    price: '55000',
                    category: 'Electronic Device',
                },
                {
                    name: 'Milk and Honey',
                    description: 'A famous book by Rupi Kaur.',
                    price: '350',
                    category: 'Book',
                },
            ]
        })
    }, 2000);
}

render(){
    console.log(this.state);
    return(
        <div>
            <h2>Product Page</h2>
            {!this.state.products.length ? <SpinnerCircular /> :(
                this.state.products.map(product => {
                    return (
                        <div key={product.name}>
                            <h3>Product Name: {product.name}, Product Price: {product.price}</h3>
                        </div>
                    )
                })
            )
            }
        </div>
    );
    }
}

export default ProductPage;