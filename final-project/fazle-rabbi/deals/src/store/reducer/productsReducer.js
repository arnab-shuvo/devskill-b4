import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    singleProduct: {
      id: "",
      title: "",
      price: "",
      description: "",
      image: "",
      stock: 0,
      category: {},
    },
    productDetails: [{}],
    editProduct: {
      id: "",
      title: "",
      price: "",
      description: "",
      image: "",
      stock: 0,
      category: {},
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
