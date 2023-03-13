import React from 'react';
import Button from '@mui/material/Button';
import { Icon } from '@mui/material';  
const buttonStyle = {
    textTransform: 'capitalize',
    fontWeight: 'bold',
};
// backgroundColor: 'hsl(217, 57%, 51%)',
const Hero = () => {
    return (
        //hero section
        <section
            className='bg-[url("https://demo.acmethemes.com/portfolio-web/wp-content/uploads/2019/01/portfolio_man_41920x800.png")] object-cover h-[30rem] w-full bg-cover text-gray-700'>
            <div className="max-w-7xl mx-auto py-36 px-4 sm:px-6 lg:px-8 text-left">
                <h1 className="text-xl sm:text-5xl font-semibold sm:mb-2">Keiths Williams</h1>
                <h4 className="text-sm sm:text-base uppercase tracking-[0.3rem] sm:tracking-[0.5rem]">Senior Developer</h4>
                <div className="hidden sm:flex flex-wrap my-10 space-x-6">
                    <Button variant="outlined" size="large" style={buttonStyle}>View Portfolio<Icon sx={{ fontSize: 20 }}>arrow_forward_ios</Icon></Button>
                    <Button variant="contained" size="large"  style={buttonStyle}>Download Resume<Icon sx={{ fontSize: 20 }}>arrow_forward_ios</Icon></Button>
                </div>
            </div>
        </section>
        //hero section
    );
};

export default Hero;