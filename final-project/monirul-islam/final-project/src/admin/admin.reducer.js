import { usersReducer } from "./components/users/users.slice";
import { productsReducer } from "./components/products/products.slice";
import { categoriesReducer } from "./components/categories/categories.slice";
import { ordersReducer } from "./components/orders/orders.slice";

export const adminReducer = {
    usersReducer: usersReducer,
    productsReducer: productsReducer,
    categoriesReducer: categoriesReducer,
    ordersReducer: ordersReducer,
};
