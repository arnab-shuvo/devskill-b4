import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";

const Office = (props) => {
  return (
    <div>
      <h2>
        Name: <b>{props.information.name}</b>
      </h2>
    </div>
  );
};

export default Office;
