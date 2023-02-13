import { Component } from "react";
import Personal from "./Personal";
import Profesisonal from "./Profesisonal";

class Profile extends Component {
  state = {
    personal: {
      type: "Personal",
      age: 10,
      email: "abcd@abcd.com"
    },
    profesisonal: {
      type: "Profesisonal",
      profession: "Student",
      email: "xyz@xyz.com"
    }
  }
  render() {
    return (
      <>
        <div><span>Name: Sakhawat Hossain</span></div>
        <Personal data={ this.state.personal }/>
        <Profesisonal data={ this.state.profesisonal }/>
      </>
    );
  }
}

export default Profile;