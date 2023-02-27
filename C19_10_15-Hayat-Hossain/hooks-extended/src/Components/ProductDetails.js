import React from 'react';

const ProductDetails = (props) => {
  const {category,name,seller,price,stock,img}=props.information;

  return (
    <div style={{textAlign:'center'}}>
           <img src={img} alt="" />
           <p>Name: {name}</p>
           <p>Category: {category}</p>
           <p>Seller: {seller}</p>
           <p>Price: {price}</p>
           <p>Stock: {stock}</p>
           
    </div>
  );
};

export default ProductDetails;