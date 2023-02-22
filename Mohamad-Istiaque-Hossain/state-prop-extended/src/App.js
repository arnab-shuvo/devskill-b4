
import './App.css';
import { Component } from 'react';
import ProductList from './product/ProductList';
import ProductDetails from './product/Product_Detail'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  selectProduct = (product) => {
    this.setState({ product: product });
  }

  render() { 
    return (
      <>
        {this.state.product===undefined
          ?
          <ProductList selectProduct={this.selectProduct} />
          :
          <ProductDetails info={this.state.product} />
        }
      </>
    );
  }
}

export default App;
