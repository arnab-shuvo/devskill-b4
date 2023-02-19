import { Component } from "react";
import PreLoader from "./PreLoader";

class Products extends Component {
    state = {
        products: [
            {
                id: 1,
                name: "Samsung A59",
                brand: "Samsung",
                price: "$300",
                quality: "primium",
            },
            {
                id: 2,
                name: "Redmi Note10",
                brand: "Redmi",
                price: "$300",
                quality: "primium",
            },
            {
                id: 3,
                name: "Dell inspiron-3567",
                brand: "Dell",
                price: "$700",
                quality: "primium",
            },
            {
                id: 4,
                name: "HP L120",
                brand: "HP",
                price: "$800",
                quality: "primium",
            }
        ],
        showPreloader: true
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                ...this.state,
                showPreloader: false
            })
        }, 1500);
    }
    render() {
        return (
            <>
                {this.state.showPreloader ? (
                    <PreLoader />
                ) : (
                    <div className="products-main">
                        <h1>All Product</h1>
                        <div className="products-wrapper">
                            {this.state.products.map((product) => (
                                <div className="product" key={product.id}>
                                    <span>Name : {product.name}</span>
                                    <span>Brand : {product.brand}</span>
                                    <span>Price : {product.price}</span>
                                    <span>quality : {product.quality}</span>
                                    <button onClick={() => this.props.selectProduct({ product })}>
                                        Product Details
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </>
        )
    }
}

export default Products;