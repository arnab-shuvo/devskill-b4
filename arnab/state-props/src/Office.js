import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";

class Office extends Component {
  render() {
    return <div>{this.props.information.name}</div>;
  }
}

export default Office;
