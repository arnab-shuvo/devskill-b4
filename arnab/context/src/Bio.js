/** @format */

import { useContext } from "react";
import { CounterContext } from "./App";
import { NameContext } from "./App";
import { ProfileContext } from "./App";

const Bio = () => {
  const counter = useContext(CounterContext);
  const name = useContext(NameContext);
  const profile = useContext(ProfileContext);
  return (
    <>
      <p>My Name Is: {name}</p>
      <p>My Age Is: {counter}</p>
      <p>My location Is: {profile.location}</p>
    </>
  );
};

export default Bio;
