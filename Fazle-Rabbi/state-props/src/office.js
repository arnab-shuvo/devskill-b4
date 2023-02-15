import React from 'react'
import { Component } from 'react'

class Office extends Component{

    render(){
        return (
            <div>
                <hr />
                <li>
                    <ul>I work as a {this.props.info.occupation}</ul>
                    <ul>I work from {this.props.info.workplace}</ul>
                </li>
            </div>
        )
    }
}

export default Office;