import React from "react";
class ProfessionalInfo extends React.Component{
    state={
        name:'Anik Chandra Das.',
        age: 25,
        contact:'+8801402168594',
        email:'anikchandradas.me@gmail.com',
        gender:'male',
        country:'Bangladesh'
    };

    render() {
        return(
            <div>
                <h1>Personal Information.</h1>
                <h3>Name:{this.state.name}</h3>
                <h3>Age:{this.state.age}</h3>
                <h3>Contact:{this.state.contact}</h3>
                <h3>Email:{this.state.email}</h3>
                <h3>Gender:{this.state.gender}</h3>
                <h3>Country:{this.state.country}</h3>
            </div>
        );
    }
}

export default ProfessionalInfo;
