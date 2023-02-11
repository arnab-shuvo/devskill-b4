import React, { Component } from 'react';

class PersonalInformation extends Component{
    render() {
        console.log(this.props, "==this.props");
        return (
          <div>
            <h2>Hello from PersonalInformation</h2>
            <p>name: { this.props.pi.name }</p>
            <p>age: { this.props.pi.age }</p>
            <p>gender: { this.props.pi.gender }</p>
          </div>
        );
    }
}

export default PersonalInformation;