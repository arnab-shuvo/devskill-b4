/** @format */

import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile";
import { createContext, useState } from "react";

export const CounterContext = createContext(null);
export const NameContext = createContext(null);
export const ProfileContext = createContext(null);

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <ProfileContext.Provider
      value={{
        name: "arnab",
        age: 22,
        location: "Bangladesh",
      }}
    >
      <NameContext.Provider value={"Arnab"}>
        <CounterContext.Provider value={counter}>
          <button onClick={() => setCounter(counter + 1)}>Age +</button>
          <Profile />
        </CounterContext.Provider>
      </NameContext.Provider>
    </ProfileContext.Provider>
  );
}

export default App;
