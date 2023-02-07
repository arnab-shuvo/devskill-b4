import { Component } from "react";
import Personal from "./Personal";
import Professional from "./Professional";
class Profile extends Component {
  state = {
    personal: {
      name: "Md Ashad",
      gender: "Male",
      age: 26,
    },
    professional: {
      organization: "Abc",
      responsibility: "Abc",
      contact: "abc@mail.com",
    },
  };
  render() {
    return (
      <>
        <Personal personal={this.state.personal} />
        <Professional professional={this.state.professional} />
      </>
    );
  }
}
export default Profile;
