/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "counter",
  initialState: {
    productList: [],
  },
  reducers: {
    listOfProduct: (state, action) => {
      state.productList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { listOfProduct } = productSlice.actions;

export default productSlice.reducer;
