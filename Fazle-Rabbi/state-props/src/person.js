import React from 'react'
import { Component } from 'react'

class Person extends Component{

    render(){
        return (
            <div>
                <hr />
                <li>
                    <ul>Hi I am {this.props.info.name}</ul>
                    <ul>I am {this.props.info.age} years old</ul>
                    <ul>I graduated from {this.props.info.education}</ul>
                    <ul>I live in {this.props.info.location}</ul>
                </li>
            </div>
        )
    }
}

export default Person;