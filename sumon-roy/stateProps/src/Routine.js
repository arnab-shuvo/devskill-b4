import logo from './logo.svg';
import React,{ Component } from 'react';
import './App.css';

class Routine extends Component{
    render(){
        console.log(this.props);

        console.log(this.props);
        const{information}=this.props;
        return(
            <div>
                <p>I am {information.name}.
                 Live in {information.location}.  
                 My office weekend {information.weekend}</p>
            </div>

        );

        
    }
}

export default  Routine;