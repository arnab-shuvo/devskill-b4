import { Component } from 'react';

class Professional extends Component {
    render() {
        const { profession, experience } = this.props.info;
        return (
            <div>
                <h1>Professional Information</h1>
                <p>Profession: {profession}</p>
                <p>Experience: {experience}</p>
            </div>
        );
    }
}

export default Professional;
