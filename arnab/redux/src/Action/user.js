/** @format */

import { login } from "../Reducer/userSlice";

export const userLogin = () => {
  return async (dispatch, store) => {
    dispatch(login("Arnab"));
  };
};
