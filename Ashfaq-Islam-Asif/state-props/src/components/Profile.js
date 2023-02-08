import { Component } from 'react';
import Personal from './Personal';
import Professional from './Professional';

class Profile extends Component {
    state = {
        personalInfo: {
            name: 'Asif',
            location: 'Bangladesh',
            age: 26,
            gender: 'Male',
        },
        professionalInfo: {
            profession: 'Software Engineer',
            experience: '2+ years',
        },
    };
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <Personal info={this.state.personalInfo} />
                <Professional info={this.state.professionalInfo} />
            </div>
        );
    }
}

export default Profile;
