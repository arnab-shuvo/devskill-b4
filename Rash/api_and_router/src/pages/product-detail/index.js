import { useNavigate, useParams, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/navigation";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, "==location");

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => {
        navigate("/404", {
          state: `/product-detail/${id}`,
        });
      });
  }, []);
  return (
    <>
      {!product && <p>Loading....</p>}
      {product && ( <>
        <Navigation />
        <Grid container spacing={2} justifyContent="center">
          <Grid item container lg={8} spacing={2}>
            <Grid item xs={12}>
              <img src={product.images[0]} />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} md={6}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </Grid>
              <Grid item xs={12} md={6}>
                <p>Price: ${product.price}</p>
                <p>Category Name: {product.category.name}</p>
                <p>Updated At: {product.category.updatedAt}</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid> </>
      )}
    </>
  );
};

export default ProductDetail;
