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
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../reducer/exampleReducer";
import { setProducts } from "../../reducer/productsReducer";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.exampleReducer.count);
  const products = useSelector((store) => store.productsReducer.products);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(`Total products viewed ${counter}`);
    if (products.length) {
      return;
    }

    setOpen(!open);
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=11")
      .then((response) => {
        setOpen(false);
        // setProducts(response.data);
        dispatch(setProducts(response.data));
      });
  }, []);

  const showProduct = (id) => {
    dispatch(increment());
    navigate(`/product-details/${id}`);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item container lg={8} spacing={2}>
        {products.map((product) => {
          return (
            <Grid key={product.id} item xs={12} md={4}>
              <Card
                sx={{ maxWidth: 345 }}
                onClick={() => showProduct(product.id)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.images[0]}
                    alt="product image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                      {product.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <BackDrop open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default Home;
