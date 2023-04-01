import { useEffect } from "react";
import axios from "axios";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import BackDrop from "../../components/BackDrop/BackDrop";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductDetails,
  setProducts,
  setEditProduct,
} from "../../reducer/productsReducer";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Product Title", width: 330 },
  {
    field: "category",
    headerName: "Category",
    width: 90,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 90,
  },
  {
    field: "updatedAt",
    headerName: "Last Updated",
    width: 200,
  },
];

const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector((store) => store.productsReducer.productDetails);

  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const deleteProduct = (id) => {
    console.log("delete");

    setOpen(!open);
    axios
      .delete(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        setConfirm(false);
        setOpen(false);
        dispatch(setProducts([]));
        navigate("/");
      })
      .catch((err) => {
        setConfirm(false);
        setOpen(false);
        alert("Error deleting product");
      });
  };

  useEffect(() => {
    setOpen(!open);
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then((response) => {
        setOpen(false);
        dispatch(
          setProductDetails([
            {
              id: response.data.id,
              title: response.data.title,
              description: response.data.description,
              images: response.data.images,
              category: response.data.category.name,
              price: response.data.price,
              updatedAt: response.data.updatedAt,
            },
          ])
        );
        dispatch(
          setEditProduct({
            title: response.data.title,
            price: response.data.price,
            description: response.data.description,
            image: response.data.images[0],
          })
        );
      });

    return () => {
      console.log("unmounting");
      dispatch(setProductDetails([{}]));
    };
  }, []);

  return (
    <>
      {product[0].id && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              marginLeft: "auto",
            }}
          >
            {" "}
            <Button onClick={() => navigate(`/edit-product/${product[0].id}`)}>
              Edit
            </Button>
            <Button onClick={() => setConfirm(true)}>Delete</Button>
          </div>
          <Divider />
          <Typography gutterBottom variant="p" component="div" p={3}>
            {product[0].description}
          </Typography>
          <Box
            style={{
              height: "350px",
              width: "100%",
              position: "relative",
              backgroundImage: `url(${product[0].images[0]})`,
              backgroundSize: "auto",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={product}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
        </div>
      )}
      {/* </Grid> */}
      <BackDrop open={open} setOpen={setOpen} />
      <Dialog
        open={confirm}
        onClose={() => setConfirm(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete the prouct?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You will lose this product forever, for the rest of your life. Make
            this decision with all your heart. Really, think about it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirm(false)}>Cancel</Button>
          <Button onClick={() => deleteProduct(product[0].id)} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductDetails;
