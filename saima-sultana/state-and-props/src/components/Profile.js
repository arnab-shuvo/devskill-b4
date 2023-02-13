import { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo';

class Profile extends Component {
    state = {
        personalInfo: {
            name: 'Saima Sultana',
            dob: '11th October, 1997',
            gender: 'Female',
            address: 'Shahjadpur, Dhaka'
        },
        professionalInfo: {
            designation: 'Junior Full Stack Engineer',
            company: 'Altersense Limited',
            yoe: 1
        }
    }
    render() {
        return (<>
            <PersonalInfo personalInfo={this.state.personalInfo} />
            <ProfessionalInfo professionalInfo={this.state.professionalInfo} />
        </>);
    }
}

export default Profile;