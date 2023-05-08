import { useParams, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MultipleSelectChip from "../../components/chip";

const CreateProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
          .post(`https://api.escuelajs.co/api/v1/products/`)
          .then((res) => setProduct(res.data))
          
      }, []);
    return (
        <>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField type="text" id="title" label="Please Enter Product Name" placeholder="Product Name" variant="outlined" />
      <TextField type="number" id="price" label="Please Enter Product Price" placeholder="Product Price" variant="outlined" />
      {/* <textarea type="text" id="description" label="Please Enter Product Description" variant="outlined" /> */}
      <TextField
          type="text"
          id="description"
          label="Please Enter Product Description"
          placeholder="Description for Product"
          multiline
          rows={3}
        />
      < MultipleSelectChip />      
    </Box>
        </>
      );
};

export default CreateProduct;