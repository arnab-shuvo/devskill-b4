import { Button, Typography } from '@mui/material';
import React from 'react';
const buttonStyle = {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    border: '2px solid',
};

const About = () => {
    return (
        //  about me section
        <section class="flex flex-row w-full px-20 pb-20 text-left">
            <div class="w-1/2 relative">
                <img class="hidden sm:block absolute object-cover h-screen w-full overflow-visible my-5 z-1"
                    src="https://demo.acmethemes.com/portfolio-web/wp-content/uploads/2019/01/portfolio_man_5.png" alt="" />
            </div>
            <div class="sm:w-1/2 flex flex-col justify-start p-6 mt-28">
                <Typography variant="h3" fontWeight='bold' gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body2" color='#808080' fontSize='1.1rem' mb={5} gutterBottom>
                    Hello, I’m a UI/UX Designer & Frontend Developer from Victoria, Australia. I hold a master degree of Web
                    Design from the World University.
                </Typography>
                <Typography variant="body2"  color='#5A5A5A' gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing el sed dhyjuo eiusmod in dunt ut labore et dolore
                    magna aliqua. Ut enim ahyuihd minim veniam, quihs nos trud exercitation ullamco laboris nisi ut aliquip
                    excommodo consequat. Duihys aute irure dolor ineniyht hgtyul.
                </Typography>
                <div class="flex flex-wrap my-12 space-x-6">
                    <Button variant="outlined" size="large" style={buttonStyle}>Download Resume</Button>
                </div>
            </div>
        </section>
        //  about me section
    );
};

export default About;