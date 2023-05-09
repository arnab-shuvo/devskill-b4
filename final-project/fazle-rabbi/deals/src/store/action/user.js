import axios from "axios";
import {
  setLogin,
  setCart,
  setUserDetails,
  setAllUsers,
  setOrder,
} from "../reducer/userReducer";
import { setOpen, setOpenModal } from "../../store/reducer/loaderReducer";
import { setToast } from "../../store/reducer/loaderReducer";

export const userSignup = (data) => {
  return async (dispatch) => {
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, data);
      dispatch(setToast("Sign Up successful!"));
    } catch {
      dispatch(setToast("Something Went wrong..."));
    }
  };
};

export const userLogin = (data, cartCache) => {
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

    const cartData = await axios.get(`${process.env.REACT_APP_BASE_URL}/cart`, {
      headers: {
        Authorization: `bearer ${loginData.data.userInfo.token}`,
      },
    });

    dispatch(setLogin(loginData.data.userInfo));
    dispatch(setUserDetails(userInfo.data));
    dispatch(setCart(cartData.data));
    if (cartCache) {
      dispatch(
        addToCart({ ...cartCache, token: loginData.data.userInfo.token })
      );
      dispatch(setOpenModal(false));
    }
  };
};

export const userEdit = (data, isCurrentUser) => {
  return async (dispatch) => {
    console.log(data);
    if (isCurrentUser) {
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
      return;
    }
    await axios.patch(
      `${process.env.REACT_APP_BASE_URL}/user/${data.id}`,
      data.payload,
      {
        headers: {
          Authorization: `bearer ${data.token}`,
        },
      }
    );
  };
};

export const getCurrentUser = (token) => {
  return async (dispatch) => {
    dispatch(setOpen(true));
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/my-detail`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    dispatch(setUserDetails(response.data));
    dispatch(setOpen(false));
  };
};

export const getUserDetails = () => {
  return async (dispatch) => {
    const loginData = await axios.get(`${process.env.REACT_APP_BASE_URL}/user`);
    dispatch(setLogin(loginData.data.userInfo));
  };
};

export const getCart = (data) => {
  return async (dispatch) => {
    dispatch(setOpen(true));
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/cart`, {
      headers: {
        Authorization: `bearer ${data.token}`,
      },
    });
    dispatch(setCart(response.data));
    dispatch(setOpen(false));
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
    dispatch(setToast("Added to Cart!"));
  };
};

export const getMyOrders = (token) => {
  return async (dispatch) => {
    dispatch(setOpen(true));
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/order/my-order`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    dispatch(setOrder(response.data));
    dispatch(setOpen(false));
  };
};

export const getAllOrders = (token) => {
  return async (dispatch) => {
    dispatch(setOpen(true));
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/order`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    dispatch(setOrder(response.data));
    dispatch(setOpen(false));
  };
};

export const getAllUsers = (token) => {
  return async (dispatch) => {
    dispatch(setOpen(true));
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/user`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    dispatch(setAllUsers(response.data));
    dispatch(setOpen(false));
  };
};

export const patchOrder = (data) => {
  return async (dispatch) => {
    await axios.patch(
      `${process.env.REACT_APP_BASE_URL}/order/${data.orderId}`,
      data.payload,
      {
        headers: {
          Authorization: `bearer ${data.token}`,
        },
      }
    );
    dispatch(setToast("Order Updated!"));
  };
};

export const checkout = (token) => {
  return async (dispatch) => {
    dispatch(setOpen(true));

    await axios.get(`${process.env.REACT_APP_BASE_URL}/order/checkout`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    dispatch(setOpen(false));
    dispatch(setToast("Order Has Been Placed!"));
  };
};
