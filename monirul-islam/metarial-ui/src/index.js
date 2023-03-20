import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Card from './Card.jsx';
import Blog from './Blog';
import Portfolio from './Portfolio';
import Footer from './Footer.js';
import Skills from './Skills';
import About from './About';
import reportWebVitals from './reportWebVitals';
import Experience from './Experience';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <Portfolio/>
 <About/>
 <Blog/>
 
   <Experience/>
 <Card/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
