import logo from './logo.svg';
import { Component } from "react";
import './App.css';
import Profile  from "./Profile";
import Personal  from "./Personal";
import Professional  from "./Professional";

class App extends Component {
  state = {
    name: "Miraz",
  };
  render() {
    return (
    <>
     <Profile information={this.state} />;
    <Personal/>
    <Personal/>
    <Professional/>
    </>
    );
  }
}

export default App;
