import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile";
import { useState } from "react";

function App() {
  const [appName, setAppName] = useState("Class Component");
  return (
    <div className="App">
      <h1>{appName}</h1>
      <button onClick={() => setAppName("Hook")}>Change App</button>
      <Profile name={"Arnab"} />
    </div>
  );
}

export default App;
