import { useParams, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

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

    console.log(id, "===id");
    return (
        <>
          {!product && <p>Loading....</p>}
          {product && (
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
                    <p>{product.price}</p>
                    <p>{product.category.name}</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </>
      );
};

export default ProductDetail;