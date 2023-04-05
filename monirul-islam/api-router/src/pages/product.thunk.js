
// export const createProduct = createAsyncThunk(
// );
import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

 // const getProducts = createAsyncThunk("product/getProducts",  () => {
    // const {data} = await axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=20");
    
       const getProducts = createAsyncThunk("data/getProducts", async () => {
        const res = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
        console.log(res.data);
        return res.data;
    });
    
//});

export default getProducts;