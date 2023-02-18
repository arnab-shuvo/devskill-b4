import React from "react";

class ProductDetail extends React.Component {
    state = { isLoading: true }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 1000);
    }
    showLoader = () => {
        return <div>
            <div className="container">
                <div className="dot dot-1"></div>
                <div className="dot dot-2"></div>
                <div className="dot dot-3"></div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" />
                    </filter>
                </defs>
            </svg>
        </div>
    }
    render() {
        const { name, description, price, category } = this.props.productDetails;
        return (<div>
            {!this.state.isLoading &&
                <div>
                    <h3>Product Details</h3>
                    <p><b>Name:</b> {name}</p>
                    <p><b>Category:</b> {category}</p>
                    <p><b>Price:</b> {price}</p>
                    <p><b>Description:</b> {description}</p>
                </div>
            }

            {
                this.state.isLoading && this.showLoader()
            }
        </div>
        );
    }
}

export default ProductDetail;