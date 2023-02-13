import { Component } from "react";
import Personal from "./personal";
import Professional from "./professional";

class index extends Component {

    state = {
        personal: {
            name: "Hasibul Hossen",
            age: 25,
            sex: "Male",
            nationality: "Bangladeshi"
        },
        professional: {
            company: "Bdevs",
            designation: "Frontend Web Developer",
            address: "Mirpur DOHS",
        }
    }

    render() {
        return (
            <>
                <h1>My Profile</h1>
                <Personal profileInfo={this.state.personal} />
                <Professional profileInfo={this.state.professional} />
            </>
        )
    }
}

export default index;