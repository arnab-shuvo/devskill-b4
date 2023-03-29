import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    //alert({id});
    useEffect(() => {
        axios
            .get(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            });
           
    }, []);
    
    return (
      <>
  
      {!product &&<p>Loading...</p>}
       {product && (
           
         <Grid container spacing={2} justifyContent="center">
         <Grid item spacing={2} container lg={8}>
            <Grid item xs={12}>
                <img src={product.images[0]}/>

            </Grid>
             <Grid container item xs={12}>

              <p>{product.title}</p>
             </Grid>

         </Grid>
     </Grid>
       )
       }
        </>
    );
}

export default ProductDetail;

