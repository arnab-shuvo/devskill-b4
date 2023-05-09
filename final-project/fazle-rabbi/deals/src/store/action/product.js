import axios from "axios";
import {
  setProducts,
  setProductDetails,
  setEditProduct,
} from "../../store/reducer/productsReducer";
import { setOpen, setConfirm } from "../../store/reducer/loaderReducer";

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(setOpen(true));
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/products`
    );
    dispatch(setProducts(response.data));
    dispatch(setOpen(false));
    return response.data;
  };
};

export const getProduct = (id) => {
  return async (dispatch) => {
    dispatch(setOpen(true));
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/products/${id}`
    );
    dispatch(
      setProductDetails([
        {
          id: response.data._id,
          title: response.data.title,
          description: response.data.description,
          image: response.data.image,
          price: response.data.price,
          stock: response.data.stock,
          category: response.data.category,
        },
      ])
    );
    dispatch(
      setEditProduct({
        title: response.data.title,
        price: response.data.price,
        description: response.data.description,
        image: response.data.image,
        stock: response.data.stock,
        category: response.data.category,
      })
    );
    dispatch(setOpen(false));
    return;
  };
};

export const editProduct = (args) => {
  return async (dispatch) => {
    try {
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
      dispatch(setOpen(true));
      await axios.put(
        `https://api.escuelajs.co/api/v1/products/${args.id}`,
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(setProducts([]));

      dispatch(setOpen(false));
    } catch {
      dispatch(setOpen(false));
      alert("Error editing product");
    } finally {
      return;
    }
  };
};

export const deleteProduct = (args) => {
  return async (dispatch) => {
    try {
      dispatch(setOpen(true));
      await axios.delete(`https://api.escuelajs.co/api/v1/products/${args.id}`);
      dispatch(setConfirm(false));
      dispatch(setOpen(false));
      dispatch(setProducts([]));
    } catch {
      dispatch(setConfirm(false));
      dispatch(setOpen(false));
      alert("Error deleting product");
    } finally {
      return;
    }
  };
};
