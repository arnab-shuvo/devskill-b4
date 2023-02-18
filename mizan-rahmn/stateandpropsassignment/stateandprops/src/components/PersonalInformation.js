import React, { Component } from 'react';

class PersonalInformation extends Component{
    render() {
        console.log(this.props, "==this.props");
        return (
          <div>
            <h2>Hello from PersonalInformation</h2>
            <p>name: { this.props.personalInformation.name }</p>
            <p>age: { this.props.personalInformation.age }</p>
            <p>gender: { this.props.personalInformation.gender }</p>
            <p>phoneNo: { this.props.personalInformation.phoneNo }</p>
            <p>address: { this.props.personalInformation.address }</p>
          </div>
        );
    }
}

export default PersonalInformation;