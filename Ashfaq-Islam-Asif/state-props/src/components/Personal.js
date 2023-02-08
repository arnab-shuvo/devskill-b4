import { Component } from 'react';

class Personal extends Component {
    render() {
        const { name, location, age, gender } = this.props.info;
        return (
            <div>
                <h1>Personal Information</h1>
                <p>Name: {name}</p>
                <p>Location: {location}</p>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
            </div>
        );
    }
}

export default Personal;
