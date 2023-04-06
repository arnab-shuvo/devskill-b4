
import {getProductList} from './product.slice';
import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";


const getProducts=() => {
    return async function (dispatch){
        const res = await axios.get(
            "https://api.escuelajs.co/api/v1/products?offset=0&limit=20"
            );
        dispatch(getProductList(res.data));
        console.log(res.data);
    }
    
};

export default getProducts;