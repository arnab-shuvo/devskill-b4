import { cartReducer } from "./components/cart/cart.slice";
import { profileReducer } from "./components/profile/profile.slice";

export const clientReducer = {
    cartReducer: cartReducer,
    profileReducer: profileReducer,
};
