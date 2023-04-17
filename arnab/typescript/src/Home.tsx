/** @format */

import { createContext, useState, useContext } from "react";
import "./App.css";

interface Person {
  name: string;
  age: number;
  location: string;
}
export const ThemeContext = createContext("light");

function Home() {
  const theme = useContext(ThemeContext);
  console.log(theme, "===theme");

  const [counter, setCounter] = useState<Person[]>([
    {
      name: "Arnab",
      age: 10,
      location: "Bangladesh",
    },
  ]);

  const increase = () => {
    let temp = { ...counter };
    temp[0].age++;
    setCounter(temp);
  };
  const decrease = () => {
    let temp = { ...counter };
    temp[0].age--;
    setCounter(temp);
  };
  return (
    <ThemeContext.Provider value="dark">
      <p>Name is : {counter[0].name}</p>
      <p>Age is : {counter[0].age}</p>
      <p>Location is : {counter[0].location}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </ThemeContext.Provider>
  );
}

export default Home;
