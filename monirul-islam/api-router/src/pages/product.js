
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '../Components/Header/navBar';
import { Link } from 'react-router-dom';
import getProducts from './product.thunk';
import reset from './product.slice';
import ProductDetail from './productDetail.js';
import { useDispatch, useSelector } from "react-redux";

function Product() {
  const dispatch = useDispatch();
  //const [products, setProduct] = useState([]);
  const products=useSelector((state)=>state.product);
  console.log(products);
  // useEffect(() => {
  //   axios
  //     .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=20")
  //     .then((res) => {setProduct(res.data)
      
  //     });
     
  // }, []);
 
  useEffect(() => {
       dispatch(getProducts());
    // return () => {
    //     dispatch(reset());
    // };
    }, [getProducts]);

  return (<>
    <Navbar />
    {!getProducts && (
                <Grid container spacing={2} justifyContent="center">

                    <h3 style={{ color: "red" }}> Loading...</h3>
                </Grid>
            )}

      {getProducts && (
    <Grid container spacing={2}>
      {getProducts.map((prod) => (
        <Grid key={prod.id} item xs={8} lg={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={prod.images[0]}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {prod.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {prod.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Link to={`/productDetail/${prod.id}`} >Learn More</Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
      )}
  </>
  );
}

export default Product;
