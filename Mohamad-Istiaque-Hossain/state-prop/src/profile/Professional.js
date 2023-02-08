import { Component } from 'react'; 

class Professional extends Component {
  render() {
    
    return (
      <div>
        <h3>Professional Information</h3>
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

export default Professional;