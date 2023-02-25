import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile";
import { useState } from "react";
import Office from "./Office";

function App() {
  const [page, setPage] = useState("Start");
  return (
    <div className="App">
      <button onClick={() => setPage("profile")}>Profile</button>
      <button onClick={() => setPage("office")}>Office</button>
      {page === "profile" && <Profile name={"Arnab"} />}
      {page === "office" && <Office location={"Arnab"} />}
    </div>
  );
}

export default App;
