import './App.css';
import Person from './person';
import Office from './office';
import Calendar from 'react-calendar'
import { Component } from 'react'
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Profile extends Component {
  state = {
    name: 'Fazle Rabbi',
    age: '28',
    location: 'Uttara',
    education: 'BRAC University',
    workplace: 'home',
    occupation: 'Software Developer'
  }
  bookMeeting = (date) => {
    const meetingDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    let confirm = window.confirm("Do you want to book meeting on this date?")
    if (confirm) toast(`Booked a meeting on ${meetingDate}`)
  };  
  render(){
    return (
      <div>
        <h2>  My Profile</h2>
        <Person info={this.state}/>
        <Office info={this.state}/>
        <div>
          <h3>Book a meeting with me</h3>
          <Calendar onChange={this.bookMeeting}/>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="dark"
          />
        </div>
      </div>
    )
  }
} 

export default Profile;
