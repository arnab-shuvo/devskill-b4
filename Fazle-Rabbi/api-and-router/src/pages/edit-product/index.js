import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackDrop from "../../components/BackDrop/BackDrop";
import { useLocation } from "react-router-dom";

const EditProduct = ({ setProducts }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [validation, setValidation] = useState(false);
  const { id, product } = location.state;
  const [productInfo, setProductInfo] = useState(product[0]);

  const editProduct = () => {
    setValidation(true);
    const price = Number(productInfo.price);
    if (
      productInfo.title === "" ||
      productInfo.price === "" ||
      productInfo.description === "" ||
      productInfo.image === "" ||
      !price
    )
      return;

    // submiting the form
    const payload = {
      title: productInfo.title,
      price: price,
      description: productInfo.description,
      images: [productInfo.image],
    };

    setOpen(!open);
    axios
      .put(
        `https://api.escuelajs.co/api/v1/products/${id}`,
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setProducts([]);
        setOpen(false);
        navigate("/");
      })
      .catch((err) => {
        setOpen(false);
        alert("Error editing product");
      });
  };

  return (
    <Grid item md={12} xs={12}>
      <Grid container spacing={2} direction="column" alignItems="center">
        {["title", "price", "description", "image"].map((component) => {
          return (
            <Grid key={component} item xs={12}>
              <TextField
                required
                fullWidth
                label={component}
                variant="standard"
                onChange={(e) =>
                  setProductInfo({
                    ...productInfo,
                    [component]: e.target.value,
                  })
                }
                value={productInfo[`${component}`]}
              />
              {validation && productInfo[`${component}`] === "" && (
                <p>Value required!</p>
              )}
              {validation &&
                component === "price" &&
                productInfo.price !== "" &&
                !Number(productInfo.price) && <p>Number Value required!</p>}
            </Grid>
          );
        })}
        <Grid item xs={12} mb={4}>
          <Button
            size="small"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={editProduct}
          >
            Edit
          </Button>
        </Grid>
      </Grid>
      <BackDrop open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default EditProduct;
