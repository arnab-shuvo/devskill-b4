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
      const products = action.payload.map((v) => ({
        ...v,
        discount: Math.random() > 0.7 ? Math.floor(Math.random() * 50) : 0,
      }));
      state.products = products;
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
