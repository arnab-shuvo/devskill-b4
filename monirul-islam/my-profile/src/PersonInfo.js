import { Component } from 'react';

class PersonInfo extends Component {
    render() {
        return (
            <div>
                <p>Name:  {this.props.personInfo.name}</p>
                <p>Location:  {this.props.personInfo.Location}</p>
                <p>District: {this.props.personInfo.District}</p>
                <p>Country: {this.props.personInfo.Country}</p>
                <p>Education: {this.props.personInfo.Education}</p>
                <p>Graduation From: {this.props.personInfo.GraduationFrom}</p>
                
            </div>
        )
    }
}

export default PersonInfo;
