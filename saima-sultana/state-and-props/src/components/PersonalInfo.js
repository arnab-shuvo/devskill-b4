import { Component } from 'react';
class PersonalInfo extends Component {
    render() {
        const { name, dob, gender, address } = this.props.personalInfo;
        return (
            <div>
                <h3>Personal Information</h3>
                <p><b>Name:</b> {name}</p>
                <p><b>Date of Birth:</b> {dob}</p>
                <p><b>Gender:</b> {gender}</p>
                <p><b>Address:</b> {address} </p>
            </div>
        );
    }
}

export default PersonalInfo;