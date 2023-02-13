import { Component } from "react";

class Professional extends Component {
    render() {
        // const {profile} = this.props.profileInfo;
        return (
            <div className="personal-information">
                <h4>Here is my professional information</h4>
                <ul>
                    <li>
                        <span>Company : </span>
                        <span>{this.props.profileInfo.company}</span>
                    </li>
                    <li>
                        <span>Designation : </span>
                        <span>{this.props.profileInfo.designation}</span>
                    </li>
                    <li>
                        <span>Address : </span>
                        <span>{this.props.profileInfo.address}</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Professional;