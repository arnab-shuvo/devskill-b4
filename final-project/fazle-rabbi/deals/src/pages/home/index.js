import { Grid } from "@mui/material";
import { useEffect } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import BackDrop from "../../components/BackDrop/BackDrop";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/action/product";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.products);
  const token = useSelector((store) => store.user.activeUser.token);
  const open = useSelector((store) => store.loader.open);

  useEffect(() => {
    if (products.length) {
      return;
    }
    dispatch(getProducts(), getProducts.fulfilled);
  }, []);

  const showProduct = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item container lg={8} spacing={2}>
        {products.map((product) => {
          return (
            <Grid key={product._id} item xs={12} md={4}>
              <Card
                sx={{ maxWidth: 345 }}
                onClick={() => showProduct(product._id)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={process.env.REACT_APP_BASE_URL + product.image}
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
      <BackDrop open={open} />
    </Grid>
  );
};

export default Home;
