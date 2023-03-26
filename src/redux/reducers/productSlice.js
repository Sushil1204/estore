import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};
const API_URL = 'https://fakestoreapi.com/products';
export const getAllProducts = createAsyncThunk('/', async () => {
  try {
    const resp = await axios.get(`${API_URL}`);
    const data = await resp.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(`Error:${err.message}`);
  }
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
      state.isError = false;
    },
    [getAllProducts.rejected]: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;