import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { userEdit } from "../../store/action/user";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SaveIcon from "@mui/icons-material/Save";
import { getMyOrders } from "../../store/action/user";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { patchOrder } from "../../store/action/user";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { chunk } from "lodash";
import BackDrop from "../../components/BackDrop/BackDrop";

function getStatusColor(status) {
  switch (status) {
    case 0:
      return "#FFC107";
    case 1:
      return "#28A745";
    case 2:
      return "#DC3545";
    default:
      return "gray";
  }
}

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orders = useSelector((store) => store.user.activeUser.order);
  const open = useSelector((store) => store.loader.open);
  const token = useSelector((store) => store.user.activeUser.token);
  const userDetails = useSelector((store) => store.user.userDetails);
  const { address, _id, __v, role, password, ...user } = userDetails;
  const [ordersWithStatus, setOrdersWithStatus] = useState([]);
  const [chunks, setChunks] = useState(1);
  const [page, setPage] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const disableInput = watch("disableInput");

  const handlePagination = (event, value) => {
    setPage(value - 1);
  };

  const handleChange = (event) => {
    const { value: status, name: orderId } = event.target;
    dispatch(patchOrder({ orderId, token, payload: { status } }));
    setOrdersWithStatus(
      ordersWithStatus.map((item) => {
        if (item._id === orderId) {
          return { ...item, status };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    dispatch(getMyOrders(token));
  }, []);

  useEffect(() => {
    if (!orders || orders.length === 0) return;
    const orderCopy = [...orders];
    const data = chunk(orderCopy.reverse(), 5);
    setChunks(data.length);
    const modifiedOrders = data[page].map((item) => {
      const totalPrice = item.products
        .reduce((acc, item) => {
          return acc + item.productId.price * item.quantity;
        }, 0)
        .toFixed(2);
      return { ...item, totalPrice };
    });
    setOrdersWithStatus(modifiedOrders);
  }, [orders, page]);

  return (
    <Grid
      container
      spacing={4}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={6} md={3}>
        <Typography variant="h5" component="h2">
          User Information
        </Typography>
        {user &&
          Object.keys(user).map((item) => {
            return (
              <TextField
                fullWidth
                label={item}
                variant="outlined"
                defaultValue={user[`${item}`]}
                {...register(item, {
                  required: false,
                })}
                margin="normal"
              />
            );
          })}
        <TextField
          fullWidth
          label="New password"
          type="password"
          disabled={!disableInput}
          variant="outlined"
          {...register("password", {
            required: false,
          })}
          margin="normal"
        />
        <FormControlLabel
          control={<Checkbox {...register("disableInput")} />}
          label="Add new password"
        />
        <Button
          size="medium"
          variant="contained"
          color="primary"
          endIcon={<SaveIcon />}
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
      <Grid item xs={12} md={7}>
        <Typography>Recent Orders</Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Order Id</TableCell>
              <TableCell align="right">Total Price</TableCell>
              <TableCell>Order Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersWithStatus &&
              ordersWithStatus.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row._id}</TableCell>
                  <TableCell align="right">{`${row.totalPrice}`}</TableCell>
                  <TableCell>
                    {" "}
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <Select
                        name={row._id}
                        labelId="status"
                        id="status"
                        value={row.status}
                        onChange={handleChange}
                        sx={{
                          backgroundColor: getStatusColor(row.status),
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        <MenuItem value={0}>Pending</MenuItem>
                        <MenuItem value={1}>Placed Order</MenuItem>
                        <MenuItem value={2}>Canceled Order</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Stack spacing={2} mt={4}>
          <Pagination
            count={chunks}
            variant="outlined"
            shape="rounded"
            onChange={handlePagination}
          />
        </Stack>
      </Grid>
      <Grid item xs={6} md={8}>
        <Button
          size="medium"
          variant="outlined"
          color="secondary"
          onClick={() => {
            navigate("/logout");
          }}
        >
          Log Out
        </Button>
      </Grid>
      <BackDrop open={open} />
    </Grid>
  );
};

export default User;
