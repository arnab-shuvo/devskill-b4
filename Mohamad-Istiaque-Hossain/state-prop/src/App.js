import { Component } from 'react';
import './App.css';
import Personal from './Personal';
import Profesisonal from './Profesisonal';

class App extends Component {
  state= {
    personal:{
      name: "Mohammad Istiaque Hossain",
      age: 31,
      sex: "malet",
      address:"Dhaka"
    },
    profesisonal:{
      designation:"Executive",
      responsibility: "Software Development",
      organization: "Friendship NGO"
    }
  }
  render() {

    return (
      <div> 
        <Personal info={this.state.personal}/>
        <Profesisonal info={this.state.profesisonal}/>
      </div>
    );
  }
}

export default App;
