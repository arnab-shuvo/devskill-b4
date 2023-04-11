import './App.css';
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route>
        <Route index path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path="*" element={<>This is an error page!</>} />
    </Routes>
  );
}

export default App;
