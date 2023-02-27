import React from "react";
import { Component } from "react";
import product from "./product.js";
import productdetails from "./productdetails.js";

class App extends Component {
  render(){
    return(
      <div>
          <product/>
          <productdetails />
      </div>
    );
  }
}

export default App;
