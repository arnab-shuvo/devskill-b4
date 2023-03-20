import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';

const steps = [
    {
        label: 'WordPress',
        year: '2013-Present',
        role: 'Web Programmer',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.`,
    },
    {
        label: 'Marvel_Theme',
        year: '2013-2017',
        role: 'Creative Director',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.`,
    },
];

function Experience() {
    return (
        <section className='text-center block mx-auto'>
            <Typography mt={6} variant="h3" fontWeight='bold' gutterBottom>
                My Experience
            </Typography>
            <Box sx={{ maxWidth: 400 }} display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Stepper orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel>
                                {step.label} <br />
                                {step.year}
                            </StepLabel>
                            <StepContent>
                                <Box sx={{ mb: 2 }}>
                                    <div className='shadow-lg py-5'>
                                        <Typography variant="h6" fontWeight='bold' gutterBottom>{step.role}</Typography>
                                        <Typography>{step.description}</Typography>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </section>
    );
}
export default Experience;