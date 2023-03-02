import { useState, useEffect } from "react";
import "./common.css";

function ProductDetails(props) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if(props.product) {
      setTimeout(() => {
        setProduct(props.product);
      }, 3000);
    }
  }, []);

  return (
    <>
        {
            product?
            <div>
                <div>name : {product.name}</div>
                <div>description: {product.description}</div>
                <div>price: {product.price}</div>
                <div>category: {product.category}</div>
            </div>:
            <div className="LoaderBalls">
              <div className="LoaderBalls__item"></div>
              <div className="LoaderBalls__item"></div>
              <div className="LoaderBalls__item"></div>
            </div>
        }
        <input type="button" onClick={() => props.setSelected(null)} value="Back" className="backBtn"></input>
      </>
  );
}

export default ProductDetails;
