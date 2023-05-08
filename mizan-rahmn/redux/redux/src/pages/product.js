/** @format */

import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import getAllProduct from '../Action/product';
import { useDispatch, useSelector } from 'react-redux';

function Product() {
  const dispatch = useDispatch();
  const products=useSelector((state)=>state.product.productList);
  console.log(products,"==product");

  useEffect(() => {
       dispatch(getAllProduct());
      
    }, [getAllProduct, dispatch]);

    console.log(products,"==product");

  return (<>
    {!products && (
                <Grid container spacing={2} justifyContent="center">

                    <h3 style={{ color: "red" }}> Loading...</h3>
                </Grid>
            )}

      {products && (
    <Grid container spacing={2}>
      {products.map((prod) => (
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
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
      )}
  </>
  );
};

export default Product;
