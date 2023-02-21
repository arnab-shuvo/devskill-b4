import React from "react";  
class ProfessionalInfo extends React.Component{
    state={
        language: 'HTML5, CSS3, JavaScript',
        frameWork: 'ReactJS, Bootstrap',
        tools: 'Git, GitHub, Slack'
    }

    render() {
        return(
            <div>
                <h1>Personal Information.</h1>
                <h3>Language:{this.state.language}</h3>
                <h3>Frame Work:{this.state.frameWork}</h3>
                <h3>Other Tools: {this.state.tools}</h3>
            </div>
        );
    }
}

export default PersonalInfo;

