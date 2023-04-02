import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import BackDrop from "../../components/BackDrop/BackDrop";
import { useSelector, useDispatch } from "react-redux";
import { setProductInfo } from "../../reducer/productsReducer";
import { createProduct } from "../../action/product";

const CreateProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.products);
  const open = useSelector((store) => store.loader.open);
  const validation = useSelector((store) => store.loader.validation);
  const productInfo = useSelector((store) => store.products.singleProduct);

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
                  dispatch(
                    setProductInfo({
                      ...productInfo,
                      [component]: e.target.value,
                    })
                  )
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
            onClick={() =>
              dispatch(
                createProduct({
                  productInfo,
                  products,
                  navigate,
                })
              )
            }
          >
            Create
          </Button>
        </Grid>
      </Grid>
      <BackDrop open={open} />
    </Grid>
  );
};

export default CreateProduct;
