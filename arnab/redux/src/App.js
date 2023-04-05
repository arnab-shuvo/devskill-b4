/** @format */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "./Action/product";
import { userLogin } from "./Action/user";

const App = () => {
  const products = useSelector((store) => store.products.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(userLogin())}>Login</button>
        {/* <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(100))}
        >
          Increament by 100
        </button> */}
        {products.length && <>Product List length: {products.length}</>}
      </div>
    </div>
  );
};

export default App;
