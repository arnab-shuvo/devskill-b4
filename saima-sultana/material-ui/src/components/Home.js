import React from 'react';
import About from './About';
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
        </div>
    );
};

export default Home;