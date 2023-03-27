import Navbar from '../Components/Header/navBar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './product';

const Home=()=>{
    return(
     <>
       <Product/>
       </> 
           
    );
}

export default Home;