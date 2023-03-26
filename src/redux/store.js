import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './reducers/cartSlice';
import productSlice from './reducers/productSlice';
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});