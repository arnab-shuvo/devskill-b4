import React from 'react';
import './Firstsection.css'
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';




const Firstsection = () => {
    return (
      
        <Container maxwidth='sm' style={{backgroundColor: "rgb(225, 250, 241)"}}>
        <img src="https://demo.acmethemes.com/portfolio-web/wp-content/uploads/2019/01/logo_free_version.png" alt=""/>
      
       
           
        <Grid container  spacing={3}>
              <Grid justifyContent="center" alignItems="center" item xs={6}>
                <Box sx={{mt:8,pt:6,ml:8}}>
                  <Typography sx={{ mt: 4 }} variant='h4'>
                  Keiths Williams
                  </Typography>
                  <Typography sx={{ my:2 }}>
                    SSENIOR DEVELOPER
                  </Typography>
                  <Button variant="outlined">View Portfolio</Button>
                  <Button sx={{ mx: 2 }} variant="contained" color="primary"> Download Resume  </Button>
                  </Box>
                
              </Grid>
              <Grid item xs={6}>
                <img className='righthand' height="500px" src="https://demo.acmethemes.com/portfolio-web/wp-content/uploads/2019/01/portfolio_man_5.png" alt=""/>
              </Grid>
        </Grid>


      

        </Container>
    );
};

export default Firstsection;