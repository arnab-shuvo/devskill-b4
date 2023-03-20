import React from 'react';
import About from './About';
import Experience from './Experience';
import Hero from './Hero';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <Services/>
            <Experience/>
        </div>
    );
};

export default Home;