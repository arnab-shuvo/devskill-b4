import { Component } from "react";

class Personal extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Personal Infomation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name :</td>
            <td>{this.props.personal.name}</td>
          </tr>
          <tr>
            <td>Gender :</td>
            <td>{this.props.personal.gender}</td>
          </tr>
          <tr>
            <td>Age :</td>
            <td>{this.props.personal.age}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default Personal;
