import React, { Component } from 'react';

class ProfessionalInformation extends Component{
    render() {
        return (
          <div>
            <h2>Hello from ProfessionalInformation</h2>
            <p>phoneNo: { this.props.pri.phoneNo } </p>
            <p>address: { this.props.pri.address }</p>
            <p>skills: { this.props.pri.skills.join(', ') }</p>
          </div>
        );
    }
}

export default ProfessionalInformation;