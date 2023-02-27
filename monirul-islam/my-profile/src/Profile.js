import logo from './logo.svg';
import './App.css';
import style from 'styled-components'
import { Component } from 'react';
import PersonInfo from './PersonInfo.js';
import ProfessionInfo from './ProfessionInfo.js';


class Profile extends Component {
    
    Person = {
        name: "Monirul Islam",
        Location: "Rajshahi",
        District: "Rajshahi",
        Country: "Bangladesh",
        Education: "BSC in Computer Science And Engineering",
        GraduationFrom:"Pabna University of Science And Technology",
    }
    Profession = {
        Designation: "Software Engineer",
        CompanyName: "Leads Corporation Ltd.",
        CompanyLocation:"Dhaka",
        JobLocation:"Rajshahi",
    }
    render() {
        return (
            <div style={{ paddingLeft: "50px" }}>
                <h3 style={{ paddingLeft: "300px", color: "green" }}>My Profile</h3>

                <tr>
                    <td>
                        <h4>Personal Information</h4>
                        <PersonInfo personInfo={this.Person} />
                    </td>

                    <td style={{ paddingLeft: "100px" }}>
                        <h4>Professional Information</h4>
                        <ProfessionInfo ProfessionInfo={this.Profession} />
                        </td>
                    </tr>
              </div>
             );
    }
}

export default Profile;
