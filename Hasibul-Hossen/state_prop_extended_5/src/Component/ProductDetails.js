import { Component } from "react";
import PreLoader from "./PreLoader";

class ProductDetails extends Component {
    state = {
        showPreloader: true,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ ...this.state, showPreloader: false });
        }, 1500);
    }
    render() {
        const { id, name, brand, price, quality } = this.props.product;
        return (
            <>
                {this.state.showPreloader ? (
                    <PreLoader />
                ) : (
                    <div className="products-main">
                        <h1>Product Details</h1>
                            <div className="product" key={id}>
                                <span>Product Name : {name}</span>
                                <span>Product Brand : {brand}</span>
                                <span>Product Price : {price}</span>
                                <span>Product quality : {quality}</span>
                            </div>
                    </div>
                )}
            </>
        )
    }
}

export default ProductDetails;