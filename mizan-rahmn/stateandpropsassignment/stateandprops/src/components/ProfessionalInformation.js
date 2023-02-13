import React, { Component } from 'react';

class ProfessionalInformation extends Component{
    render() {
        console.log(this.props, "==this.props");
        return (
          <div>
            <h2>Hello from ProfessionalInformation</h2>
            <p>designation: { this.props.professionalInformation.designation } </p>
            <p>companyName: { this.props.professionalInformation.companyName }</p>
            <p>skills: { this.props.professionalInformation.skills.join(', ') }</p>
          </div>
        );
    }
}

export default ProfessionalInformation;