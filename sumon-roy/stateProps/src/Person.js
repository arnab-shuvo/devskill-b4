import logo from './logo.svg';
import React,{ Component } from 'react';
import './App.css';

class Person extends Component{
    render(){
        console.log(this.props);
        const{information}=this.props;
        return(
            <div>
                <p>Name: {this.props.information.name}</p>
                <p>Location: {information.name}</p>
                <p>Age: {information.age}</p>

            </div>

        );

        
    }
}

export default  Person;