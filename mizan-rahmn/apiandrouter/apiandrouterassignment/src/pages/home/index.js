import Grid from '@mui/material/Grid';

import { useEffect, useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Anchor from '../../components/Anchor';

function App() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
      .then((res) => {        
        setProduct(res.data);
      });      
  }, []);
  console.log(products, "===products");

  const getProductDetail = (id) => {
    console.log(id, "===productId");
  }

  return (
    
      <Grid container spacing={2} justifyContent="center">
        <Grid item container lg={8} spacing={2}>
            {products.map(product => (
              <Grid key={product.id} item xs={8} lg={2}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={product.images[0]}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.title}
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

export default App;
