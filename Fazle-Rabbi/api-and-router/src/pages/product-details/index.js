import { Grid } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import BackDrop from "../../components/BackDrop/BackDrop";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    setOpen(!open);
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${location.state.id}`)
      .then((response) => {
        setOpen(false);
        setProduct(response.data);
      });
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item container lg={8} spacing={2}>
        {product.id && (
          <Grid key={product.id} item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.images[0]}
                  alt="product image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )}
      </Grid>
      <BackDrop open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default ProductDetails;
