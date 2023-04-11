/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      user: "",
      token: "",
      role: "",
    },
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload, "==action.payload");
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.name = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
