import React, { useState, useEffect } from "react";

const Office = (props) => {
  useEffect(() => {
    console.log("UseEffect in Office");
  }, [props.location]);

  return (
    <>
      <h5>This is Office Page</h5>
      <p>My Office is at: {props.location}</p>
    </>
  );
};

export default Office;
