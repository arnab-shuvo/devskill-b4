import axios from "axios";
import {
  setProducts,
  setProductDetails,
  setEditProduct,
  setProductInfo,
} from "../reducer/productsReducer";
import { setOpen, setConfirm, setValidation } from "../reducer/loaderReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (arg, thunkApi) => {
    thunkApi.dispatch(setOpen(true));
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=11"
    );
    thunkApi.dispatch(setProducts(response.data));
    thunkApi.dispatch(setOpen(false));
    return response.data;
  }
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id, thunkApi) => {
    thunkApi.dispatch(setOpen(true));
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );

    thunkApi.dispatch(
      setProductDetails([
        {
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          images: response.data.images,
          category: response.data.category.name,
          price: response.data.price,
          updatedAt: response.data.updatedAt,
        },
      ])
    );
    thunkApi.dispatch(
      setEditProduct({
        title: response.data.title,
        price: response.data.price,
        description: response.data.description,
        image: response.data.images[0],
      })
    );
    thunkApi.dispatch(setOpen(false));
    return;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (args, thunkApi) => {
    try {
      thunkApi.dispatch(setValidation(true));
      const productInfo = args.productInfo;
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

      thunkApi.dispatch(setOpen(true));
      const res = await axios.post(
        "https://api.escuelajs.co/api/v1/products/",
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Product created", JSON.stringify(res.data));
      thunkApi.dispatch(setProducts([...args.products, res.data]));
      thunkApi.dispatch(
        setProductInfo({
          title: "",
          price: "",
          description: "",
          categoryId: 1,
          image: "",
        })
      );
      thunkApi.dispatch(setValidation(false));
      thunkApi.dispatch(setOpen(false));
      args.navigate("/");
    } catch {
      thunkApi.dispatch(setOpen(false));
      alert("Error creating product");
    } finally {
      return;
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (args, thunkApi) => {
    try {
      thunkApi.dispatch(setValidation(true));
      const productInfo = args.productInfo;
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
      thunkApi.dispatch(setOpen(true));
      await axios.put(
        `https://api.escuelajs.co/api/v1/products/${args.id}`,
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      thunkApi.dispatch(setProducts([]));
      thunkApi.dispatch(setValidation(true));
      thunkApi.dispatch(setOpen(false));
      args.navigate("/");
    } catch {
      thunkApi.dispatch(setOpen(false));
      alert("Error editing product");
    } finally {
      return;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (args, thunkApi) => {
    try {
      thunkApi.dispatch(setOpen(true));
      await axios.delete(`https://api.escuelajs.co/api/v1/products/${args.id}`);
      thunkApi.dispatch(setConfirm(false));
      thunkApi.dispatch(setOpen(false));
      thunkApi.dispatch(setProducts([]));
      args.navigate("/");
    } catch {
      thunkApi.dispatch(setConfirm(false));
      thunkApi.dispatch(setOpen(false));
      alert("Error deleting product");
    } finally {
      return;
    }
  }
);
