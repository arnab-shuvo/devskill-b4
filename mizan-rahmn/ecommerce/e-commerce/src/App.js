import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from './pages/home';
import Footer from './components/Footer';
import NotFound from './pages/404';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home/>} />
      <Route>
        <Route index path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route index path="/" element={<Footer/>} />
    </Routes>
  );
}

export default App;
