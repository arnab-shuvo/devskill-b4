import { Box, Collapse, Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAdminLoader } from "../../store/reducer/loaderReducer";
import { useEffect, useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { getAllOrders } from "../../store/action/user";
import { chunk } from "lodash";
import { Orders } from "./orders";
import { Users } from "./users";
import { getAllUsers } from "../../store/action/user";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Admin = () => {
  const admin = useSelector((store) => store.loader.adminLoader);
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.user.activeUser.order);
  const users = useSelector((store) => store.user.allUsers);
  const token = useSelector((store) => store.user.activeUser.token);
  const [ordersWithStatus, setOrdersWithStatus] = useState([]);
  const [usersChunk, setUsersChunk] = useState([]);
  const [chunks, setChunks] = useState(1);
  const [usersLength, setUsersLength] = useState(1);
  const [ordersPageNumber, setOrdersPageNumber] = useState(0);
  const [usersPageNumber, setusersPageNumber] = useState(0);

  const handleOrdersPagination = (event, value) => {
    setOrdersPageNumber(value - 1);
  };

  const handleUsersPagination = (event, value) => {
    setusersPageNumber(value - 1);
  };

  useEffect(() => {
    dispatch(getAllOrders(token));
    dispatch(getAllUsers(token));
  }, []);

  useEffect(() => {
    if (!orders || orders.length === 0) return;
    const orderCopy = [...orders];
    const data = chunk(orderCopy.reverse(), 10);
    setChunks(data.length);
    const modifiedOrders = data[ordersPageNumber].map((item) => {
      const totalPrice = item.products
        .reduce((acc, item) => {
          return acc + item.productId.price * item.quantity;
        }, 0)
        .toFixed(2);
      return { ...item, totalPrice };
    });
    setOrdersWithStatus(modifiedOrders);
  }, [orders, ordersPageNumber]);

  useEffect(() => {
    if (!users || users.length === 0) return;
    const userWithoutAdmin = users.filter((item) => item.role !== "admin");
    const data = chunk(userWithoutAdmin.reverse(), 10);
    setUsersLength(data.length);
    setUsersChunk(data[usersPageNumber]);
  }, [users, usersPageNumber]);

  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center" spacing={5}>
        <Grid item xs={12} md={8}>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            sx={{ position: "fixed", top: "80px", left: "15px" }}
            endIcon={<ArrowDropDownIcon />}
            onClick={() => {
              dispatch(
                setAdminLoader({ ...admin, orderLoader: !admin.orderLoader })
              );
            }}
          >
            Orders
          </Button>
          <Collapse in={admin.orderLoader}>
            <Orders orders={ordersWithStatus} setOrders={setOrdersWithStatus} />
            <Stack spacing={2} mt={4}>
              <Pagination
                count={chunks}
                variant="outlined"
                shape="rounded"
                onChange={handleOrdersPagination}
              />
            </Stack>
          </Collapse>
        </Grid>

        <Grid item xs={12} md={8}>
          <Button
            size="medium"
            variant="contained"
            sx={{ position: "fixed", top: "120px", left: "15px" }}
            color="primary"
            endIcon={<ArrowDropDownIcon />}
            onClick={() => {
              dispatch(
                setAdminLoader({ ...admin, userLoader: !admin.userLoader })
              );
            }}
          >
            Users
          </Button>
          <Collapse in={admin.userLoader}>
            <Users users={usersChunk} />
            <Stack spacing={2} mt={4}>
              <Pagination
                count={usersLength}
                variant="outlined"
                shape="rounded"
                onChange={handleUsersPagination}
              />
            </Stack>
          </Collapse>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Admin;
