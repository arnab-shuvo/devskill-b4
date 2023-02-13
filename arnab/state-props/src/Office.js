import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";

class Office extends Component {
  render() {
    return (
      <div>
        <h2>
          Name: <b>{this.props.information.name}</b>
        </h2>
      </div>
    );
  }
}

export default Office;
