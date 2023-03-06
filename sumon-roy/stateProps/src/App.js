import logo from './logo.svg';
import React,{ Component } from 'react';
import './App.css';
import Person from "./Person";
import Office from "./Office";
import Routine from "./Routine";


class App extends Component {
  state={
    name:"Sumon",
    location:"Chittagong",
    age:"20",
    gender:"Male",
    weekend:"Friday and Saturday",

  };

  /*clicked=()=>
  {
    const mystate=this.state;
    mystate.name="Sumon";
    this.setState(mystate);
  }*/
  render(){
    return (
    <>
      <Person information={this.state}/>
      <Office/>
      <Routine information={this.state}/>
    </>
    /*(
      <div>
        <p>Hi {this.state.name}</p>
        <button onClick={this.clicked}>Click Me</button>
      </div>
    )*/
    );
  }

}

export default App;
