/** @format */
import React from "react";

const Counter = (props) => {
  return (
    <>
      <p>The Counter is : {props.counter}</p>
      <button onClick={props.myFunction}>Click Log</button>
    </>
  );
};

export default React.memo(Counter);
