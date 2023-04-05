/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./Reducer/counterSlice";
import { listOfProduct } from "./Reducer/productSlice";
import { getAllProduct } from "./Action/product";

const App = () => {
  // const count = useSelector((store) => store.counter.count);
  const products = useSelector((store) => store.products.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    // axios.get("https://api.escuelajs.co/api/v1/products").then((res) => {
    //   dispatch(listOfProduct(res.data));
    //   dispatch(increment(res.data));
    // });
    dispatch(getAllProduct());
  }, []);

  return (
    <div>
      <div>
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
