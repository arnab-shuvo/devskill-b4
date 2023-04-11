import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import BackDrop from "../../components/BackDrop/BackDrop";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setEditProduct } from "../../reducer/productsReducer";
import { editProduct } from "../../action/product";

const EditProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const productInfo = useSelector((store) => store.products.editProduct);
  const open = useSelector((store) => store.loader.open);
  const validation = useSelector((store) => store.loader.validation);

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
                    setEditProduct({
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
                editProduct({
                  id: params.id,
                  productInfo,
                  navigate,
                })
              )
            }
          >
            Edit
          </Button>
        </Grid>
      </Grid>
      <BackDrop open={open} />
    </Grid>
  );
};

export default EditProduct;
