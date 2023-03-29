/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useSearchParams } from "react-router-dom";
import { styled } from "@mui/system";
import Anchor from "../../components/Anchor";

const DetailButton = styled(Link)({
  color: "white",
  backgroundColor: "red",
  padding: 8,
  borderRadius: 4,
});

const product = [];

function App() {
  // const [products, setProduct] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=30")
      .then((res) => {
        product = res.data;
      });
  }, []);

  console.log(searchParams.getAll("name"), "==searchParams");

  // const getDetail = (id) => {
  //   console.log(id, "==product.id");
  // };
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item container lg={8} spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={8} lg={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={product.images[0]}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.tilte}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{product.price}</Button>
                <Anchor to={`product-detail/${product.id}`}>Show Detail</Anchor>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

const SecondaryComponent = () => {
  return <>{product.title}</>;
};

export default App;
