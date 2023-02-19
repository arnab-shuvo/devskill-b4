import "./App.css";
import { Component } from "react";
import { Product } from "./components/Product/product";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Product />
      </>
    );
  }
}

export default App;
