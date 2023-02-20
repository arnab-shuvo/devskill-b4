import logo from './logo.svg';
import { Component } from "react";
import './App.css';

class Profile extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.information.name}</p>
            </div>
        );
    }
}

export default Profile;