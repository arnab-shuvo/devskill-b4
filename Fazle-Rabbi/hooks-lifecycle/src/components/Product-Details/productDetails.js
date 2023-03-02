import { useEffect } from "react";

export const ProductDetails = (props) => {
  useEffect(() => {
    props.setIsLoading(true);

    setTimeout(() => {
      props.setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {props.isLoading ? null : (
        <div>
          <h2>Product Details</h2>
          <p>Product Id: {props.info.id}</p>
          <p>Product Name: {props.info.name}</p>
          <p>Product Name: {props.info.price}</p>
          <p>Product Name: {props.info.description}</p>
          <button
            onClick={() =>
              props.setActiveProduct(
                -999,
                props.products,
                props.setSelectedProduct
              )
            }
          >
            Go back
          </button>
        </div>
      )}
    </div>
  );
};
