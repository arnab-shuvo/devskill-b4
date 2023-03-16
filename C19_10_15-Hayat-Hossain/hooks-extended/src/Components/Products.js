import React, { useEffect, useState } from 'react';
import './Product.css'
import ProductDetails from './ProductDetails';
import { BeatLoader } from 'react-spinners';

const Products = () => {
  const [loading,setLoading]=useState(false)
  const [productIndex,setProductIndex]=useState({
    index: 0,
    visibility:false
  })
  
  const [product,setProduct]=useState([
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
    {
      visibility:true,
      currentproduct:0
    }
  ])
  
  const pageChange= (index)=>{
    const newProduct= [...product]
    newProduct[3].visibility=false
    newProduct[3].currentproduct=index
    setProduct(newProduct)
    
}

useEffect(() => {
 
  setTimeout(() => {
    setProductIndex({index: product[3].currentproduct, visibility:true})

  }, 3000);
}, [productIndex]);

  return (
    <div>
      {
        product[3].visibility && <div className="product">
        <div>
           <img src={product[0].img} alt="" />
           <p>Laptop</p>
           <button onClick={()=>pageChange(0)}> see details</button>
       </div>
       <div>
           <img src={product[1].img} alt="" />
           <p>Laptop</p>
           <button onClick={()=>pageChange(1)} >see details</button>
       </div>
       <div>
           <img src={product[2].img} alt="" />
           <p>Laptop</p>
           <button onClick={()=>pageChange(2)} >see details</button>
       </div>
     </div>
      } 
     
      {
        //cannot set loder
           productIndex.visibility && <ProductDetails information={product[productIndex.index]}></ProductDetails>
    
       
      }

    </div>
  );
};

export default Products;