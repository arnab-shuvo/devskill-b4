import { Component } from "react";
class Professional extends Component {
  render() {
    return (
      <table>
        <thead>
          <th>Professional Information</th>
        </thead>
        <tbody>
          <tr>
            <td>Organization Name</td>
            <td>{this.props.professional.organization}</td>
          </tr>
          <tr>
            <td>Responsibility</td>
            <td>{this.props.professional.responsibility}</td>
          </tr>
          <tr>
            <td>Contact</td>
            <td>{this.props.professional.contact}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default Professional;
