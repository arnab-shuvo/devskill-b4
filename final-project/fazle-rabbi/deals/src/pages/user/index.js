import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TextField from "@mui/material/TextField";
import { userEdit } from "../../store/action/user";

const User = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.user.activeUser.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const order = useSelector((store) => store.user.order);
  const token = useSelector((store) => store.user.activeUser.token);
  const userDetails = useSelector((store) => store.user.userDetails);
  const { address, _id, __v, role, password, ...user } = userDetails;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const disableInput = watch("disableInput");
  useEffect(() => {
    setTotalPrice(
      products.reduce((acc, item) => {
        return acc + item.productId.price * item.quantity;
      }, 0)
    );
  }, []);

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={12} md={4} ml={4}>
        {user &&
          Object.keys(user).map((item) => {
            return (
              <TextField
                fullWidth
                label={item}
                variant="standard"
                defaultValue={user[`${item}`]}
                {...register(item, {
                  required: false,
                })}
              />
            );
          })}
        <TextField
          fullWidth
          label="new password"
          type="password"
          disabled={!disableInput}
          variant="standard"
          {...register("password", {
            required: false,
          })}
        />
        <label htmlFor="disableInput">
          <input
            {...register("disableInput")}
            type="checkbox"
            id="disableInput"
          />
          Add new password
        </label>
        <Button
          size="small"
          variant="contained"
          endIcon={<AddShoppingCartIcon />}
          onClick={handleSubmit((e) => {
            dispatch(
              userEdit({
                payload: { ...userDetails, ...e },
                token,
              })
            );
          })}
        >
          Save Changes
        </Button>
      </Grid>
      <Grid item xs={12} md={6} ml={4}>
        {order.length === 0 && <h4>No Orders found for this User</h4>}
        {/* {order && <h1>Order History</h1>} */}
      </Grid>
    </Grid>
  );
};

export default User;
