import React from "react";
import ProductPage from "./ProductPage";

class ProductDetailPage extends React.Component {
    render() {
        const {name, price, description, category} = this.props.product
        return(
            <div>
                <h2>Product Details Page</h2>
                <h3>{name}</h3>
                <h3>{description}</h3>
                <h3>{category}</h3>
                <h3>{price}</h3>
            </div>
        );
    }
}

export default ProductDetailPage;