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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { chunk } from "lodash";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let products = useSelector((store) => store.products.products);
  const open = useSelector((store) => store.loader.open);
  const [productsChunks, setProductsChunks] = useState([]);
  const [productsLength, setProductsLength] = useState(1);
  const [page, setPage] = useState(0);

  const handlePagination = (event, value) => {
    setPage(value - 1);
  };

  useEffect(() => {
    if (products.length) {
      return;
    }
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (!products || products.length === 0) return;
    const productsCopy = [...products];
    const data = chunk(productsCopy.reverse(), 5);
    setProductsLength(data.length);
    setProductsChunks(data[page]);
  }, [products, page]);

  const showProduct = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item container lg={8} spacing={2}>
        {productsChunks.map((product, index) => {
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
      <Grid item container lg={8} spacing={2}>
        <Stack spacing={2} mt={4}>
          <Pagination
            count={productsLength}
            variant="outlined"
            shape="rounded"
            onChange={handlePagination}
          />
        </Stack>
      </Grid>
      <BackDrop open={open} />
    </Grid>
  );
};

export default Home;
