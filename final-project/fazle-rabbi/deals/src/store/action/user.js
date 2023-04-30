import axios from "axios";
import { setLogin, setCart, setUserDetails } from "../reducer/userReducer";
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
    if (!loginData.data.userInfo) {
      alert("Invalid Credentials");
      return;
    }
    const userInfo = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/my-detail`,
      {
        headers: {
          Authorization: `bearer ${loginData.data.userInfo.token}`,
        },
      }
    );

    const cartData = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/cart`,
      {
        headers: {
          Authorization: `bearer ${loginData.data.userInfo.token}`,
        },
      }
    );
    dispatch(setLogin(loginData.data.userInfo));
    dispatch(setUserDetails(userInfo.data));
    dispatch(setCart(cartData.data));
  };
};

export const userEdit = (data) => {
  return async (dispatch) => {
    const response = await axios.patch(
      `${process.env.REACT_APP_BASE_URL}/my-detail`,
      data.payload,
      {
        headers: {
          Authorization: `bearer ${data.token}`,
        },
      }
    );
    dispatch(setUserDetails(response.data));
  };
};

export const getUserDetails = () => {
  return async (dispatch) => {
    const loginData = await axios.get(`${process.env.REACT_APP_BASE_URL}/user`);
    console.log(loginData.data);
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


