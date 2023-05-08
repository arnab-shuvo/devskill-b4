import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes/Routes';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div style={{margin: "20px"}}>
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
