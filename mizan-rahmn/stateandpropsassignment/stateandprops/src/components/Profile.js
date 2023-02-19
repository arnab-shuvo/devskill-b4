import React, { Component } from 'react';
import PersonalInformation from './PersonalInformation';
import ProfessionalInformation from './ProfessionalInformation';

class Profile extends Component {
    // state = {
    //     name: "lamia ahmed",
    //     age: 13,
    //     gender: "female",
    //     phoneNo: 51230232132,
    //     address: "mohammadpur"
    // }

    state = {
        personalInformation: {
            name: "lamia ahmed",
            age: 13,
            gender: "female",
            phoneNo: 51230232132,
            address: "mohammadpur"
        },
        professionalInformation: {
            designation: 'Associate Software Engineer',
            companyName: 'KAZ',
            skills: ['C#', 'Angular', 'Docker', 'Aws']
        }
    }
    render(){
        return(
            <div>
                <PersonalInformation 
                    personalInformation = {this.state.personalInformation}
                />
                <ProfessionalInformation 
                    professionalInformation = {this.state.professionalInformation}
                />
            </div>
        );
    }
}

export default Profile;