import { useEffect } from "react";
import * as React from "react";
import Typography from "@mui/material/Typography";
import BackDrop from "../../components/BackDrop/BackDrop";
import Box from "@mui/material/Box";
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
import { setProductDetails } from "../../store/reducer/productsReducer";
import { setOpen, setConfirm } from "../../store/reducer/loaderReducer";
import { getProduct, deleteProduct } from "../../store/action/product";

const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const product = useSelector((store) => store.products.productDetails);
  const token = useSelector((store) => store.user.activeUser.accessToken);
  const open = useSelector((store) => store.loader.open);
  const confirm = useSelector((store) => store.loader.confirm);

  useEffect(() => {
    dispatch(getProduct(params.id, token));
    return () => {
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
              Add To Cart
            </Button>
            <Button onClick={() => dispatch(setConfirm(true))}>Delete</Button>
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
              backgroundImage: `url(${
                process.env.REACT_APP_BASE_URL + product[0].image
              })`,
              backgroundSize: "auto",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
          <div style={{ height: 400, width: "100%" }}>
            <>{product[0].title}</>
            <>{product[0].price}</>
            <>{product[0].stock}</>
            <>{product[0].category.name}</>
          </div>
        </div>
      )}
      <BackDrop open={open} setOpen={dispatch(setOpen)} />
      <Dialog
        open={confirm}
        onClose={() => dispatch(setConfirm(false))}
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
          <Button onClick={() => dispatch(setConfirm(false))}>Cancel</Button>
          <Button
            onClick={() =>
              dispatch(
                deleteProduct({
                  id: product[0].id,
                })
              ).then(() => navigate("/"))
            }
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductDetails;
