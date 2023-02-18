import { Component } from "react";

class ProfesisonalInfo extends Component {
  render() {
    return (
      <div>
        <h3>LinkedIn Profile: {this.props.information.linkedInProfile}</h3>
        <h3>Company: {this.props.information.company}</h3>
        <h3>Workplace: {this.props.information.workplace}</h3>
        <h3>Job Title: {this.props.information.jobTitle}</h3>
      </div>
    );
  }
}

export default ProfesisonalInfo;
