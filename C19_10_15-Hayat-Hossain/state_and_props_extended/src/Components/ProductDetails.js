import React, { Component } from 'react'

export default class ProductDetails extends Component {
  render() {
    const {category,name,seller,price,stock,img}=this.props.information;
    return (
      <div style={{textAlign:'center'}}>
           <img src={img} alt="" />
           <p>Name: {name}</p>
           <p>Category: {category}</p>
           <p>Seller: {seller}</p>
           <p>Price: {price}</p>
           <p>Stock: {stock}</p>
           
      </div>
    )
  }
}
