import axios from "axios";
import { setLogin } from "../reducer/userReducer";

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
