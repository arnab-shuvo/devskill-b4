import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
      .then((res) => {
        console.log(res, "===response");
      });
      //console.log(res.data);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
