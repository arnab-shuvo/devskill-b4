import react, { Component} from "react";

class ProductDetails extends Component {
    

    render() {

        const {name, description, price, category } = this.props.information;
        return (
            <div>
                <p>Name: {this.props.information.name}</p>
                <p>Description: {description}</p>
                <p>Price: {price}</p>
                <p>Category: {category}</p>
            </div>
        )
    }
}

export default ProductDetails;