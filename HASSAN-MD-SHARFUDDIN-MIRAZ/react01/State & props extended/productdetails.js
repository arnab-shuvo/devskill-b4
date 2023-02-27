import React from "react";
import { Component } from "react";
import product from "./product.js";

class productdetails extends Component {
    render() {
        const {name, price, description, category} = this.props.product
        return(
            <div>
                <h2>Product Details Page</h2>
                <h3>{name}</h3>
                <h4>{description}</h4>
                <h4>{category}</h4>
                <h4>{price}</h4>
            </div>
        );
    }
}

export default productdetails;