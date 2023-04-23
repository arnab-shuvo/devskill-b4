import axios from "axios";
import { setLogin, setCart } from "../reducer/userReducer";
import { setConfirm } from "../reducer/loaderReducer";
import { setOpen } from "../../store/reducer/loaderReducer";

export const userSignup = (data) => {
  return async () => {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, data);
    console.log("user created!");
  };
};

export const userLogin = (data) => {
  return async (dispatch) => {
    const loginData = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/signin`,
      data
    );
    dispatch(setLogin(loginData.data.userInfo));
  };
};

export const addToCart = (data) => {
  return async (dispatch) => {
    dispatch(setOpen(true));
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/cart`,
      { product: data.payload },
      {
        headers: {
          Authorization: `bearer ${data.token}`,
        },
      }
    );
    dispatch(setOpen(false));
    if (response.data.err) {
      return;
    }
    dispatch(setCart(response.data));
  };
};

export const removeCart = (data) => {
  return async (dispatch) => {
    dispatch(setOpen(true));
    const response = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/cart/${data._id}`,
      {
        headers: {
          Authorization: `bearer ${data.token}`,
        },
      }
    );
    console.log(response.data);
    dispatch(
      setCart({
        products: [],
      })
    );
    dispatch(setConfirm(false));
    dispatch(setOpen(false));
  };
};
