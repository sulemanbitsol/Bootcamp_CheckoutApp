import { createSlice } from "@reduxjs/toolkit";

import { addProduct, getProductList } from "../actions/product.action";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addProduct.fulfilled, (state, action) => ({
      // append new product to existing state products array
      ...state,
      products: [...state.products, action.payload],
    }))
    builder.addCase(getProductList.fulfilled, (state, action) => ({
      // Add products to the state array
      ...state,
      products: action.payload,
    }))
  },
});

export default productSlice.reducer;
