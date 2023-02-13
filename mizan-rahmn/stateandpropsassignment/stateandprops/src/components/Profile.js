import React, { Component } from 'react';
import { PersonalInformation } from './PersonalInformation';
import { ProfessionalInformation } from './ProfessionalInformation';

class Profile extends Component {
    state = {
        name: "lamia ahmed",
        age: 13,
        gender: "female",
        phoneNo: 51230232132,
        address: "mohammadpur"
    }
    render(){
        return(
            <div>
                <PersonalInformation 
                    pi = {this.state}
                />
                <ProfessionalInformation 
                    pri = {this.state}
                />
            </div>
        );
    }
}

export default Profile;

// import React, { useState } from 'react';

// // Define the PersonalInformation component
// const PersonalInformation = (props) => {
//   return (
//     <div>
//       <h3>Personal Information:</h3>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//       <p>Address: {props.address}</p>
//     </div>
//   );
// };

// // Define the ProfessionalInformation component
// const ProfessionalInformation = (props) => {
//   return (
//     <div>
//       <h3>Professional Information:</h3>
//       <p>Occupation: {props.occupation}</p>
//       <p>Company: {props.company}</p>
//       <p>Experience: {props.experience} years</p>
//     </div>
//   );
// };

// // Define the PROFILE component
// const Profile = () => {
//   // Define the state for personal and professional information
//   const [personalInformation, setPersonalInformation] = useState({
//     name: 'John Doe',
//     age: 30,
//     address: '123 Main Street',
//   });

//   const [professionalInformation, setProfessionalInformation] = useState({
//     occupation: 'Software Engineer',
//     company: 'Acme Inc',
//     experience: 5,
//   });

//   return (
//     <div>
//       <PersonalInformation
//         name={personalInformation.name}
//         age={personalInformation.age}
//         address={personalInformation.address}
//       />
//       <ProfessionalInformation
//         occupation={professionalInformation.occupation}
//         company={professionalInformation.company}
//         experience={professionalInformation.experience}
//       />
//     </div>
//   );
// };

// export default Profile;