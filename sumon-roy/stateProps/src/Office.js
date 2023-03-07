import logo from './logo.svg';
import React,{ Component } from 'react';
import './App.css';

class Office extends Component{
    render(){
        console.log(this.props);
        const{information}=this.props;
        return(
            <div>
                My Office
            </div>

        );

        
    }
}

export default  Office;