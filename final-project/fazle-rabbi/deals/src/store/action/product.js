import axios from "axios";
import {
  setProducts,
  setProductDetails,
  setEditProduct,
  setProductInfo,
} from "../../store/reducer/productsReducer";
import { setOpen, setConfirm } from "../../store/reducer/loaderReducer";

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(setOpen(true));
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=11"
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
      `https://api.escuelajs.co/api/v1/products/${id}`
    );

    dispatch(
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
    dispatch(
      setEditProduct({
        title: response.data.title,
        price: response.data.price,
        description: response.data.description,
        image: response.data.images[0],
      })
    );
    dispatch(setOpen(false));
    return;
  };
};

export const createProduct = (args) => {
  return async (dispatch) => {
    try {
      const productInfo = args.productInfo;
      const price = Number(productInfo.price);

      // submiting the form
      const payload = {
        title: productInfo.title,
        price: price,
        description: productInfo.description,
        categoryId: productInfo.categoryId,
        images: [productInfo.image],
      };

      dispatch(setOpen(true));
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
      dispatch(setProducts([...args.products, res.data]));
      dispatch(
        setProductInfo({
          title: "",
          price: "",
          description: "",
          categoryId: 1,
          image: "",
        })
      );

      dispatch(setOpen(false));
    } catch {
      dispatch(setOpen(false));
      alert("Error creating product");
    } finally {
      return;
    }
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
