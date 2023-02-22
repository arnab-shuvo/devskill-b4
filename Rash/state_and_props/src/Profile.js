// This assignment is designed to allow you to demonstrate your skill and understanding over State and Props in React Js.

// Task:

// 1. Create a new project with CRA (create-react-app).
// 2. Make 1 component named PROFILE. This component should have two child components. One for personal information and another one for profesisonal information.
// 3. The Parent component will hold all the information for both of the components as STATE and pass it to the child components as PROPS.

import { Component } from "react";
import PersonalInformation from "./PersonalInformation";
import ProfesisonalInfo from "./ProfessionalInfo";

class Profile extends Component {
  personalInfo = {
    name: "Jack",
    age: "67",
    gender: "male",
    location: "Tokyo",
  };

  professionalInfo = {
    linkedInProfile: "www.linkedin.com/jack123",
    company: "freebie.com",
    workplace: "Tokyo city",
    jobTitle: "React Developer",
  };

  render() {
    return (
      <div>
        <h1>Personal Information</h1>
        <PersonalInformation information={this.personalInfo} />

        <h1>Professional Information</h1>

        <ProfesisonalInfo information={this.professionalInfo} />
      </div>
    );
  }
}

export default Profile;
