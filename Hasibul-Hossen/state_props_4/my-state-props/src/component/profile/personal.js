import { Component } from "react";

class Personal extends Component {
    render() {
        // const { profile } = this.props.profileInfo;
        return (
            <div className="personal-information">
                <h4>Here is my personal information</h4>
                <ul>
                    <li>
                        <span>Name : </span>
                        <span>{this.props.profileInfo.name}</span>
                    </li>
                    <li>
                        <span>Age : </span>
                        <span>{this.props.profileInfo.age}</span>
                    </li>
                    <li>
                        <span>Sex : </span>
                        <span>{this.props.profileInfo.sex}</span>
                    </li>
                    <li>
                        <span>Nationality  : </span>
                        <span>{this.props.profileInfo.nationality}</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Personal;