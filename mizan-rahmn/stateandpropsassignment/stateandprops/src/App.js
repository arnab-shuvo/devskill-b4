import './App.css';
import { Component } from 'react';
import Profile from './components/Profile';

class App extends Component{
  render() {
    return(
      <div className='App'>
        <Profile />
      </div>
    ); 
  }
}

export default App;
