import { Component } from "react";

class Profesisonal extends Component {
    render() {
        return (
            <div>
                <h4>Type of information: { this.props.data.type }</h4>
                <p>Profession: { this.props.data.profession }</p>
                <p>Email: { this.props.data.email }</p>
            </div>
        );
    }
}

export default Profesisonal;