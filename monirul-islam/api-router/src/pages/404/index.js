import { Navigate, useLocation } from "react-router-dom";
import Product from '../product';
import { Grid } from '@mui/material';

const NotFound = () => {

   const location = useLocation();
   console.log(location,"==location");
  
    return (
        <>
        <Grid container spacing={2} justifyContent="center">
         <h2 style={{color:"red"}}>Not Found</h2>
        </Grid>
        </>
    );
}
export default NotFound;