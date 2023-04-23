import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductDetails } from "../../store/reducer/productsReducer";
import { getProduct } from "../../store/action/product";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Modal from "@mui/material/Modal";
import AddToCart from "../../components/AddToCart/AddToCart";
import { setOpenModal } from "../../store/reducer/loaderReducer";

const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const product = useSelector((store) => store.products.productDetails);
  const loggedIn = useSelector((store) => store.user.activeUser.loggedIn);
  const open = useSelector((store) => store.loader.openModal);

  const handleOpen = () => dispatch(setOpenModal(true));
  const handleClose = () => dispatch(setOpenModal(false));

  useEffect(() => {
    dispatch(getProduct(params.id));
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
            {loggedIn && (
              <IconButton
                color="primary"
                fontSize="large"
                aria-label="add to shopping cart"
                sx={{
                  position: "fixed",
                  right: 15,
                  top: 75,
                  zIndex: 100,
                }}
                onClick={handleOpen}
              >
                <AddShoppingCartIcon />
              </IconButton>
            )}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <AddToCart id={product[0].id} />
            </Modal>
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
    </>
  );
};

export default ProductDetails;
