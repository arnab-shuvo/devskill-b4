import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import BackDrop from "../../components/BackDrop/BackDrop";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { keyframes } from "@mui/system";
import styled from "@emotion/styled";
import { checkout, getCart } from "../../store/action/user";

import { Typography } from "@mui/material";

const rattle = keyframes`
  0% {
    right: 20px;
  }
  50% {
    right: 12px;
  }
  100% {
    right: 22px;
  }
`;

const StyledButton = styled(Button)({
  animation: `${rattle} .7s 5 ease`,
});

const Cart = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.user.activeUser.cart);
  const toast = useSelector((store) => store.loader.toast);

  const [totalPrice, setTotalPrice] = useState(0);
  const open = useSelector((store) => store.loader.open);
  const token = useSelector((store) => store.user.activeUser.token);

  useEffect(() => {
    dispatch(getCart({ token }));
    setTotalPrice(
      products
        ? products.reduce((acc, item) => {
            return acc + item.productId.price * item.quantity;
          }, 0)
        : 0
    );
  }, [toast]);

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      {products?.length > 0 && (
        <Grid item>
          <Typography>My Cart</Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>
                    {" "}
                    <img
                      src={
                        process.env.REACT_APP_BASE_URL + item.productId.image
                      } // Replace with the image source you want to display
                      alt={item.productId.title}
                      style={{
                        width: "150px",
                        height: "100px",
                      }}
                    />
                  </TableCell>
                  <TableCell>{item.productId.title}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.productId.price * item.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      )}
      {(!products || products?.length === 0) && (
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          mt={15}
          sx={{
            fontWeight: "bold",
            padding: "0.25rem 0.5rem",
            borderRadius: "3px",
            color: "white",
          }}
        >
          Cart is empty
        </Typography>
      )}
      {products?.length > 0 && (
        <>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            mt={3}
            sx={{
              fontWeight: "bold",
              padding: "0.25rem 0.5rem",
              borderRadius: "3px",
              color: "white",
            }}
          >
            Total Price: ${totalPrice.toFixed(2)}
          </Typography>
          <StyledButton
            sx={{
              position: "fixed",
              top: 85,
              right: 20,
              zIndex: 1000,
              backgroundColor: "green",
              color: "white",
              fontWeight: "bold",
              padding: "0.25rem 0.5rem",
              borderRadius: "3px",
            }}
            size="large"
            variant="contained"
            endIcon={<ShoppingCartCheckoutIcon />}
            onClick={() => dispatch(checkout(token))}
          >
            CHECKOUT
          </StyledButton>
        </>
      )}
      <BackDrop open={open} />
    </Grid>
  );
};

export default Cart;
