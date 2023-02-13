import logo from './logo.svg';
import { Component } from "react";
import { P } from "react";
import './App.css';

class Profile extends Component {
    render() {
        return (
            <div>
                <P>Name: {this.props.information.name}</P>
            </div>
        );
    }
}

export default Profile;