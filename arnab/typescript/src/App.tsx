/** @format */

import { createContext, useContext, useState } from "react";
import "./App.css";
import Home from "./Home";

export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme("dark")}>Change Theme</button>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
