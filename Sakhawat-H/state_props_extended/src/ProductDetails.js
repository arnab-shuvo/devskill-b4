import { Component } from "react";
import "./ProductDetails.css";

class ProductDetails extends Component {
  state = {
    product: null,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({product: this.props.product});
    }, 3000);
  }
  render() {
    return (
      <>
        {
            this.state.product?
            <div>
                <div>name : {this.state.product.name}</div>
                <div>description: {this.state.product.description}</div>
                <div>price: {this.state.product.price}</div>
                <div>category: {this.state.product.category}</div>
            </div>:
            <div className="LoaderBalls">
              <div className="LoaderBalls__item"></div>
              <div className="LoaderBalls__item"></div>
              <div className="LoaderBalls__item"></div>
            </div>
        }
        <input type="button" onClick={() => this.props.selectProduct(null)} value="Back" className="backBtn"></input>
      </>
    );
  }
}

export default ProductDetails;
