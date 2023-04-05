import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    open: false,
    validation: false,
    confirm: false,
    gif: "https://media4.giphy.com/media/km7QNaRa2LW4FxeWDW/giphy.gif",
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setValidation: (state, action) => {
      state.validation = action.payload;
    },
    setConfirm: (state, action) => {
      state.confirm = action.payload;
    },
    setGif: (state, action) => {
      state.gif = action.payload;
    },
  },
});

export const { setOpen, setValidation, setConfirm, setGif } =
  loaderSlice.actions;

export default loaderSlice.reducer;
