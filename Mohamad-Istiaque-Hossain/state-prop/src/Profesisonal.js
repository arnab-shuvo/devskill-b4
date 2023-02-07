import { Component } from 'react';
import './App.css';

class Profesisonal extends Component {
  render() {
console.log(this.props.info);
    return (
      <div>
        <h1>Profesisonal Information</h1>
        <table>
            <tr>
                <td>Designation</td>
                <td>: {this.props.info.designation}</td>
            </tr>
            <tr>
                <td>Core Responsibility</td>
                <td>:  {this.props.info.responsibility}</td>
            </tr>
            <tr>
                <td>Organization Name</td>
                <td>: {this.props.info.organization}</td>
            </tr> 
        </table>
      </div>
    );
  }
}

export default Profesisonal;