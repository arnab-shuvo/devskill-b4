import { Component } from "react";

class PersonalInformation extends Component {
    render (){
        return (
            <div>
                <h3>Name: {this.props.information.name}</h3>
                <h3>Location: {this.props.information.age}</h3>
                <h3>Name: {this.props.information.gender}</h3>
                <h3>Name: {this.props.information.location}</h3>
            </div>
        )
    }
}

export default PersonalInformation;