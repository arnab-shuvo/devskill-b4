import axios from "axios";
import { login } from "../reducers/userSlice";

export const userLogin = (data) => {
  return async (dispatch, store) => {
    const loginData = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/signin`,
      {
        email: data.email,
        password: data.password,
      }
    );

    console.log(loginData.data.userInfo, "==loginData.data.userInfo");
    dispatch(login(loginData.data.userInfo));
  };
};

export const userSignup = (data) => {
  return async (dispatch, store) => {
    await axios.post(`${process.env.REACT_APP_API_BASE_URL}/signup`, data);
  };
};