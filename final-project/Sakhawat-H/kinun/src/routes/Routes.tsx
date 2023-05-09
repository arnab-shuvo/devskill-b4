import { Routes as R, Route } from "react-router-dom";
import Home from "../pages/Home";

function Routes() {
  return (
    <R>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users />} />
    </R>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default Routes;
