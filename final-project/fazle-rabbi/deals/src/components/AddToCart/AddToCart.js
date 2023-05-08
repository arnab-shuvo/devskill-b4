import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BackDrop from "../BackDrop/BackDrop";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../store/action/product";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import { addToCart } from "../../store/action/user";
import { setOpenModal } from "../../store/reducer/loaderReducer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const style = {
  position: "absolute",
  right: 15,
  top: 75,
  width: 200,
  bgcolor: "background.paper",
  borderRadius: "12px",
  p: 4,
};

const AddToCart = ({ id }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const productInfo = useSelector((store) => store.products.productDetails)[0];
  const token = useSelector((store) => store.user.activeUser.token);
  const open = useSelector((store) => store.loader.open);

  useEffect(() => {
    dispatch(getProduct(id, token));
  }, []);

  return (
    <Grid sx={style} item md={12} xs={12}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <TextField
              required
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
                    "Sorry, total available stock is " + productInfo.stock,
                },
              })}
            />

            {errors["quantity"] && (
              <Alert severity="error">{errors["quantity"].message}</Alert>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} mb={4}>
          <Button
            size="small"
            variant="contained"
            endIcon={<AddShoppingCartIcon />}
            onClick={handleSubmit((e) => {
              dispatch(
                addToCart({
                  payload: {
                    id: id,
                    quantity: e.quantity,
                  },
                  token,
                })
              );
              dispatch(setOpenModal(false));
            })}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
      <BackDrop open={open} />
    </Grid>
  );
};

export default AddToCart;
