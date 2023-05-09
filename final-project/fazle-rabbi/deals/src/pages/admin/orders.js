import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { patchOrder } from "../../store/action/user";

function getStatusColor(status) {
  switch (status) {
    case 0:
      return "blue";
    case 1:
      return "black";
    case 2:
      return "#28A745";
    default:
      return "gray";
  }
}

export const Orders = ({ orders, setOrders }) => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.user.activeUser.token);

  const handleChange = (event) => {
    const { value: status, name: orderId } = event.target;
    dispatch(patchOrder({ orderId, token, payload: { status } }));
    setOrders(
      orders.map((item) => {
        if (item._id === orderId) {
          return { ...item, status };
        }
        return item;
      })
    );
  };

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Order Id</TableCell>
          <TableCell>User Email</TableCell>
          <TableCell align="right">Total Price</TableCell>
          <TableCell>Order Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders &&
          orders.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row._id}</TableCell>
              <TableCell>{row.userId.email}</TableCell>
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
  );
};
