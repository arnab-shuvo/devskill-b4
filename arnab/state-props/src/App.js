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

  changeMyName = (name, location, age, gender) => {
    const dummyState = { ...this.state };
    dummyState.name = name;
    dummyState.location = location;
    dummyState.age = age;
    dummyState.gender = gender;
    this.setState(dummyState);
  };
  render() {
    return (
      <>
        <Person information={this.state} changeMyName={this.changeMyName} />
        <Office information={this.state} />
      </>
    );
  }
}

export default App;
