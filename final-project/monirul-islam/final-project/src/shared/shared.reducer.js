import { productReducer } from "./components/product/product.slice";
import { productDetailReducer } from "./components/productDetail/productDetail.slice";
import { loginReducer } from "./components/login/login.slice";
import { signupReducer } from "./components/signup/signup.slice";

export const sharedReducer = {
    productReducer: productReducer,
    productDetailReducer: productDetailReducer,
    loginReducer: loginReducer,
    signupReducer: signupReducer,
};
