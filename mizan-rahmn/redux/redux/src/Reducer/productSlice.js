/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product-slice",
  initialState: {
    productList: [],
  },
  reducers: {
    getProductList: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export default productSlice.reducer;
// Action creators are generated for each case reducer function
export const { getProductList } = productSlice.actions;