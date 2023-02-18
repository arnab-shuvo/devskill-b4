import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";

class Person extends Component {
  state = {
    name: "",
    location: "",
    age: "",
    gender: "",
  };

  componentDidMount() {
    this.setState({ ...this.props.information });
  }
  render() {
    console.log(this.props);
    const { information } = this.props;
    return (
      <div>
        <p>Location: {information.location}</p>
        <p>Age: {information.age}</p>
        <p>Gender: {information.gender}</p>
        <input
          onChange={(e) =>
            this.setState({ ...this.state, name: e.target.value })
          }
          type={"text"}
          value={this.state.name}
          placeholder="Name"
        />
        <input
          onChange={(e) =>
            this.setState({ ...this.state, location: e.target.value })
          }
          type={"text"}
          placeholder="Location"
          value={this.state.location}
        />
        <input
          onChange={(e) =>
            this.setState({ ...this.state, age: e.target.value })
          }
          type={"text"}
          placeholder="Age"
          value={this.state.age}
        />
        <input
          onChange={(e) =>
            this.setState({ ...this.state, gender: e.target.value })
          }
          type={"text"}
          placeholder="Gender"
          value={this.state.gender}
        />
        <p>Warning</p>
        <button
          onClick={() =>
            this.props.changeMyName(
              this.state.name,
              this.state.location,
              this.state.age,
              this.state.gender
            )
          }
        >
          Change My name
        </button>
      </div>
    );
  }
}

export default Person;
