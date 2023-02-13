import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import Person from "./Person";
import Office from "./Office";

class App extends Component {
  state = {
    name: "Arnab",
    location: "Dhaka",
    age: 12,
    gender: "Male",
  };
  render() {
    return (
      <>
        <Person information={this.state} />
        <Office information={this.state} />
      </>
    );
  }
}

export default App;
