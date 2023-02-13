import './App.css';
import { Component } from 'react';
import { Profile } from 'react';
import PersonalInformation from './components/PersonalInformation';
import ProfessionalInformation from './components/ProfessionalInformation';

class App extends Component{
  state = {
    name: "lamia ahmed",
    age: 13,
    gender: "female",
    phoneNo: 51230232132,
    address: "mohammadpur",
    skills: ["C#", "Angular", "React.js"]
}
  render() {
    return(
      <div className="App">
        <PersonalInformation pi = {this.state} />
        <ProfessionalInformation pri = {this.state} />
        {/* <Profile /> */}
      </div>
    );
  }
}

export default App;
