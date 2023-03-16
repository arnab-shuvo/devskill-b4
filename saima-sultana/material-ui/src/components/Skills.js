import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
const styles = {
    backgroundImage: `url('https://demo.acmethemes.com/portfolio-web/wp-content/uploads/2019/01/laptop-1209008.jpg')`,
    backgroundSize: 'cover',
    height: '500px',
    width: '100%',
};
const Skills = () => {
    return (
        // my skills section
        <Box className='bg-fixed object-contain mx-auto max-w-full h-[80vh] relative z-4 text-white text-center bg-center bg-cover' style={styles}>
            <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
            >
                <div class="flex flex-col h-full">
                    <Typography mt={6} variant="h3" fontWeight='bold' gutterBottom>
                        My skills
                    </Typography>
                    <div class="m-20 flex flex-row space-x-20 justify-center">
                        <div>
                            <div
                                class="w-48 h-48 rounded-full border-4 border-white flex items-center justify-center opacity-100">
                                <p class="text-5xl">100%</p>
                            </div>
                            <p class="mt-10 uppercase text-2xl font-bold">Photoshop</p>
                        </div>
                        <div>
                            <div
                                class="w-48 h-48 rounded-full border-4 border-white flex items-center justify-center opacity-100">
                                <p class="text-5xl">100%</p>
                            </div>
                            <p class="mt-10 uppercase text-2xl font-bold">JavaScript</p>
                        </div>
                        <div>
                            <div
                                class="w-48 h-48 rounded-full border-4 border-white flex items-center justify-center opacity-100">
                                <p class="text-5xl">100%</p>
                            </div>
                            <p class="mt-10 uppercase text-2xl font-bold">Python</p>
                        </div>
                        <div>
                            <div
                                class="w-48 h-48 rounded-full border-4 border-white flex items-center justify-center opacity-100">
                                <p class="text-5xl">100%</p>
                            </div>
                            <p class="mt-10 uppercase text-2xl font-bold">html & css</p>
                        </div>

                    </div>
                </div>
            </div>
        </Box>
        // my skills section
    );
};

export default Skills;