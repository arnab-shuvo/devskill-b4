import logo from './logo.svg';
import { Component } from "react";
import { P } from "react";
import './App.css';

class Personal extends Component {
    render() {
        return (
            <div>
                <P>Location: Chattpgram</P>
                <P>Age: 24</P>
                <P>Gender: Male</P>
            </div>
        );
    }
}

export default Personal;