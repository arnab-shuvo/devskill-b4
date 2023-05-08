import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    open: false,
    confirm: false,
    openModal: false,
    gif: "https://media4.giphy.com/media/km7QNaRa2LW4FxeWDW/giphy.gif",
    toast: "",
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setConfirm: (state, action) => {
      state.confirm = action.payload;
    },
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
    setGif: (state, action) => {
      state.gif = action.payload;
    },
    setToast: (state, action) => {
      state.toast = action.payload;
    },
  },
});

export const { setOpen, setConfirm, setGif, setOpenModal, setToast } =
  loaderSlice.actions;

export default loaderSlice.reducer;
