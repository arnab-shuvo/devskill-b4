import { useEffect } from "react";

const ProductDetail = (props) => {
  useEffect(() => {
    props.setIsLoading(true);

    setTimeout(() => {
      props.setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      {props.isLoading ? null : (
        <div>
          <h2>Product Details</h2>
          <p>Id: {props.info.id}</p>
          <p>Name: {props.info.name}</p>
          <p>Price: {props.info.price}</p>
          <p>Category: {props.info.category}</p>
          <p>Description: {props.info.description}</p>
          <button
            onClick={() =>
              props.setActiveProduct(
                -1000,
                props.products,
                props.setSelectedProduct
              )
            }
          >
            Back to List
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;