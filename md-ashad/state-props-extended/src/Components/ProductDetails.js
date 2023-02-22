import { Component } from "react";
import Loader from "./Loader";

class ProductDetails extends Component {
  state = {
    showLoader: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ ...this.state, showLoader: false });
    }, 2000);
  }
  render() {
    const { name, description, price, category } = this.props.product;
    return (
      <>
        {this.state.showLoader ? (
          <Loader />
        ) : (
          <div>
            <ul>
              <li key={name}>
                <h2>{name}</h2>
                <p>{name}</p>
                <p>{description}</p>
                <p>{price}</p>
              </li>
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default ProductDetails;
