/** @format */
import React from "react";

const Age = (props) => {
  return <p>The age is {props.age}</p>;
};

export default React.memo(Age);
