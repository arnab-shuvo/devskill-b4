import React from "react";
import { Component } from "react";
import {CircleLoader} from "react-spinners";
import productdetails from "./productdetails.js";

class product extends Component{

state  = {
    products: [
{name: 'product - 01',
details: 'product details...',
price: '1000',
category: 'all',
},
{
name: 'product - 02',
details: 'product details...',
price: '2000',
category: 'all',
},
{
name: 'product - 03',
details: 'product details...',
price: '3000',
category: 'all',
},
    ]
}

componentDidMount() {
    setTimeout(() => {
        this.setState({
            products: [
                {
                    name: 'product - 01',
                    details: 'product details...',
                    price: '1000',
                    category: 'all',
                },
                {
                    name: 'product - 02',
                    details: 'product details...',
                    price: '2000',
                    category: 'all',
                },
                {
                    name: 'product - 03',
                    details: 'product details...',
                    price: '3000',
                    category: 'all',
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
            <h3>{this.state.products[0].name}</h3>
            <h3>{this.state.products[1].name}</h3>
            <h3>{this.state.products[2].name}</h3>
            {!this.state.products.length ? <CircleLoader /> :(
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
export default product;