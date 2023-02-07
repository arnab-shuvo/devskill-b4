import { Component } from 'react';
import './App.css';

class Personal extends Component {
  render() {
console.log(this.props.info);
    return (
      <div>
        <h1>Personal Information</h1>
        <table>
            <tr>
                <td>Name</td>
                <td>: {this.props.info.name}</td>
            </tr>
            <tr>
                <td>Sex</td>
                <td>:  {this.props.info.sex}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>: {this.props.info.age}</td>
            </tr> 
            <tr>
                <td>Address</td>
                <td>: {this.props.info.address}</td>
            </tr> 
        </table>
      </div>
    );
  }
}

export default Personal;