import React from "react";  
import PersonalInfo from "./PersonalInfo";
import ProfessionalInfo from "./ProfessionalInfo";

class Profile extends React.Component {
    render(){
        return(
            <div>
                <PersonalInfo />
                <ProfessionalInfo />
            </div>
            
        );
    }
}

export default Profile;