/** @format */

import logo from "./logo.svg";
import "./App.css";
import Counter from "./Home";
import Age from "./about";
import { useRef } from "react";

function App() {
  const input = useRef(null);

  const click = () => {
    input.current.click();
    input.current.innerHTML = "Changed Button";
  };

  return (
    <>
      <input
        onFocus={() => console.log("Focused")}
        id="name"
        type="text"
        placeholder="Name"
      />
      <button ref={input} onClick={() => console.log("I am Demo Button")}>
        Demo Button
      </button>
      <button onClick={click}>Click</button>
    </>
  );
}

export default App;
