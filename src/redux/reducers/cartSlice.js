import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  price: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // check if the product exists
      // if it exists update only amount else add it to the cart
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.amount += 1;
        state.amount += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          amount: (state.amount = 1),
        });
        state.amount = 1;
      }
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount + 1;
      state.amount += 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount - 1;
      state.amount -= 1;
    },
    removeProduct: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      state.amount = 0;
    },
  },
});

export const { addToCart, increase, decrease, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;