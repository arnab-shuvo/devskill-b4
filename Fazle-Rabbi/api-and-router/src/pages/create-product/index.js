import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackDrop from "../../components/BackDrop/BackDrop";

const CreateProduct = ({ products, setProducts }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [validation, setValidation] = useState(false);
  const [productInfo, setProductInfo] = useState({
    title: "",
    price: "",
    description: "",
    categoryId: 1,
    image: "",
  });

  const createProduct = () => {
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
      categoryId: productInfo.categoryId,
      images: [productInfo.image],
    };

    setOpen(!open);
    axios
      .post(
        "https://api.escuelajs.co/api/v1/products/",
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("Product created", JSON.stringify(res.data));
        setProducts([...products, res.data]);
        setOpen(false);
        navigate("/");
      })
      .catch((err) => {
        setOpen(false);
        alert("Error creating product");
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
            onClick={createProduct}
          >
            Create
          </Button>
        </Grid>
      </Grid>
      <BackDrop open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default CreateProduct;
