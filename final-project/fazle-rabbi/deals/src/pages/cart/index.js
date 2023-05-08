import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import BackDrop from "../../components/BackDrop/BackDrop";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { setConfirm } from "../../store/reducer/loaderReducer";
import { setCart } from "../../store/reducer/userReducer";

const Cart = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.user.activeUser.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const open = useSelector((store) => store.loader.open);
  const confirm = useSelector((store) => store.loader.confirm);

  useEffect(() => {
    setTotalPrice(
      products.reduce((acc, item) => {
        return acc + item.productId.price * item.quantity;
      }, 0)
    );
  }, []);

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      {products.map((item) => {
        return (
          <Grid key={item._id} item>
            <Paper elevation={2} sx={{ p: 2 }}>
              <div>{item.productId.title}</div>
              <div>{item.quantity}</div>
              <div>Price: {item.productId.price * item.quantity}</div>
            </Paper>
          </Grid>
        );
      })}
      {products.length > 0 && (
        <>
          <div>{Math.ceil(totalPrice)}</div>
          <Button onClick={() => dispatch(setConfirm(true))}>
            Remove Cart
          </Button>
        </>
      )}
      <BackDrop open={open} />
      <Dialog
        open={confirm}
        onClose={() => dispatch(setConfirm(false))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will clear all the items from your cart.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(setConfirm(false))}>Cancel</Button>
          <Button
            onClick={() => {
              dispatch(
                setCart({
                  products: [],
                })
              );
            }}
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Cart;
