import React, { Component } from "react";
import './Product.css'
import ProductDetails from "./ProductDetails";
export default class Products extends Component {
  state = {
    products: [
      {
        category: "laptop",
        name: "3M Gold Privacy Filter for 17\" Widescreen Laptop (16:10) (GF170W1B)",
        seller: "Hp",
        price: "68$",
        stock: 36,
        img: "https://images-na.ssl-images-amazon.com/images/I/415oziPFA0L._AC_US218_.jpg",
      },
      {
        category: "laptop",
        name: "ASUS Chromebook Flip C302CA-DHM4 12.5-Inch Touchscreen Intel Core m3 with 64GB storage and 4GB RAM",
        seller: "Asus",
        price: "600$",
        stock: 40,
        img: "https://images-na.ssl-images-amazon.com/images/I/41LBkDN-S3L._AC_US218_.jpg",
      },
      {
        category: "laptop",
        name: "Samsung Chromebook Plus Convertible Touch Laptop (XE513C24-K01US)",
        seller: "Samsung",
        price: "708$",
        stock: 106,
        img: "https://images-na.ssl-images-amazon.com/images/I/41Ux4186xoL._AC_US218_.jpg",
      },
    ],
    visibility:true,
    position:''
  };
   first=()=>{
        this.setState({...this.state,position:'first',visibility:false})
   }
   second=()=>{
        this.setState({...this.state,position:'second',visibility:false})
   }
   third=()=>{
         this.setState({...this.state,position:'third',visibility:false})
   }
  render() {
    return (

      <>
      {
         this.state.visibility &&  <div className="product">
         <div>
             <img src={this.state.products[0].img} alt="" />
             <p>Laptop</p>
             <button onClick={this.first}>see details</button>
         </div>
         <div>
             <img src={this.state.products[1].img} alt="" />
             <p>Laptop</p>
             <button onClick={this.second}>see details</button>
         </div>
         <div>
             <img src={this.state.products[2].img} alt="" />
             <p>Laptop</p>
             <button onClick={this.third}>see details</button>
         </div>
       </div>
 
      }

      {
            this.state.position==='first' && <ProductDetails information={this.state.products[0]}></ProductDetails>
      }
      {
            this.state.position==='second' && <ProductDetails information={this.state.products[1]}></ProductDetails>
      }

      {
            this.state.position==='third' && <ProductDetails information={this.state.products[2]}></ProductDetails>
      }
      
      </>
    );
  }
}
