import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    activeUser: {
      token: "",
      role: "",
      user: "",
      loggedIn: false,
      cart: {
        products: [],
      },
      order: [],
    },
    userDetails: {},
  },
  reducers: {
    setLogin: (state, action) => {
      state.activeUser = { ...action.payload, loggedIn: true };
    },
    setLogout: (state) => {
      state.activeUser = {
        token: "",
        role: "",
        user: "",
        loggedIn: false,
        cart: {
          products: [],
        },
        order: [],
      };
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setCart: (state, action) => {
      state.activeUser.cart = action.payload;
    },
    setOrder: (state, action) => {
      state.activeUser.order = action.payload;
    },
  },
});

export const { setLogin, setLogout, setCart, setUserDetails, setOrder } =
  loginSlice.actions;

export default loginSlice.reducer;
