import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { getMyOrders } from "../../store/action/user";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { chunk } from "lodash";
import BackDrop from "../../components/BackDrop/BackDrop";
import { EditUser } from "../../components/EditUser/EditUser";
import { getCurrentUser } from "../../store/action/user";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orders = useSelector((store) => store.user.activeUser.order);
  const open = useSelector((store) => store.loader.open);
  const token = useSelector((store) => store.user.activeUser.token);
  const userDetails = useSelector((store) => store.user.userDetails);

  const [ordersWithStatus, setOrdersWithStatus] = useState([]);
  const [chunks, setChunks] = useState(1);
  const [page, setPage] = useState(0);

  const handlePagination = (event, value) => {
    setPage(value - 1);
  };

  useEffect(() => {
    dispatch(getMyOrders(token));
    dispatch(getCurrentUser(token));
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
      <EditUser allUserDetails={userDetails} isCurrent={true} />
      <Grid item xs={12} md={7}>
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
                        disabled
                        labelId="status"
                        id="status"
                        value={row.status}
                        sx={{
                          backgroundColor: "black",
                        }}
                      >
                        <MenuItem value={0}>Pending</MenuItem>
                        <MenuItem value={1}>Shipped</MenuItem>
                        <MenuItem value={2}>Delivered</MenuItem>
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
