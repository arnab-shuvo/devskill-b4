import { Component } from 'react';

class ProfessionInfo extends Component {
    render() {
       
		return (
            <div>
                <p>Designation:  {this.props.ProfessionInfo.Designation}</p>
                <p>Company Name:  {this.props.ProfessionInfo.CompanyName}</p>
                <p>Company location: {this.props.ProfessionInfo.CompanyLocation}</p>
                <p>Job location: {this.props.ProfessionInfo.JobLocation}</p>
            </div>
        )
     }
 }

export default ProfessionInfo;
