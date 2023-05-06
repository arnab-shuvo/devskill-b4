import { Grid } from "@mui/material";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import BackDrop from "../../components/BackDrop/BackDrop";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/action/product";
import Box from "@mui/material/Box";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let products = useSelector((store) => store.products.products);
  const token = useSelector((store) => store.user.activeUser.token);
  const open = useSelector((store) => store.loader.open);

  useEffect(() => {
    if (products.length) {
      return;
    }
    dispatch(getProducts());
  }, []);

  const showProduct = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item container lg={8} spacing={2}>
        {products.map((product, index) => {
          const isFirstItem = index === 0;
          return (
            <Grid
              key={product._id}
              item
              xs={isFirstItem ? 12 : 4}
              md={isFirstItem ? 12 : 3}
              lg={isFirstItem ? 12 : 3}
            >
              <Card
                sx={{ maxWidth: isFirstItem ? "100%" : 345 }}
                onClick={() => showProduct(product._id)}
              >
                <CardActionArea>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center", // Center the image horizontally
                      alignItems: "center", // Center the image vertically
                      height: isFirstItem ? 300 : 140, // Set the container height
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: isFirstItem ? 300 : 140, // Set the image height
                        width: "auto",
                      }}
                      image={process.env.REACT_APP_BASE_URL + product.image}
                      alt="product image"
                    />
                    {product.discount > 0 && (
                      <Typography
                        sx={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          color: "white",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          padding: "0.25rem 0.5rem",
                          backgroundColor: "red",
                          borderRadius: "3px",
                        }}
                      >
                        -{product.discount}%
                      </Typography>
                    )}
                  </Box>
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
