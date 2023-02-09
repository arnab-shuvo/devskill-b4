import React, { Component } from "react";

class Personal extends Component {
    render() {
        return (
            <div>
                <h4>Type of information: { this.props.data.type }</h4>
                <p>Age: { this.props.data.age }</p>
                <p>Email: { this.props.data.email }</p>
            </div>
        );
    }
}

export default Personal;