import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    activeUser: {
      accessToken: "",
      role: "",
      user: "",
      loggedIn: false,
    },
  },
  reducers: {
    setLogin: (state, action) => {
      state.activeUser = { ...action.payload, loggedIn: true };
    },
    setLogout: (state) => {
      state.activeUser = {
        accessToken: "",
        role: "",
        user: "",
        loggedIn: false,
      };
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;

export default loginSlice.reducer;
