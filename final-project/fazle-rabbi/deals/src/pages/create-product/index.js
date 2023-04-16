import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import BackDrop from "../../components/BackDrop/BackDrop";
import { useSelector, useDispatch } from "react-redux";
import { setProductInfo } from "../../store/reducer/productsReducer";
import { createProduct } from "../../store/action/product";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const products = useSelector((store) => store.products.products);
  const open = useSelector((store) => store.loader.open);
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
                value={productInfo[`${component}`]}
                {...register(component, {
                  required: "Value Required!",
                  onChange: (e) =>
                    dispatch(
                      setProductInfo({
                        ...productInfo,
                        [component]: e.target.value,
                      })
                    ),
                })}
              />
              {errors[component] && <p>{errors[component].message}</p>}
              {component === "price" &&
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
            onClick={handleSubmit(() =>
              dispatch(
                createProduct({
                  productInfo,
                  products,
                })
              ).then(() => navigate("/"))
            )}
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
