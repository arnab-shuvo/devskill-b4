import { Component } from 'react'; 
import Personal from './Personal';
import Professional from './Professional';  

class Profile extends Component {
    state= {
        personal:{
          name: "Mohammad Istiaque Hossain",
          age: 31,
          sex: "male",
          address:"Dhaka"
        },
        professional:{
          designation:"Executive",
          responsibility: "Software Development",
          organization: "Friendship NGO"
        }
      }
  render() { 
    return (
      <div>
        <h1>Profile</h1>
        <hr/>
        <Personal info={this.state.personal}/>
        <Professional info={this.state.professional}/>
      </div>
    );
  }
}

export default Profile;