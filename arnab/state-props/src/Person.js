import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";

class Person extends Component {
  render() {
    console.log(this.props);
    const { information } = this.props;
    return (
      <div>
        <p>Name: {information.name}</p>
        <p>Location: {information.location}</p>
        <p>Age: {information.age}</p>
        <p>Gender: {information.gender}</p>
      </div>
    );
  }
}

export default Person;
