import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductDetails } from "../../store/reducer/productsReducer";
import { getProduct } from "../../store/action/product";
import Modal from "@mui/material/Modal";
import { setOpenModal } from "../../store/reducer/loaderReducer";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useState } from "react";
import { addToCart } from "../../store/action/user";
import SignIn from "../../components/SignIn/SignIn";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const background =
  "url(https://images.unsplash.com/photo-1602330041000-4b8119482edf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80)";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const product = useSelector((store) => store.products.productDetails);
  const productInfo = useSelector((store) => store.products.productDetails)[0];
  const loggedIn = useSelector((store) => store.user.activeUser.loggedIn);
  const open = useSelector((store) => store.loader.openModal);
  const token = useSelector((store) => store.user.activeUser.token);
  const [payload, setPayload] = useState({});

  const handleOpen = () => dispatch(setOpenModal(true));
  const handleClose = () => dispatch(setOpenModal(false));

  const submit = (e) => {
    const payload = {
      payload: {
        id: product[0].id,
        quantity: e.quantity,
      },
      token,
    };
    if (!loggedIn) {
      setPayload(payload);
      handleOpen();
      return;
    }
    dispatch(addToCart(payload));
    navigate("/");
  };

  useEffect(() => {
    dispatch(getProduct(params.id));
    return () => {
      dispatch(setProductDetails([{}]));
    };
  }, []);

  return (
    <>
      <Card mt={4} mb={4}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item container lg={8}>
            <Grid item lg={12} mb={2}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                >
                  {product[0].category && product[0].category.name}
                </Link>
                <Typography color="text.primary">{product[0].id}</Typography>
              </Breadcrumbs>
            </Grid>
            {/* Product image section */}
            <Grid item xs={8} md={3} lg={3}>
              <Card>
                <CardMedia
                  component="img"
                  image={process.env.REACT_APP_BASE_URL + product[0].image}
                  title={product[0].title}
                  style={{ maxHeight: "500px", objectFit: "contain" }}
                />
              </Card>
            </Grid>
            {/* Product details section */}
            <Grid item md={6} lg={6}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    {product[0].title}
                  </Typography>
                  <Typography variant="h6" color="textSecondary" gutterBottom>
                    {product[0].price}
                  </Typography>
                  <Typography variant="body1">
                    {product[0].description}
                  </Typography>
                  <Box mt={2}>
                    <TextField
                      required
                      autoFocus
                      fullWidth
                      label="Quantity"
                      type="number"
                      variant="standard"
                      defaultValue={1}
                      {...register("quantity", {
                        required: "Value Required!",
                        min: { value: 1, message: "Quantity can't be 0" },
                        max: {
                          value: productInfo.stock,
                          message:
                            "Sorry, total available stock is " +
                            productInfo.stock,
                        },
                      })}
                    />
                  </Box>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={handleSubmit(submit)}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            {/* Payment and shipping details section */}
            <Grid
              display={"flex"}
              direction={"column"}
              item
              container
              md={3}
              lg={3}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                mt={3}
                sx={{
                  fontWeight: "bold",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "3px",
                  backgroundColor: product[0].stock > 0 ? "green" : "red",
                  color: "white",
                }}
              >
                {product[0].stock > 0 && "In Stock"}
                {product[0].stock === 0 && "Out of Stock"}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                Estimated delivery: 3-5 days
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="login"
        aria-describedby="login-before-checkout"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SignIn cartCache={payload} background={background} />
      </Modal>
    </>
  );
};

export default ProductDetails;
