import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "example",
  initialState: {
    products: [],
    singleProduct: {
      title: "",
      price: "",
      description: "",
      categoryId: 1,
      image: "",
    },
    productDetails: [{}],
    editProduct: {
      title: "",
      price: "",
      description: "",
      image: "",
    },
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductInfo: (state, action) => {
      state.singleProduct = action.payload;
    },
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
    setEditProduct: (state, action) => {
      state.editProduct = action.payload;
    },
  },
});

export const {
  setProducts,
  setProductInfo,
  setProductDetails,
  setEditProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
