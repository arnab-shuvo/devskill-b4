import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    activeUser: {
      token: "",
      role: "",
      user: "",
      loggedIn: false,
    },
    cart: {
      products: [],
    },
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
      };
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setLogin, setLogout, setCart } = loginSlice.actions;

export default loginSlice.reducer;
