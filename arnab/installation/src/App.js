import React from "react";
import { Component } from "react";

export class Child1 extends Component {
  componentDidMount() {
    alert("I am A, I am Loading");
  }
  componentWillUnmount() {
    alert("I am Dying, B is Coming");
  }
  render() {
    return <p>I am A</p>;
  }
}

class Child2 extends Component {
  componentWillUnmount() {
    alert("I am Dying, A is Coming");
  }
  componentDidMount() {
    alert("I am B, I am Loading");
  }

  render() {
    return <p>I am B</p>;
  }
}

class Mother extends Component {
  state = {
    show: "A",
  };
  componentDidUpdate() {
    alert("Mother Component is Upadted");
  }
  clicked = () => {
    const newState = this.state.show === "A" ? "B" : "A";
    this.setState({ show: newState });
  };
  render() {
    return (
      <div>
        <p>Hi I am Arnab</p>
        <div>
          <button onClick={this.clicked}>Click Me</button>
          {this.state.show === "A" && <Child1 />}
          {this.state.show === "B" && <Child2 />}
        </div>
      </div>
    );
  }
}

export default Mother;
