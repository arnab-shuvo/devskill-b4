import Home from './Home';
import {Component} from 'react';
import { Grid } from '@mui/material';
import img1 from './Images/portfolio.png';

const Card=()=> {
  
    return(
    <>
      
  <div >
      <Grid container spacing={3} justifyContent="center">
    <Grid spacing={3} container item lg={9}>
     <Grid className='black-bg' item lg={3}>

        <Home/>
     </Grid>
     <Grid className='black-bg' item  lg={3}>

        <Home/>
     </Grid>
     <Grid className='black-bg' item lg={3}>

<Home/>
</Grid>
</Grid>
   </Grid>
        </div>
        </>
    );
  
}
export default Card;